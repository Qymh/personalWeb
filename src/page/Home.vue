<template lang="jade">
  .col8.caption.row10
    .articalBox.col10.mt50
      .artical.pt20.pb20.pl20.pr20.col7.h150.mb20.br20(v-for="artical in articals")
        .main.col6.row10.dib.fl.mt10
          a.title.h40.lh40.fb.font30(:href="artical.href") {{artical.title}}
          .description.lh25.mt10.col8 {{artical.description}}
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
            a.ml10(href="#")
              {{artical.category}}
</template>

<script>
export default {
  data () {
    return {
      articals:[
        {
          title:'ES6读书笔记之Let和Const',
          description:`测试文字测试文字测试文字
          测试文字测试文字测试文字
          测试文字测试文字测试文字
          测试文字测试文字测试文字`,
          time:'2017年9月14日3点15分',
          update:'2017年9月14日5点15分',
          category:'JavaScript'
        },
        {
          title:'测试名字测试名字',
          description:`测试文字测试文字测试文字
          测试文字测试文字测试文字
          测试文字测试文字测试文字
          测试文字测试文字测试文字`,
          time:'2017年9月14日3点15分',
          update:'2017年9月14日5点15分',
          category:'JavaScript'
        },
        {
          title:'测试名字测试名字',
          description:`测试文字测试文字测试文字
          测试文字测试文字测试文字
          测试文字测试文字测试文字
          测试文字测试文字测试文字`,
          time:'2017年9月14日3点15分',
          update:'2017年9月14日5点15分',
          category:'JavaScript'
        },
        {
          title:'测试名字测试名字',
          description:`测试文字测试文字测试文字
          测试文字测试文字测试文字
          测试文字测试文字测试文字
          测试文字测试文字测试文字`,
          time:'2017年9月14日3点15分',
          update:'2017年9月14日5点15分',
          category:'JavaScript'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/scss/home.scss'
</style>


