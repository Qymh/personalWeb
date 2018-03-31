<template lang="pug">
  .baseText
    span
      slot
</template>

<script>
export default {
  name:'BaseText'
}
</script>

<style lang="scss" scoped>
  // pc
  @media(min-width:1000px){
    .baseText{
      font-size: 16px;
      margin-top: 30px;
      margin-left:100px;
      >span{
        line-height: 40px;
      }
    }
  }
  // 移动
  @media(max-width:1000px){
    .baseText{
      font-size: 14px;
      margin-top: 10px;
      margin-left:25px;
      >span{
        line-height: 35px;
      }
    }
  }
</style>


