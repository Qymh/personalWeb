<template lang="pug">
  .baseCode
    div.baseCode_currentCode(ref="currentCode")
      slot.
    pre
      code.hljs(v-html="code")
</template>

<script>

import Highlight from 'highlight.js'

export default {
  name:'BaseCode',
  data () {
    return {
      code:''  
    }
  },
  props:{
    type:{
      type:String,
      default:'javascript'
    }
  },
  mounted () {
    this.$nextTick(()=>{
      let currentCode=this.$refs.currentCode.innerHTML
      currentCode=currentCode.replace(/\&lt;/g,'<')
      currentCode=currentCode.replace(/\&gt;/g,'>')
  
      let parseCode=Highlight.highlightAuto(currentCode,[this.type]).value
      parseCode=parseCode.replace(/;/g,'')
      this.code=parseCode
    })
  }
}
</script>

<style lang="scss" scoped>
  // pc
  @media(min-width:1000px){
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
      &_currentCode{
        display: none;
      }
    }
  }
  // 移动
  @media(max-width:1000px){
    .baseCode{
      padding-left:10px;
      padding-right:10px;
      margin-bottom: 20px;
      margin-top: 20px;
      >pre{
        font-size: 14px;
        line-height: 24px;
        font-family: "Consolas, 'Courier New', monospace";
        white-space: pre;
        word-spacing: 2px;
      }
      &_currentCode{
        display: none;
      }
    }
  }
</style>


