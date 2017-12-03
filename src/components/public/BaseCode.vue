<template lang="pug">
  .basecode.pt20.pl40.mb30.mt30
    pre
      code(:class="type")
        slot.
</template>

<script>

// 代码高亮
import Highlight from 'highlight.js'

export default {
  name:'BaseCode',
  props:['type'],
  mounted () {
    // 高亮代码
    Highlight.initHighlighting()
  }
}
</script>


