<template lang="pug">
  .limit.oa
    .article.col100
      basecaption
        span(slot="base") ES6学习笔记之Let和Const
        span(slot="detail") 小标题
      basetitle(title="Let")
      smalltitle(title="定义")
      basetext
        slot.
          
      basecode
        slot.
          
</template>

<script>
// 代码高亮
import Highlight from 'highlight.js'

// 主标题组件
import Basecaption from '../public/Basecaption'

// 标题组件
import Basetitle from '../public/Basetitle'

// 小标题组件
import Smalltitle from '../public/Smalltitle'

// 描述组件
import Basetext from '../public/Basetext'

// 代码组件
import Basecode from '../public/Basecode'

export default {
  mounted() {
    // 高亮代码
    Highlight.initHighlighting()

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
  },
  components: { Basecaption, Basetitle, Basetext, Basecode, Smalltitle }
}
</script>

<style lang="scss">
  @import '../assets/style/scss/article.scss';
</style>

