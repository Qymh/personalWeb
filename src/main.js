import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import router from './router'

import './assets/js/filter'
import './assets/js/alert'

Vue.use(VueResource)

/*** 公用组件 ***/

// 文章题目 
Vue.component('BaseCaption',()=>import('./components/public/BaseCaption.vue'))
// 代码
Vue.component('BaseCode',()=>import('./components/public/BaseCode.vue'))
// 图片
Vue.component('BaseImg',()=>import('./components/public/BaseImg.vue'))
// 描述
Vue.component('BaseText',()=>import('./components/public/BaseText.vue'))
// 标题
Vue.component('BaseTitle',()=>import('./components/public/BaseTitle.vue'))
// 小标题
Vue.component('SmallTitle',()=>import('./components/public/SmallTitle.vue'))

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
