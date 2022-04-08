/*
 * @Author: 夏开尧
 * @Description: file content
 * @Date: 2020-05-21 09:40:56
 * @LastEditTime: 2022-01-17 16:45:26
 * @LastEditors: 夏开尧
 * @UpdateLogs: logs
 */ 
import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

import axios from 'axios'
axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios  // 挂载在vue实例化对象上

import VueMask from 'v-mask'
Vue.use(VueMask); //掩码输入

import config from '@/config';
Vue.prototype.$config = config

import G2 from '@antv/g2';
import DataSet from '@antv/data-set';


import './assets/css/comment.css'

Vue.use(router);
Vue.use(ViewUI);
Vue.use(G2);
Vue.use(DataSet);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
