import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/Home'
import es6_let_const from '../page/javascript/Es6_let_const'

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
    }
  ]
})
