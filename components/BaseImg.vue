<template lang="pug">
  a.baseImg(
    target="_blank"
    :href="src")
    img(
      :src="src"
      :style="{width:width+'%'}")
</template>

<script>
export default {
  name:'BaseImg',
  props:{
    src:{
      type:String,
      default:''
    },
    width:{
      type:[Number,String],
      default:40
    }
  }
}
</script>

<style lang="scss" scoped>
  // pc
  @media(min-width:1000px){
    .baseImg{
      display: inline-block;
      padding-top: 20px;
      margin-left: 100px;
      margin-bottom: 30px;
      margin-top: 30px;
      width: 90%;
    }
  }
  // 移动
  @media(max-width:1000px){
    .baseImg{
      display: inline-block;
      margin-top: 20px;
      width: 100%;
      >img{
        width:100% !important;
      }
    }
  }
</style>


