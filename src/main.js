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
axios.defaults.baseURL = 'http://litc.pro:9999/v1';

//注册全局前置守卫
router.beforeEach((to, from, next) => {
  console.log(to,from);
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
