import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/Home'
import es6_let_const from '../page/javascript/Es6_let_const'
import html5_interview from '../page/html5/Interview'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes:[
    {
      path:'/',
      component:Home
    },
    {
      path:'/javascript/es6_let_const',
      component:es6_let_const
    },
    {
      path:'/html5/interview',
      component:html5_interview
    }
  ]
})
