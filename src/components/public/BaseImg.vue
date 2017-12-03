<template lang="pug">
  .baseimg.pt20.pl40.mb30.mt30.col90
    img(:src="this.src")(:style="{width:this.width+'%'}")
</template>

<script>
export default {
  name:'BaseImg',
  props:{
    src:String,
    width:{
      type:Number,
      default:40
    }
  }
}
</script>

