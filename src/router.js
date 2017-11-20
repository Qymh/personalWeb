import Vue from 'vue'
import Router from 'vue-router'
// 列表模版
import list from '@/components/List'

// html5
import html5_interview from '@/components/html5/Interview' // html5面试
import html5_pug from '@/components/html5/pug' // pug

// // js
import es6_let_const from '@/components/javascript/Es6_let_const' // let&const
import es6_destructuring from '@/components/javascript/Es6_destructuring' // 解构赋值

// vue
import vuex from '@/components/vue/vuex' // vuex
import veeValidate from '@/components/vue/veeValidate' // vee-validate

//framework
import token from '@/components/framework/token' // 全栈token

Vue.use(Router)

export default new Router({
  mode:'history',
  routes:[
    {
      path:'/',
      component:list
    },
    // html5
    {
      path:'/html5',
      component:list
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
      component:list
    },
    {
      path:'/javascript/let_const',
      component:es6_let_const
    },
    {
      path:'/javascript/destructuring',
      component:es6_destructuring
    },
    // vue
    {
      path:'/vue',
      component:list
    },
    {
      path:'/vue/vuex',
      component:vuex
    },
    {
      path:'/vue/veeValidate',
      component:veeValidate
    },
    // framework
    {
      path:'/framework',
      component:list
    },
    {
      path:'/framework/token',
      component:token
    } 
  ]
})
