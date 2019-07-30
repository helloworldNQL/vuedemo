import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


import axios from 'axios'
// Vue继承axios
Vue.prototype.$axios = axios
// 引入vant的组件
import Vant from './vant/header'
Vant();

new Vue({
  render: h => h(App),
}).$mount('#app')
