import Vue from 'vue'
import app from './app.vue'

import store from './store'

new Vue({
  el: '#app',
  render: h => h(app),
  store, // 注册vuex的store对象-->组件对象多了一个属性: $store
})