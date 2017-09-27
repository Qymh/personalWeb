<template lang="pug">
  .article.col8.row10
    .limit.col10
      basecaption
        span(slot="base") HTML5面试题
      basetitle(title="基础")
      smalltitle(title="什么是行内元素,什么是块级元素?不同的话有什么影响?")
      basetext
        slot.
          浏览器默认样式为#[main display:inline]的元素为行内元素<br>
          浏览器默认样式为#[main display:block]的元素为块级元素<br>
          块级元素可定义高宽以及外边距内边距,而行内元素只能定义左右外边距内边距,无法定义高宽,
          如果要使默认行内元素如#[main a]#[main span]等变为块级元素又不影响其余布局,可使用
          #[main display:inline-block]
      smalltitle(title="@import的link有什么区别?")
      basetext
        slot.
          @import主要用于css文件中的引用,link主要用于页面中引用css<br>
          link引用会同时加载,而@import会在所有css引用完毕后再进行加载<br>
          link的权重大于@import<br>
      smalltitle(title="描述一下盒子模型")
      basetext
        slot.
          盒子模型分两种,一种ie,一种w3c<br>
          两种盒子模型拥有的元素是一样的从外到里分别为<main>margin border padding content</main><br>
          在ie盒子中如果定义元素的高宽值 则等于定义了 borderbox的高宽<br>
          在w3c盒子中如何定义元素的高宽值 则仅仅定义了 contentbox的高宽<br>
          为了避免盒子的影响,在项目中可使用<main>box-sizing:border-box</main>消除影响
      smalltitle(title="描述一下Doctype")
      basetext
        slot.
          <main>&lt!Doctype html&gt</main>放在html的顶部,向浏览器表达了以什么样的<main>文档规范</main>
          进行解析<br>
          当Doctype表达不规范及出错时,浏览器会以兼容模式向后兼容,用老的浏览器方式对文档进行解析<br>
          当其正确时,浏览器会以严格模式及浏览器的最高标准对文档进行解析<br>
          区分是否为html5的一大判断标准就是看Doctype的表达规范与否
      smalltitle(title="描述一下iframe")
      basetext
        slot.
          <main>iframe</main>为引用外部链接窗口,一般用来引用广告之类的<br>
          <main>优点</main><br>
          提供了访问其他网站最便利的接口<br>
          引用其他静态网站方便<br>
          <main>缺点</main><br>
          增加了css js 的http访问请求次数<br>
          整个页面加载完毕是算上iframe加载完毕,访问iframe如果过大而且站点网速传输又慢的情况下,会造成堵塞<br>
          页面层次混乱,没有操作好滚动条的显示与否会让用户体验差<br>
          浏览器的向下兼容问题,在老式浏览器下,一个页面对iframe的引用次数有限<br>
        
          <main>另一个frameset</main><br>
          frameset必须放在body之中,他是frame的父元素
      smalltitle(title="请说明Html5新增的功能")
      basetext
        slot.
          1.<br>
            新增语义化的元素 如 <main>nav article section header footer q </main>等<br>
            语义化的元素在读代码时会更清晰<br>
          2.<br>
            新增了一些表单控件 如<main>range week color date email number</main>等<br>
            表单空间增加了表单的丰富程度,可以解决更多的需求<br>
          3.<br>
            新增视频音频插件 <main>vedio audio</main><br>
            他们的属性 <main>src(地址) controls(控制) muted(静音) loop(滚动) preload(预加载) autoplay(自动播放) </main><br>
            视频专属 <main>poster(预加载图片)</main><br>
            他们的子元素 <main>source</main> source的属性 <main>src type(类型)</main><br>
            type类型如 <main>audio/ogg audio/mpeg video/mp4</main><br>
          4.<br>
            新增<main>canvas</main>用于画布作图<br>
            const ctx=document.getElementById('canvas').getContent('2d')<br>
          5.<br>
            新增离线缓存<br>
            (1) web缓存<br>
              localStorage.name='123' // 这个缓存值在浏览器重启后仍然生效<br>
              sessionStorage.name='123' // 这个缓存值在浏览器重启后失效<br>
            (2) 应用程序缓存<br>
              <main>&lthtml manifest="web.appcache"&gt&lt/html&gt</main><br>
              在html标签中引用 manifest 属性 其文件格式必须为<main>.appcache</main><br>
              文件中的内容分为三部分<br>
              
              // 会离线储存的文件 一般为全局 css js<br>
              <main>
              #CACHEMANIFEST<br>
              /.main.css<br>
              /.main.js<br>
              </main><br>

              // 不会离线缓存的文件<br>
              <main>
              #NETWORK<br>
              /.demo.php <br>
              </main><br>

              // 页面失效时的处理<br>
              #FALLBACK<br>
              <main>
              /html/ /404.html <br>
              </main><br>
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
</style>

