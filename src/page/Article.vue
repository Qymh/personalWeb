<template lang="pug">
  .article.col8.row10
    basename
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
    basetitle(title="测试标题?")
    basetext
      slot
        span.
          测试文字测试文字测试文字测试文字
    basecode
      slot
        code.html.
          
</template>

<script>

// 代码高亮
import Highlight from '../components/public/Highlight'

// 主标题组件
import Basename from '../components/public/Basename'

// 标题组件
import Basetitle from '../components/public/Basetitle'

// 小标题组件
import Smalltitle from '../components/public/Smalltitle'

// 描述组件
import Basetext from '../components/public/Basetext'

// 代码组件
import Basecode from '../components/public/Basecode'

export default {
  mounted() {
    Highlight.initHighlightingOnLoad()
  },
  components: { Basename, Basetitle, Basetext, Basecode,Smalltitle}
}
</script>

<style lang="scss">
@import '../style/scss/article.scss'
</style>

