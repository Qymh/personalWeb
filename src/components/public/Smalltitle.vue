<template lang="jade">
  .smalltitle.mt30.mb20.font20.fb
    i.icon-smalltitle.colorSky.font30.fb.mr10.vs
    a.dib.col9.font20(:href="'#'+this.title")(:id="this.title") {{title}}
</template>

<script>
export default {
  props:['title']
}
</script>

