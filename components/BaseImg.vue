<template lang="pug">
  .baseImg
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
  .baseImg{
    padding-top: 20px;
    margin-left: 100px;
    margin-bottom: 30px;
    margin-top: 30px;
    width: 90%;
  }
</style>


