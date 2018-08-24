import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'

import './main.css'

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  store
})