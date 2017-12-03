<template lang="pug">
  .basename.pt20.pl40.mb30
    .main
      i.icon-caption.colorSky.font25.vb
      span.fb.font30.ml20
        slot(name="base")
    .detail.mt15.ml45.colorSky.font16
      slot(name="detail")
    
</template>

<script>
export default {
  name:'BaseCaption'
}
</script>




