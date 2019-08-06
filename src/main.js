import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

import http from './http.js'
Vue.prototype.$http = http

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
