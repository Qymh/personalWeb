<template lang="pug">
  .article.col8.row10
    basecaption
      span(slot="base") ES6学习笔记之Let和Const
      span(slot="detail") 小标题
    basetitle(title="Let")
    smalltitle(title="定义")
    basetext
      slot
        span.
          在JavaScript中不存在块级作用域,
          当函数嵌套函数进行部署时,容易产生
        a(href="#") 闭包
        span ,
          main this
        span 的值指向不明确,并且在实际生产中容易
    basecode
      slot
        code.html.
          
</template>

<script>

// 代码高亮
import Highlight from '../../components/public/Highlight'

// 主标题组件
import Basecaption from '../../components/public/Basecaption'

// 标题组件
import Basetitle from '../../components/public/Basetitle'

// 小标题组件
import Smalltitle from '../../components/public/Smalltitle'

// 描述组件
import Basetext from '../../components/public/Basetext'

// 代码组件
import Basecode from '../../components/public/Basecode'

export default {
  mounted() {
    // 高亮代码
    Highlight.initHighlightingOnLoad()

    // 视口高度
    const baseHeight=document.documentElement.clientHeight||
    document.body.clientHeight

    var $limit=document.getElementsByClassName('limit')[0]

    $limit.style.height=baseHeight+'px'

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
  components: { Basecaption, Basetitle, Basetext, Basecode,Smalltitle}
}
</script>

<style lang="scss">
@import '../../style/scss/article.scss'
</style>

