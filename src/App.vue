<template lang="jade">
  #app.font16(@click="hideNav")
    .navMobile.z999.h100
      i.icon-nav.colorSky.point(@click.prevent.stop="showNav" show="no")
    .nav.col20.dib.row100
      a.dib.mt30.mb30.h50.lh50.tc.col100.colorSky.point(href="/")
        |Qymh
      ul
        li.h50.col100(v-for="(nav,index) in navs")
          a.dib.row100.col100.lh50.tc(:href="nav.href")
            {{nav.name}}
    router-view
</template>

<script>

// px转rem
import amfeFlexible from 'amfe-flexible';

// 动画库
import Velocity from 'velocity-animate'


export default {
  data () {
    return {
      navs:[
        {name:'主页',href:'/'},
        {name:'HTML5',href:'/html5'},
        {name:'JavaScript',href:'/javascript'},
        {name:'Vue',href:'/vue'},
        {name:'小框架',href:'/plugins'},
        {name:'项目架构',href:'/framework'}
      ]
    }
  },
  methods: {
    // 动态切换导航
    showNav(){
      var $nav=document.getElementsByClassName('nav')[0]
      var $i=document.querySelector('.navMobile i')
      var bool=$i.getAttribute('show')

      if(bool==='no'){
        Velocity($nav,{
          opacity:1
        },{
          duration:100,
          display:'block'
        })
        $i.setAttribute('show','yes')

      }else{

        Velocity($nav,{
          opacity:0
        },{
          duration:100,
          display:'none'
        })

        $i.setAttribute('show','no')
      }
    },
    // 人性化点击隐藏导航
    hideNav(){
      var $nav=document.getElementsByClassName('nav')[0]
      var $i=document.querySelector('.navMobile i')
      var bool=$i.getAttribute('show')

      if(bool==='yes'){
        Velocity($nav,{
          opacity:0
        },{
          duration:100,
          display:'none'
        })

        $i.setAttribute('show','no')
      }
    }
  }
}
</script>

<style lang="scss">
  @import './style/scss/app.scss';
</style>

