<template lang="pug">
  .col80.caption.row100
    .articalBox.col100
      .artical.pt20.pb20.pl20.pr20.col75.h195.mb20.br20(v-for="artical in articals")
        .main.col60.row100.dib.fl.mt10
          a.title.h40.lh40.fb.font30(:href="artical.href") {{artical.title}}
          .description.lh25.mt10.col80.colorText
            |{{artical.description|limitWord}}
        .details.col40.row100.dib.mt10.font14
          .time.mt5
            span
              i.icon-time.colorSky.font30.vc
              span.dib.w50.tc 上传
            span.ml10
              |{{artical.time}}
          .update.mt15
            span
              i.icon-update.colorSky.font30.vc
              span.dib.w50.tc(
                :class="artical.time==artical.update?'':'colorSky'"
              ) 更新
            span.ml10(
              :class="artical.time==artical.update?'':'colorSky'"
            )
              |{{artical.update}}
          .category.mt15
            span
              i.icon-category.colorSky.font30.vc
              span.dib.w50.tc
            a.ml10(:href="artical.categoryHref")
              |{{artical.category}}
</template>

<script>

import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.filter('limitWord',(value)=>{
  return value.trim().substr(0,90)+'...'
})

export default {
  data () {
    return {
      articals:[
      ]
    }
  },
  created () {
    let self=this
    // 动态获取数据
    let path=window.location.pathname.trim().toString()
    if(path=='/'){
      path='_home'
    }else{
      path=path.replace('/','_')
    }

    this.$http.get(`https://json.qymh.org.cn/api/personWeb${path}/value`).then(res=>{
      self.articals=res.data
    })
  },
  updated(){
    // 更改导航栏颜色
    let $a=document.querySelectorAll('.nav>ul>li>a')

    let index=0

    let path=window.location.pathname.trim().toString()

    switch (path) {
      case '/':
        index=0
        break;
      case '/html5':
        index=1
        break;
      case '/javascript':
        index=2
        break;
      case '/vue':
        index=3
        break;
      default:
        index=0
        break;
    }

    $a[index].style.color="deepskyblue"
    
  }
}
</script>

<style lang="scss">
@import '../style/scss/home.scss'
</style>


