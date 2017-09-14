<template lang="jade">
  .col8.caption
    .articalBox.col10
      .artical.pt20.pb20.pl20.pr20.col7.h250.br20(v-for="artical in articals")
        .main.col6.row10.dib.fl.mt30
          .title.h40.lh40.fb.font30 {{artical.title}}
          .description.lh25 {{artical.description}}
        .details.col4.row10.dib
          .time
            span
              i.icon-time
              span 上传日期
            span
              {{artical.time}}
          .update
            span
              i.icon-update
              span 最后更新
            span
              {{artical.update}}
          .category
            span
              i.icon-category
              span 分类
            span
              {{artical.category}}
</template>

<script>
export default {
  data () {
    return {
      articals:[
        {
          title:'测试名字测试名字',
          description:'测试文字测试文字测试文字',
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


