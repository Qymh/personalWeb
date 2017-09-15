<template lang="jade">
  #app
    .nav.col2.dib.row10
      span.dib.mt30.mb30.h50.lh50.tc.col10.colorSky.point
        |123
      ul
        li.h50.col10(v-for="nav in navs")
          a.dib.row10.col10.lh50.tc(:href="nav.href")
            {{nav.name}}
    router-view
</template>

<script>
export default {
  data () {
    return {
      navs:[
        {name:'HTML5',href:'/html'},
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
