<template lang="pug">
  .baseCode
    pre
      code(:class="type")
        slot.
</template>

<script>

import Highlight from 'highlight.js'

export default {
  name:'BaseCode',
  props:{
    type:{
      type:String,
      default:'javascript'
    }
  },
  mounted () {
    Highlight.initHighlighting()
  }
}
</script>

<style lang="scss" scoped>
  .baseCode{
    padding-left:70px;
    padding-right:70px;
    margin-bottom: 30px;
    margin-top: 30px;
    >pre{
      font-size: 15px;
      line-height: 24px;
      font-family: "Consolas, 'Courier New', monospace";
      white-space: pre;
      word-spacing: 2px;
    }
  }
</style>


