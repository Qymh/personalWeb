<template lang="pug">
  .article.col8.row10
    .limit.col10
      basecaption
        span(slot="base") HTML5面试题
      basetitle(title="基础")
      smalltitle(title="什么是行内元素,什么是块级元素?不同的话有什么影响?")
      basetext.s
        slot.
          浏览器默认样式为#[main display:inline]的元素为行内元素<br>
          浏览器默认样式为#[main display:block]的元素为块级元素<br>
          块级元素可定义高宽以及外边距内边距,而行内元素只能定义左右外边距内边距,无法定义高宽,
          如果要使默认行内元素如#[main a]#[main span]等变为块级元素又不影响其余布局,可使用
          #[main display:inline-block]
      smalltitle(title="@import的link有什么区别?")
      basetext.s
        slot.
          @import主要用于css文件中的引用,link主要用于页面中引用css<br>
          link引用会同时加载,而@import会在所有css引用完毕后再进行加载<br>
          link的权重大于@import<br>
      smalltitle(title="描述一下盒子模型")
      basetext.s
        slot.
          盒子模型分两种,一种ie,一种w3c<br>
          两种盒子模型拥有的元素是一样的从外到里分别为<main>margin border padding content</main><br>
          在ie盒子中如果定义元素的高宽值 则等于定义了 borderbox的高宽<br>
          在w3c盒子中如何定义元素的高宽值 则仅仅定义了 contentbox的高宽<br>
          为了避免盒子的影响,在项目中可使用<main>box-sizing:border-box</main>消除影响
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
@import '../../style/scss/article.scss';

.s{
  margin-left:2%;
  font-size: 16px !important;
}
</style>

