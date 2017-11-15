
import Vue from 'vue'
import App from './App'
import router from './config/router'


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
