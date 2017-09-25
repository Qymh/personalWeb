import Vue from 'vue'
import Router from 'vue-router'
// 主页
import Home from '../page/Home'

// js主页
import javascript from '../page/JavaScript'

// html5主页
import Html5 from '../page/Html5'

// js
import es6_let_const from '../page/javascript/Es6_let_const' // let&const
import es6_destructuring from '../page/javascript/Es6_destructuring' // 解构赋值

// html5
import html5_interview from '../page/html5/Interview' // html5面试
import html5_pug from '../page/html5/pug' // pug

Vue.use(Router)

export default new Router({
  mode:'history',
  routes:[
    {
      path:'/',
      component:Home
    },
    // html5
    {
      path:'/html5',
      component:Html5
    },
    {
      path:'/html5/interview',
      component:html5_interview
    },
    {
      path:'/html5/pug',
      component:html5_pug
    },
    // js
    {
      path:'/javascript',
      component:javascript
    },
    {
      path:'/javascript/let_const',
      component:es6_let_const
    },
    {
      path:'/javascript/destructuring',
      component:es6_destructuring
    }
  ]
})
