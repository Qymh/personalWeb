<template lang="pug">
  .limit.oa
    .article.col100
      basecaption
        span(slot="base") ES6读书笔记之解构赋值
        span(slot="detail") es6标准入门第二版
      basetitle(title="数组的赋值")
      smalltitle(title="赋值")
      basecode
        slot.
          let [x] = [3] // x=3

          let [x, y] = [3, 4] // x=3 y=4

          let [x, y=5] = [3] // x=3 y=5

          let [x=3] = [undefined] // x=3

          let [x=3] = [null] // x=null

          let [x, y] = [2] // x=2 y=undefined
      basetext
        slot.
          以上情况第一二种为基本赋值的常用方法<br>
          第三种添加了默认值,如果没有设定值覆盖,会取用默认值.<br>
          第四五种情况说明当赋值仅为undefined时,x会取默认值
          第六种情况说明对应值未赋值时为undefined
      smalltitle(title="常用情况")
      basetext
        slot.
          多变量赋值,交换两值
      basecode
        slot.
          let [a, b, c] = [1, 2, 3] // a=1,b=2,c=3
          let [x, y] = [y, x] // 交换x和y的值

      basetitle(title="对象的赋值")
      smalltitle(title="赋值")
      basecode
        slot.
          let {a} = {a: 3} // a=3

          let {a, b} = {a: 3,b: 4} // a=3 b=4

          let {a, b: 1} = {a:3} // a=3 b=1

          let {a: {b}} = {a: {b: 3}} // b=3 

          a.b // error

          let obj = {
            a: 1,
            b: 2
          }

          let {a: b} = obj // a=1 b=2


          let {x} = {3} // error
      basetext
        slot.
          上述的第一二种情况为基本赋值<br>
          第三种情况为默认赋值
          第四种情况为嵌套赋值,且赋值的仅仅是<main>值传递</main>而非<main>引用传递</main>
          第五种情况为对象赋值
          第六种情况下的赋值语法不正确,报错
      smalltitle(title="常用情况")
      basetext
        slot.
          对对象属性的直观引用,更方便的获取模块
      basecode
        slot.
          const {floor,ceil,round} = Math
          floor(1.1) = 1 // floor==Math.floor
          ceil(1.1) = 2
          ceil(1.5) = 2

          import { ADD_TO_CHART, REMOVE_CHART } from '../mutation-type' // 引用模块
      .h100
          
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
    var $ids = document.querySelectorAll('[id]')
    var idArr = []

    $ids.forEach((id) => {
      idArr.push(id.id)
    })

    for (var i = 0; i < idArr.length; i++) {
      for (var j = 0; j < i; j++) {
        if (idArr[i] == idArr[j]) {
          $ids[i].id += i
          $ids[i].href += i
        }
      }
    }
  },
  components: { Basecaption, Basetitle, Basetext, Basecode, Smalltitle }
}
</script>

<style lang="scss">
@import '../../assets/style/scss/article.scss';
</style>

