<template lang="pug">
  .col80.caption
    scroller
      .articleBox.col100
        .article.pt20.pb20.pl20.pr20.col75.h195.mb20.br20(v-for="article in articles")
          .main.col60.row100.dib.fl.mt10
            a.title.h40.lh40.fb.font30(:href="article.href") {{article.title}}
            .description.lh25.mt10.col80.colorText
              |{{article.description|limitWord}}
          .details.col40.row100.dib.mt10.font14
            .time.mt5
              span
                i.icon-time.colorSky.font30.vc
                span.dib.w50.tc 上传
              span.ml10
                |{{article.time}}
            .update.mt15
              span
                i.icon-update.colorSky.font30.vc
                span.dib.w50.tc(
                  :class="article.time==article.update?'':'colorSky'"
                ) 更新
              span.ml10(
                :class="article.time==article.update?'':'colorSky'"
              )
                |{{article.update}}
            .category.mt15
              span
                i.icon-category.colorSky.font30.vc
                span.dib.w50.tc
              a.ml10(:href="article.categoryHref")
                |{{article.category}}
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
      articles:[
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
      self.articles=res.data
    })
  },
  updated(){
    let $nav=document.querySelector('.navMobile')
    let $caption=document.getElementsByClassName('caption')[0]

    let baseHeight=document.documentElement.clientHeight||
    document.body.clientHeight
    let navHeight=$nav.clientHeight

    $caption.style.height=baseHeight-navHeight+'px'
    

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


