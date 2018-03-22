<template lang="pug">
  div
    header.header
      nav-top.header_navTop(active="/javascript")
    section.articleMain
      nav-left
      .articleMain_body
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


