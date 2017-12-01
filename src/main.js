// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);

// import ElUpload from 'element-upload'
// import 'element-theme-default/dist/upload.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

import axios from 'axios'
Vue.prototype.$http = axios

Vue.config.productionTip = false

import config from '@/util/config'  //配置参数 和 公共函数


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
