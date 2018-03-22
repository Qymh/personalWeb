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
  .baseText{
    font-size: 16px;
    margin-top: 30px;
    margin-left:100px;
    >span{
      line-height: 40px;
    }
  }
</style>


