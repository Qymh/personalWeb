<template lang="pug">
  .navLeft
    .navLeft_titleBox(
      v-for="(nav,outerIndex) in navs"
      :key="outerIndex")
      //- 大标题
      a.navLeft_titleBox_baseTitle(
        :href="nav.baseTitleHref")
        i.icon-basetitle
        span.navLeft_titleBox_baseTitle_name(
          :class="outerIndex===currentBaseTitle?'colorSky':''") {{nav.baseTitleName}}
      //- 小标题
      a.navLeft_titleBox_smallTitle(
        v-for="(item,index) in nav.smallTitleArr"
        :key="index"
        :href="item.smallTitleHref")
        i.icon-smalltitle
        span.navLeft_titleBox_smallTitle_name(
          :class="index===currentSmallTitle&&outerIndex===currentBaseTitle?'colorSky':''") {{item.smallTitleName}}
</template>

<script>

import throttle from 'lodash/throttle'

export default {
  name:'NavLeft',
  data () {
    return {
      navs:[],
      timer:null,
      // 当前的大标题索引
      currentBaseTitle:0,
      // 当前小标题索引
      currentSmallTitle:0  
    }
  },
  watch: {
    '$route.fullPath':'hashChanged'
  },
  mounted () {
    this.$nextTick(()=>{
      // 构造标题
      this.generateTitles()
      // 添加滚动事件
      window.addEventListener('scroll',throttle(()=>this.scrolled(),100))
      // 如果有hash则滚动到当前指定hash
      if (this.$route.hash.length) {
        this.scrollTo(this.$route.hash)
      }
    })
  },
  methods: {
    // 构造标题
    generateTitles(){
      let $titles=Array.from(document.getElementsByClassName('titles'))
      let arr=[]
      let baseTitleIds=[]
      let smallTitleIds=[]
      let i=-1

      $titles.forEach((p,index)=>{
        // 判断是不是大标题
        if(Array.from(p.classList).includes('baseTitle_text')){
          // 如果存在重复的id名字则改变
          if(baseTitleIds.includes(p.id)){
            p.id+='1'
            p.href+='1'
          }
          baseTitleIds.push(p.id)

          arr.push({
            dom:p,
            baseTitleName:p.innerHTML,
            baseTitleHref:p.href,
            smallTitleArr:[]
          })
          i++
        }

        if(Array.from(p.classList).includes('smallTitle_text')){
          // 如果存在重复的id名字则改变
          if(smallTitleIds.includes(p.id)){
            p.id+='1'
            p.href+='1'
          }
          smallTitleIds.push(p.id)
  
          arr[i].smallTitleArr.push({
            dom:p,
            smallTitleName:p.innerHTML,
            smallTitleHref:p.href
          })
        }
      })

      this.navs=arr
    },
    // 监听路由hash改变
    hashChanged(toPath,fromPath){
      toPath = toPath.split('#')
      fromPath = fromPath.split('#')

      if(this.$route.hash.length){
        this.$nextTick(()=>{
          this.scrollTo(this.$route.hash)
        })
      }
    },
    // 滚动
    scrollTo(hash){
      this.$nextTick(()=>{
        hash=decodeURI(hash)
        let el=document.getElementById(hash.slice(1))
        let doc=document.documentElement
        let documentTop=(window.pageYOffset||doc.scrollTop)-(doc.clientTop||0)
        let baseTop=120
        let elTop=el.offsetTop-baseTop
        let diff=(elTop>documentTop?elTop-documentTop:documentTop-elTop)/25
        let i=0

        window.clearInterval(this.timer)
        this.timer=setInterval(()=>{
          documentTop=elTop>documentTop?(documentTop+diff):(documentTop-diff)
          window.scrollTo(0,documentTop)
          i++
          if(i===25){
            clearInterval(this.timer)
          }
        },10)
      })
    },
    // 滑动滚动
    scrolled(){
      let doc=document.documentElement
      let top=(window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
      let h=window.innerHeight||doc.clientHeight||document.body.clientHeight
      let baseTop=130
      this.navs.forEach((p,index)=>{
        if(top+baseTop>p.dom.offsetTop){
          this.currentBaseTitle=index
        }
        p.smallTitleArr.forEach((item,index)=>{
          if(top+baseTop>item.dom.offsetTop){
            this.currentSmallTitle=index
          }
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>

  // pc
  @media(min-width:1000px){

  }

  // 移动
  @media(max-width:1000px){
    .navLeft{
      display: none;
    }
  }

  .navLeft{
    position: fixed;
    width:20%;
    top:80px;
    bottom: 0;
    left: 0;
    padding: 20px;
    overflow-y: auto;
    border-right: 1px solid #ddd;
    &_titleBox{
      &_baseTitle,&_smallTitle{
        padding:8px 0;
        line-height: 20px;
        cursor: pointer;
        display: inline-block;
        &_name{
          margin-left: 10px;
        }
        &:hover{
          span{
            color: deepskyblue;
          }
        }
      }
      &_baseTitle{
        font-size: 15px;
      }
      &_smallTitle{
        margin-left:20px;
        display: block;
        font-size: 14px;
      }
    }
  }

  i{
    color: deepskyblue;
  }

  .colorSky{
    color: deepskyblue;
  }
</style>


