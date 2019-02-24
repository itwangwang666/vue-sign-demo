import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//导入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//引入公共样式
import './styles/common.css'

import axios from 'axios'
Vue.prototype.$http = axios

//axios全局配置baseURL
axios.defaults.baseURL = 'http://www.litc.pro:9999/v1';
// `withCredentials` 表示跨域请求时是否需要使用凭证
axios.defaults.withCredentials = true, // 默认的

//注册全局前置守卫
router.beforeEach((to, from, next) => {
  // console.log(to,from);
  let token = localStorage.getItem('token') || ''

  if (token && to.path === '/signIn'){
    return next('/home')
  }

  if (token || to.path === '/signIn' || to.path === '/signUp'){
    next()
  }else{
    next('/')
  }
})

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.headers.Authorization = localStorage.getItem('token') || ''
  // console.log(config);
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  // console.log(response);
  response=response.data
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
