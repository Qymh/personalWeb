<template lang="pug">
  .article.col80.row100
    .limit.col100
      basecaption
        span(slot="base") Pug学习笔记
      basetitle(title="基础")
      smalltitle(title="元素类名 id 属性值 定义")
      basecode(type="xml")
        slot.
          p.top 123               
          &ltp class= "top"&gt123&lt/p&gt

          p.top#special 123       
          &ltp class= "top" id= "special"&gt123&lt/p&gt

          a(href="/test") 123     
          &lta href= "/test"&gt123&lt/a&gt

          input(type= "text" placeholder= "请输入")
          &ltinput type= "text" placeholder= "请输入"&gt
      
      smalltitle(title="在Vue中值得注意的属性定义")
      basecode(type="xml")
        slot.
          div.outer
            input.top(:id="this.id" :placeholder="this.placeholder") // 第一种写法
            input.top(:id="this.id")(:placeholder="this.placeholder") //  第二种写法

          &ltdiv class=".outer"&gt
            &ltinput id= "test" placeholder= "测试输入"&gt
          &lt/div&gt
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
          p \#{a} // 第二种写法
          &ltp&gt demo &lt/p&gt

          - var items=[1,2,3]
          each item in items
            p= item
          
          &ltp&gt 1 &lt/p&gt
          &ltp&gt 2 &lt/p&gt
          &ltp&gt 3 &lt/p&gt

          - var bool=true
          if(bool)
            p true
          else
            p false
          &ltp&gt true &lt/p&gt

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

          - 转义后的值
          &ltp&gt123123123123123123123123123123123123123&lt/p&gt
          
          // 第一种写法
          p.
            123123 # [ main 123 ]

          // 第二种写法
          p.
            123123<main>123</main>123
          
          - 转义后的值
          &ltp&gt123123<main>123</main>123&lt/p&gt
      basetitle(title="进阶")
      smalltitle(title="include")
      basetext
        slot.
          include用于引用其他的pug模版到当前pug中<br>
          像可复用的link,script链接以及页面相同的头部或者尾部元素都可以引用达到复用的目的
      basecode(type="xml")
        slot.
          -- head.pug
          title 测试
          link(rel="stylesheet", href="style.css")

          -- test.pug
          &lt!DOCTYPE html&gt
          html
            head
              include head.pug

          // 输出结果
          &lt!DOCTYPE html&gt
          &lthtml&gt 
            &lthead&gt 
              &lttitle&gt测试&lt/title&gt
              &ltlink rel="stylesheet" href="style.css"&gt
            &lt/head&gt 
          &lt/html&gt
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
          &lt!DOCTYPE html&gt
          html
            head
              block script
                script(src="xxx")
            body
              block content
                p 模版中的值
        
          --child.pug

          extends layout.pug // 结尾不要加分号 不然会报错

          block content
            p 改变的值

          --child.pug输出结果

          &lthtml&gt
            &lthead&gt
              &ltscript&gt&lt/script&gt
            &lt/head&gt
            &ltbody&gt
              &ltp&gt改变的值&lt/p&gt
            &lt/body&gt
          &lt/html&gt
      basetext
        slot.
          用<main>extends</main>引用模版,<main>block</main>进行选择性的更改<br>
          需要更改时在对应处加上block和该位置对应的名称即可修改<br>
          经过比较,一般情况下,复用程度较统一,即只需要改变部分内容的情况下用block比较好<br>
          而当需要改变的内容过多时,可以用include进行局部引用相同模版
      .h100
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

