<template lang="pug">
  .navTop
    nuxt-link.nav(
      v-for="(nav,index) in navs"
      :key="index"
      :to="nav.href"
      :class="active==nav.href?'colorSky':''"
      @click="navChange(nav)")
      span {{nav.name}}
</template>

<script>
export default {
  name:'NavTop',
  data () {
    return {
      navs:[
        {name:'主页',href:'/'},
        {name:'HTML5',href:'/html5'},
        {name:'JavaScript',href:'/javascript'},
        {name:'Vue',href:'/vue'},
        {name:'项目架构',href:'/framework'},
      ]
    }
  },
  props:{
    active:{
      type:String,
      default:[]
    }
  }
}
</script>

<style lang="scss" scoped>
  .navTop{
    height:80px;
    display: flex;
    flex-direction: row;
  }
  .nav{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    &:hover{
      color:#35caef;
      transition:color 0.2s ease-in-out;
    }  
  }
  .colorSky{
    color:#35caef;
  }
</style>


