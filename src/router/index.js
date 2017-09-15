import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/Home'
import Article from '../page/Article.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes:[
    {
      path:'/',
      component:Home
    },
    {
      path:'/test',
      component:Article
    }
  ]
})
