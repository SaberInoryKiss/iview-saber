import Vue from 'vue';
import Vuex from 'vuex';
import config from '@/config'
import util from '@/util';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        loginUserName:"",
        loginUserpwd:""
    },
    getters: {
        UserName(state) {
            if(!state.loginUserName) {
                state.loginUserName = util.storage.get(config.KEY.CACHE_LOGIN_USER_NAME)
            }
            return state.loginUserName
        }
    },
    mutations: {
        setLoginUserName(state,val){
            state.loginUserName = val
            state.loginUserName = util.storage.set(config.KEY.CACHE_LOGIN_USER_NAME,val)
        },
        setLoginUserpwd(state,val) {
            
            state.loginUserpwd = val
            state.loginUserpwd = util.storage.set(config.KEY.CACHE_LOGIN_PASS_PWD,val)
        },
        removeLoginUserName(state){
            state.loginUserName = ""
            util.storage.remove(config.KEY.CACHE_LOGIN_USER_NAME)
        },
        removeLoginUserpwd(state) {
            state.loginUserpwd = ""
            util.storage.remove(config.KEY.CACHE_LOGIN_PASS_PWD)
        }
    },
    actions: {
        
    }
});
 
export default store;