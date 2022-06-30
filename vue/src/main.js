// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import axios from 'axios'
import global from '@/utils/global'
import VUEX from 'vuex'
import store from './store'
import echarts from 'echarts'
import qs from 'qs'

Vue.config.productionTip = false
//全局挂载axios
Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts
Vue.prototype.qs = qs
Vue.prototype.global = global // 挂载全局配置模块
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VUEX)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  axios,
  router,
  store,
  render: h => h(App)
})
