<template lang="pug">
  .limit.oa
    .article.col100
      base-caption
        span(slot="base") ES6学习笔记之字符和数值
        span(slot="detail") es6标准入门第二版
      base-title(title="字符")
      base-code
        slot.
          let str='abc'

          str.charAt(0) // es5
          str.at(0) // es6 可解析中文

          str.charCodeAt(0) // es5
          str.codePointAt(0) // es6

          str.indexOf('') // es5
          str.includes() // es6

          //- es6

          str.startWidth()
          str.endWidth()
          str.padStart()
          str.padEnd()

          `abc${str}` // 连接字符和变量
      base-title(title="数值")
      base-code
        slot.
          parseInt() parseFloat() // es5
          Number.parseInt() Number.parseFloat() // es6

          Number.isInteger() // 检查整数
          Number.isSafeInteger() // 检查安全的整数
          Number.isFinite() // 检查数字
          Number.isNaN() // 检查非数字

          Math.trunc() // 返回整数部分
          Math.sign() // 判断正负数
          Math.cbrt() // 立方
</template>

<script>

export default {
  mounted() {

    // 改变重复的id值
    var $ids=document.querySelectorAll('[id]')
    var idArr=[]

    $ids.forEach((id)=>{
      idArr.push(id.id)
    })

    for(var i=0;i<idArr.length;i++){
      for(var j=0;j<i;j++){
        if(idArr[i]==idArr[j]){
          $ids[i].id+=i
          $ids[i].href+=i
        }
      }
    }
  }
}
</script>

<style lang="scss">
  @import '../../assets/style/scss/article.scss';
</style>

