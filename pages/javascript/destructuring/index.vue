<template lang="pug">
  div
    header.header
      nav-top.header_navTop(active="/javascript")
    section.articleMain
      nav-left
      .articleMain_body
        base-caption
          span(slot="base") ES6读书笔记之解构赋值
          span(slot="detail") es6标准入门第二版
        base-title(title="数组的赋值")
        small-title(title="赋值")
        base-code
          slot.
            let [x] = [3] // x=3

            let [x, y] = [3, 4] // x=3 y=4

            let [x, y=5] = [3] // x=3 y=5

            let [x=3] = [undefined] // x=3

            let [x=3] = [null] // x=null

            let [x, y] = [2] // x=2 y=undefined
        base-text
          slot.
            以上情况第一二种为基本赋值的常用方法<br>
            第三种添加了默认值,如果没有设定值覆盖,会取用默认值.<br>
            第四五种情况说明当赋值仅为undefined时,x会取默认值
            第六种情况说明对应值未赋值时为undefined
        small-title(title="常用情况")
        base-text
          slot.
            多变量赋值,交换两值
        base-code
          slot.
            let [a, b, c] = [1, 2, 3] // a=1,b=2,c=3
            let [x, y] = [y, x] // 交换x和y的值

        base-title(title="对象的赋值")
        small-title(title="赋值")
        base-code
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
        base-text
          slot.
            上述的第一二种情况为基本赋值<br>
            第三种情况为默认赋值
            第四种情况为嵌套赋值,且赋值的仅仅是<main>值传递</main>而非<main>引用传递</main>
            第五种情况为对象赋值
            第六种情况下的赋值语法不正确,报错
        small-title(title="常用情况")
        base-text
          slot.
            对对象属性的直观引用,更方便的获取模块
        base-code
          slot.
            const {floor,ceil,round} = Math
            floor(1.1) = 1 // floor==Math.floor
            ceil(1.1) = 2
            ceil(1.5) = 2

            import { ADD_TO_CHART, REMOVE_CHART } from '../mutation-type' // 引用模块
</template>

<script>

import NavTop from '~/components/NavTop'
import NavLeft from '~/components/NavLeft'
import BaseCaption from '~/components/BaseCaption'
import BaseTitle from '~/components/BaseTitle'
import SmallTitle from '~/components/SmallTitle'
import BaseText from '~/components/BaseText'
import BaseCode from '~/components/BaseCode'
import BaseImg from '~/components/BaseImg'

export default {
  components: {
    NavTop,
    NavLeft,
    BaseCaption,
    BaseTitle,
    SmallTitle,
    BaseText,
    BaseCode,
    BaseImg
  }
}
</script>


