<template lang="pug">
  .basecode.pt20.pl40.mb30.mt30
    pre
      code(:class="this.type")
        slot.
</template>

<script>
export default {
  props:['type'],
  mounted () {
    // html符号转义
    let $xml=document.querySelectorAll('.xml')
    for(let i=0;i<$xml.length;i++){
      let innerHtml=$xml[i].innerHTML
      innerHtml=innerHtml.replace(/</gi,'&lt')
      innerHtml=innerHtml.replace(/>/gi,'&gt')

      $xml[i].innerHTML=innerHtml

    }
  }
}
</script>


