<template lang="jade">
  #app
    .nav.col2.dib.row10
      a.dib.mt30.mb30.h50.lh50.tc.col10.colorSky.point(href="/")
        |Qymh
      ul
        li.h50.col10(v-for="(nav,index) in navs")
          a.dib.row10.col10.lh50.tc(:href="nav.href")
            {{nav.name}}
    router-view
</template>

<script>
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
  }
}
</script>

<style lang="scss">
  @import './style/scss/app.scss';
</style>
