<template lang="jade">
  .smalltitle.mt30.mb20.font20.fb
    a.dib.col10(:href="'#'+this.title")(:id="this.title") {{title}}
</template>

<script>
export default {
  props:['title']
}
</script>

<style lang="scss" scoped>
  .smalltitle{
    padding:0 9%;
  }
</style>


