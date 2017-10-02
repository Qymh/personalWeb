<template lang="pug">
  #app.font16(@click="hideNav")
    .navMobile.z999.h100
      i.icon-nav.colorSky.point(@click.prevent.stop="nav" show="no")
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
      ],
      // 滑动的x起始值
      xStart:0,
      // 滑动的x离开值
      xEnd:0,
      // 滑动的y启动值
      yStart:0,
      // 滑动的y离开值
      yEnd:0
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
    },
    // 显示导航
    showNav(){
      let $nav=document.getElementsByClassName('nav')[0]
      let $i=document.querySelector('.navMobile i')
      let bool=$i.getAttribute('show')

      if(bool==='no'){
        Velocity($nav,{
          opacity:1,
          width:'80%'
        },{
          duration:200,
          display:'block'
        })

        $i.setAttribute('show','yes')
      }
    }
  },
  mounted () {
    /* 左右滑动显示导航 */
    let self=this

    function start(e){
      let mouse=e.touches[0]
      self.xStart=mouse.clientX
      self.yStart=mouse.clientY
    }

    function end(e){
      let mouse=e.changedTouches[0]
      let target=e.target
      let node=target.nodeName.toLowerCase()

      self.xEnd=mouse.clientX
      self.yEnd=mouse.clientY

      // y轴偏移值
      let differ=self.yEnd-self.yStart
      differ=Math.abs(differ)

      // 当y轴偏移值偏小的时候触发显示
      if(differ<200){
        // 当触摸在代码块时避免代码滑动带来的影响提高偏移值
        if(node==='code'){
          if(self.xEnd>self.xStart+350){
            self.showNav()
          }else if(self.xEnd<self.xStart-350){
            self.hideNav()
          }
        }else{
          if(self.xEnd>self.xStart+100){
            self.showNav()
          }else if(self.xEnd<self.xStart-100){
            self.hideNav()
          }
        }
      }else{
        return
      }
    }

    window.addEventListener('touchstart',start)
    window.addEventListener('touchend',end)
  }
}
</script>

<style lang="scss">
  @import './style/scss/app.scss';
</style>

