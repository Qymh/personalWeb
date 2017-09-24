<template lang="jade">
  .col8.caption.row10
    .articalBox.col10.mt50
      .artical.pt20.pb20.pl20.pr20.col7.h150.mb20.br20(v-for="artical in articals")
        .main.col6.row10.dib.fl.mt10
          a.title.h40.lh40.fb.font30(:href="artical.href") {{artical.title}}
          .description.lh25.mt10.col8.colorText {{artical.description|limitWord}}
        .details.col.row10.dib.mt10.font14
          .time.mt5
            span
              i.icon-time.colorSky.font30.vc
              span.dib.w50.tc 上传
            span.ml10
              {{artical.time}}
          .update.mt15
            span
              i.icon-update.colorSky.font30.vc
              span.dib.w50.tc 更新
            span.ml10
              {{artical.update}}
          .category.mt15
            span
              i.icon-category.colorSky.font30.vc
              span.dib.w50.tc 分类
            a.ml10(:href="artical.categoryHref")
              {{artical.category}}
</template>

<script>

import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.filter('limitWord',(value)=>{
  return value.trim().slice(0,120)+'...'
})

export default {
  data () {
    return {
      articals:[
      ]
    }
  },
  created () {
    var self=this
    this.$http.get('http://json.qymh.org.cn/api/personWeb_home/value').then(res=>{
      self.articals=res.data
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../style/scss/home.scss'
</style>


