<template lang="pug">
  .basetitle.mt50.mb20
    i.icon-basetitle.colorSky.dib.font20
    a.dib.font30.col90.fb.pb25.pl20(:id="this.title")(:href="'#'+this.title")
      |{{this.title}}
</template>

<script>

export default {
  props:['title']
}

</script>



