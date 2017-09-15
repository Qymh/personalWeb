<template lang="jade">
  .basetitle.mt50.mb20
    a.dib.font30.col10.fb.pb25(:id="this.title")(:href="'#'+this.title")
      {{this.title}}
</template>

<script>

export default {
  props:['title']
}

</script>

<style lang="scss" scoped>
  .basetitle{
    padding:0 8%;
    >a{
      border-bottom: 1px solid #ddd;
    }
  }
</style>


