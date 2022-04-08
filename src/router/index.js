/*
 * @Author: 夏开尧
 * @Description: file content
 * @Date: 2019-03-03 20:07:32
 * @LastEditTime: 2022-01-19 09:37:00
 * @LastEditors: 夏开尧
 * @UpdateLogs: logs
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
// import routes from './routers'

Vue.use(VueRouter)
const router = new VueRouter({
  // base:"/saber/",
  routes:[
    {
      path:'/login',
      component: () => import('@/views/user/login.vue'),
      meta:{
        title: '登录'
      }
    },
    {
      path:'/',
      component: () => import('@/views/main.vue'),
      children:[
        {
          path:'',
          component: () => import('@/views/home.vue'),
          meta:{
            title: '工作平台',
            order:'0-1',
            level:1
          }
        },
        {
          path:'userList',
          component: () => import('@/views/user/userList.vue'),
          meta:{
            title: '用户列表',
            order:'1-1'
          }
        },
        {
          path:'showList',
          component: () => import('@/views/show/showList.vue'),
          meta:{
            title: '票务列表',
            order:'2-1'
          }
        },
        {
          path:'textList',
          component: () => import('@/views/show/textList.vue'),
          meta:{
            title: '读取本地文件',
            order:'2-2'
          }
        },
        {
          path:'download',
          component: () => import('@/views/show/download.vue'),
          meta:{
            title: '下载excel模板',
            order:'2-3'
          }
        },
        {
          path:'css1',
          component: () => import('@/views/css/css1.vue'),
          meta:{
            title: 'css1',
            order:'4-1'
          }
        },
        {
          path:'css2',
          component: () => import('@/views/css/css2.vue'),
          meta:{
            title: 'css2',
            order:'4-2'
          }
        },
        {
          path:'css3',
          component: () => import('@/views/css/css3.vue'),
          meta:{
            title: 'css3',
            order:'4-3'
          }
        },
        {
          path:'css4',
          component: () => import('@/views/css/css4.vue'),
          meta:{
            title: 'css4',
            order:'4-4'
          }
        },
        {
          path:'css5',
          component: () => import('@/views/css/css5.vue'),
          meta:{
            title: 'css5',
            order:'4-5'
          }
        },
        {
          path:'css6',
          component: () => import('@/views/css/css6.vue'),
          meta:{
            title: 'css6',
            order:'4-6'
          }
        },
        {
          path:'css7',
          component: () => import('@/views/css/css7.vue'),
          meta:{
            title: 'css7',
            order:'4-7'
          }
        },
        {
          path:'css8',
          component: () => import('@/views/css/css8.vue'),
          meta:{
            title: 'css8',
            order:'4-8'
          }
        },
        {
          path:'css9',
          component: () => import('@/views/css/css9.vue'),
          meta:{
            title: 'css9',
            order:'4-9'
          }
        },
        {
          path:'css10',
          component: () => import('@/views/css/css10.vue'),
          meta:{
            title: 'css10',
            order:'4-10'
          }
        },
        {
          path:'css11',
          component: () => import('@/views/css/css11.vue'),
          meta:{
            title: 'css11',
            order:'4-11'
          }
        },
        {
          path:'css12',
          component: () => import('@/views/css/css12.vue'),
          meta:{
            title: 'css12',
            order:'4-12'
          }
        },
      ]
    },
    {
      path:'/data',
      component: () => import('@/views/data.vue'),
      meta:{
        title: '大屏数据'
      }
    },
  ],
  mode: 'history'
})


export default router

import ViewUI from 'view-design';
import util from '@/util';
import config from '@/config'
Vue.use(ViewUI);
ViewUI.LoadingBar.config({
  color: '#5cb85c',
  failedColor: '#f0ad4e',
  height: 5
})

//路由前置首卫
router.beforeEach((to, from, next) => {
  if(to.path !== "/login") {
    if(!util.storage.get(config.KEY.CACHE_LOGIN_USER_NAME) && !util.storage.get(config.KEY.CACHE_LOGIN_PASS_PWD)) {
      return next("/login")
    }
  }
  ViewUI.LoadingBar.start();
  if(to.meta && to.meta.title) document.title ="SaberInoryKiss" + to.meta.title
  next()
})

//路由后置首卫
router.afterEach(route => {
  ViewUI.LoadingBar.finish();
})