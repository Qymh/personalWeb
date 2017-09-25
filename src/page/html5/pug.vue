<template lang="pug">
  .article.col8.row10
    .limit.col10
      basecaption
        span(slot="base") Pug学习笔记
      basetitle(title="基础")
      smalltitle(title="元素类名 id 属性值 定义")
      basecode(type="xml")
        slot.
          p.top 123               
          <p class= "top">123</p>

          p.top#special 123       
          <p class= "top" id= "special">123</p>

          a(href="/test") 123     
          <a href= "/test">123</a>

          input(type= "text" placeholder= "请输入")
          <input type= "text" placeholder= "请输入">
      
      smalltitle(title="在Vue中值得注意的属性定义")
      basecode(type="xml")
        slot.
          div.outer
            input.top(:id="this.id" :placeholder="this.placeholder") // 第一种写法
            input.top(:id="this.id")(:placeholder="this.placeholder") //  第二种写法

          <div class=".outer">
            <input id= "test" placeholder= "测试输入">
          </div>
      basecode
        slot.
          const demo = new Vue({
            el: '.outer',
            data() {
              return {
                id: 'test',
                placeholder: '测试输入'
              }
            }
          })
      basetext
        slot.
          在上述的代码中,第一种写法是会报错的,当通一个属性需要引用:进行赋值时,必须
          将其分为多个括号包围,不然pug语法会报错
      smalltitle(title="pug中的js语法")
      basetext
        slot.
          pug中最常用的js方法 为 var 赋值,each in 循环,if判断 与 case 选择
      basecode(type="xml")
        slot.
          - var a = 'demo'
          p= a // 第一种写法
          p #{a} // 第二种写法
          <p> demo </p>

          - var items=[1,2,3]
          each item in items
            p= item
          
          <p> 1 </p>
          <p> 2 </p>
          <p> 3 </p>

          - var bool=true
          if(bool)
            p true
          else
            p false
          <p> true </p>

          - var choose='you'
            case choose
              when 'you'
                p you
              when 'we'
                p we
              default
                p nobody
      smalltitle(title="特殊情况的文本处理")
      basetext
        slot.
          特殊情况比如文本过多无法在一排显示,可按如下的第一组方法两种方式实现<br>
          想在文本过多的情况下嵌套元素可使用下面的第二组方法两种方式实现
      basecode(type="xml")
        slot.
          // 第一种写法
          p 123123123123
          |123123123123123
          |123123123123

          // 第二种写法
          p.
            123123123123123123123123123123123123
            123
        
          <p>123123123123123123123123123123123123123</p>
          
          // 第一种写法
          p.
            123123 # [ main 123 ]

          // 第二种写法
          p.
            123123<main>123</main>123
          
          <p>123123<main>123</main>123</p>
      basetitle(title="进阶")
      smalltitle(title="include")
      basetext
        slot.
          include用于引用其他的pug模版到当前pug中,像可复用的link,script链接
          以及页面相同的头部或者尾部元素都可以引用达到复用的目的
      basecode(type="xml")
        slot.
          -- head.pug
          title 测试
          link(rel="stylesheet", href="style.css")

          -- test.pug
          <!DOCTYPE html>
          html
            head
              include head.pug

          // 输出结果
          <!DOCTYPE html>
          <html> 
            <head> 
              <title>测试</title>
              <link rel="stylesheet" href="style.css">
            </head> 
          </html>
      smalltitle(title="block")
      basetext
        slot.
          <main>block</main>的用法与<main>include</main>的类似,不过原理是相反的<br>
          include用于在编辑的pug中引用模版pug<br>
          思路是在各个不同的pug中复用他们相同的局部模版 如 head foot<br>
          block同样也是在编辑文档引用模版文档<br>
          不同的是block是在模版文档基础上添加属于自己独特的部分,而未添加的部分
          将直接引用模版
      basecode(type="xml")
        slot.
          --layout.pug
          <!DOCTYPE html>
          html
            head
              block script
                script(src="xxx")
            body
              block content
                p 模版中的值
        
          --child.pug

          extends layout.pug

          <!DOCTYPE html>
          html
            head
            body
              p 123
          
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
    Highlight.initHighlighting()

    // 视口高度
    const baseHeight = document.documentElement.clientHeight ||
      document.body.clientHeight

    var $limit = document.getElementsByClassName('limit')[0]

    $limit.style.height = baseHeight + 'px'

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
@import '../../style/scss/article.scss'
</style>

