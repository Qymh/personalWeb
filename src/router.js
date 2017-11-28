import Vue from 'vue'
import Router from 'vue-router'
// 列表模版
const list=()=>import('@/components/List')

// html5
const html5_interview=()=>import('@/components/html5/Interview') // html5面试
const html5_pug=()=>import('@/components/html5/pug') // pug

// js
const es6_let_const=()=>import('@/components/javascript/Es6_let_const') // let&const
const es6_destructuring=()=>import('@/components/javascript/Es6_destructuring') // 解构赋值
const es6_str_number=()=>import('@/components/javascript/Es6_str_number.vue') // 字符和数值

// vue
const vuex=()=>import('@/components/vue/vuex') // vuex
const veeValidate=()=>import('@/components/vue/veeValidate') // vee-validate

//framework
const token=()=>import('@/components/framework/token') // 全栈token

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
    {
      path:'/javascript/str_number',
      component:es6_str_number
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
