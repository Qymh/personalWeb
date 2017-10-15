<template lang="pug">
  #app.font16(@touchend="hideNav")
    .navMobile.z999.h100
      i.icon-nav.colorSky.point(@touchend.prevent.stop="nav" show="no")
    .nav.col20.dib.row100
      a.dib.mt30.mb30.h50.lh50.tc.col100.colorSky.point(href="/")
        |Qymh
      ul
        li.h50.col100(v-for="(nav,index) in navs")
          a.dib.row100.col100.lh50.tc(:href="nav.href")
            |{{nav.name}}
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
    nav(){
      var $nav=document.getElementsByClassName('nav')[0]
      var $i=document.querySelector('.navMobile i')
      var bool=$i.getAttribute('show')

      if(bool==='no'){
        Velocity($nav,{
          opacity:1,
          width:'80%'
        },{
          duration:100,
          display:'block'
        })
        $i.setAttribute('show','yes')

      }else{

        Velocity($nav,{
          opacity:0,
          width:0
        },{
          duration:200,
          display:'none'
        })

        $i.setAttribute('show','no')
      }
    },
    // 隐藏导航
    hideNav(){
      let $nav=document.getElementsByClassName('nav')[0]
      let $i=document.querySelector('.navMobile i')
      let bool=$i.getAttribute('show')

      if(bool==='yes'){
        Velocity($nav,{
          opacity:0,
          width:0
        },{
          duration:200,
          display:'none'
        })

        $i.setAttribute('show','no')
      }
    }
  },
  created () {
    // 百度统计
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?bce79e37f357d4592a07a7d66195b6ac";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);

      //百度站长
      var bp = document.createElement('script');
      var curProtocol = window.location.protocol.split(':')[0];
      if (curProtocol === 'https') {
          bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';        
      }
      else {
          bp.src = 'http://push.zhanzhang.baidu.com/push.js';
      }
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(bp, s);

    })();
  }
}
</script>

<style lang="scss">
  @import './style/scss/app.scss';
</style>

