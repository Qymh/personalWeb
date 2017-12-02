<template lang="pug">
  .limit.oa
    .article.col100
      base-caption
        span(slot="base") ES6学习笔记之Let和Const
        span(slot="detail") 小标题
      base-title(title="Let")
      small-title(title="定义")
      base-text
        slot.
          
      base-code
        slot.
          
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
  @import '../assets/style/scss/article.scss';
</style>

