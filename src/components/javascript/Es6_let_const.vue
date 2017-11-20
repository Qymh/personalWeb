<template lang="pug">
  .limit.oa
    .article.col100
      basecaption
        span(slot="base") ES6读书笔记之Let和Const
        span(slot="detail") es6标准入门第二版
      basetitle(title="Let")
      smalltitle(title="定义")
      basetext
        slot.
          ES6新增Let用于变量声明,且此变量仅在当前
          #[main 块级作用域]有效
      basecode
        slot.
            for (let i = 0;i < 10;i++) {
            }
            console.log(i) // 'i is not defined'

            if (true) {
              let j = 6
            }

            console.log(j) // 'j is not defined'

      smalltitle(title="变量提升出错")
      basetext
        slot.
          ES5中 var 和 function 存在变量提升,即不论变量
          函数在哪个位置定义,最后的集成中,总会将他们放置
          在头部,但在 let 的使用方法中,如果变量在未定义前声明,则会报错
      basecode
        slot.
          i = 5
          let i // error

          typeof i
          let i // error

          typeof j
          var j // undefined

          j = 5
          var j // j=5

      smalltitle(title="不可重复声明")
      basetext
        slot.
          ES5中 var 声明变量 名称相同的变量在之后声明的会覆盖在之前的,
          但在let中会报错
      basecode 
        slot. 
          var i = 5
          var i = 6 // i=6

          let j = 5
          let j = 6 // error 
      smalltitle(title="let实战")
      basetext
        slot.
          用循环实现当点击一串li元素时,依次输出他们的位置索引
      basecode
        slot.
          let $lis = document.getElementsByClassName('li') // 获取li元素
          let len = $lis.length // li元素数组的长度

          for (let i;i < len;i++) {
            $lis[i].onclick = function () {
              console.log(i) // 点击后输出的便是对应索引
            }
          }
      basetext
        slot.
            如果将上面的代码 let i 变为 var i 点击任何一个li元素输出的结果
            是一样的为4,因为此时读取的i值是全局变量,也就是循环后的变量4
      basetitle(title="Const")
      smalltitle(title="定义")
      basetext
        slot.
          const用于定义常量,且此常量定义后无法再改动
      basecode
        slot.
          const a = new Vue({
            el: '#demo'
          })

          a = 1 // 'Assignment to constant variable' 无法再次定义
      smalltitle(title="变量提升出错")
      basetext
        slot.
          const和let一样不能在未定义前赋值,且不能重复赋值,会报错
      basecode
        slot.
          a = 5 // 'a is not defined'
          const a = 6

          const b = 5
          const b = 6 // error
      smalltitle(title="const实战")
      basetext
        slot.
          const用于定义不允许改变值的值
      basecode
        slot.
          // 定义Vue 
          const a=new Vue({

          })

          // Vuex中定义需要突变的值
          export const MAX_VALUE=5

          // 定义api地址链接
          const demoApi="/api/demo"
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
@import '../../assets/style/scss/article.scss';
</style>

