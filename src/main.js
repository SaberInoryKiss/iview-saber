import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

import axios from 'axios'
Vue.prototype.$axios = axios  // 挂载在vue实例化对象上

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
