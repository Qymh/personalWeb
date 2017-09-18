<template lang="pug">
  .basecode.pt20.pl40.mb30.mt30
    pre
      slot.
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .basecode{
    padding: 0 8%;
    >pre{
      font-size:18px;
      line-height: 22px;
      font-family: Microsoft YaHei;
      white-space: pre;
      >code{
        white-space: pre;
        padding:30px 40px;
      }
    }
  }
</style>

