<template lang="pug">
  div
    header.header
      nav-top.header_navTop(active="/javascript")
    section.articleMain
      nav-left
      .articleMain_body
        base-caption
          span(slot="base") ES6读书笔记之Let和Const
          span(slot="detail") es6标准入门第二版
        base-title(title="Let")
        small-title(title="定义")
        base-text
          slot.
            ES6新增Let用于变量声明,且此变量仅在当前
            #[main 块级作用域]有效
        base-code
          slot.
            for (let i = 0;i < 10;i++) {
            }
            console.log(i) // 'i is not defined'

            if (true) {
              let j = 6
            }

            console.log(j) // 'j is not defined'
        
        small-title(title="变量提升出错")
      base-text
        slot.
          ES5中 var 和 function 存在变量提升,即不论变量
          函数在哪个位置定义,最后的集成中,总会将他们放置
          在头部,但在 let 的使用方法中,如果变量在未定义前声明,则会报错
      base-code
        slot.
          i = 5
          let i // error

          typeof i
          let i // error

          typeof j
          var j // undefined

          j = 5
          var j // j=5

      small-title(title="不可重复声明")
      base-text
        slot.
          ES5中 var 声明变量 名称相同的变量在之后声明的会覆盖在之前的,
          但在let中会报错
      base-code 
        slot. 
          var i = 5
          var i = 6 // i=6

          let j = 5
          let j = 6 // error 
      small-title(title="let实战")
      base-text
        slot.
          用循环实现当点击一串li元素时,依次输出他们的位置索引
      base-code
        slot.
          let $lis = document.getElementsByClassName('li') // 获取li元素
          let len = $lis.length // li元素数组的长度

          for (let i;i < len;i++) {
            $lis[i].onclick = function () {
              console.log(i) // 点击后输出的便是对应索引
            }
          }
      base-text
        slot.
            如果将上面的代码 let i 变为 var i 点击任何一个li元素输出的结果
            是一样的为4,因为此时读取的i值是全局变量,也就是循环后的变量4
      base-title(title="Const")
      small-title(title="定义")
      base-text
        slot.
          const用于定义常量,且此常量定义后无法再改动
      base-code
        slot.
          const a = new Vue({
            el: '#demo'
          })

          a = 1 // 'Assignment to constant variable' 无法再次定义
      small-title(title="变量提升出错")
      base-text
        slot.
          const和let一样不能在未定义前赋值,且不能重复赋值,会报错
      base-code
        slot.
          a = 5 // 'a is not defined'
          const a = 6

          const b = 5
          const b = 6 // error
      small-title(title="const实战")
      base-text
        slot.
          const用于定义不允许改变值的值
      base-code
        slot.
          // 定义Vue 
          const a=new Vue({

          })

          // Vuex中定义需要突变的值
          export const MAX_VALUE=5

          // 定义api地址链接
          const demoApi="/api/demo"
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


