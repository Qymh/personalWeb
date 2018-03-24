<template lang="pug">
  .navLeft
    .navLeft_titleBox(
      v-for="(nav,index) in navs"
      :key="index")
      //- 大标题
      a.navLeft_titleBox_baseTitle(:href="nav.baseTitleHref")
        i.icon-basetitle
        span.navLeft_titleBox_baseTitle_name {{nav.baseTitleName}}
      //- 小标题
      a.navLeft_titleBox_smallTitle(
        v-for="(item,index) in nav.smallTitleArr"
        :key="index"
        :href="item.smallTitleHref")
        i.icon-smalltitle
        span.navLeft_titleBox_smallTitle_name {{item.smallTitleName}}
</template>

<script>
export default {
  name:'NavLeft',
  data () {
    return {
      navs:[],
      timer:null  
    }
  },
  watch: {
    '$route.fullPath':'hashChanged'
  },
  mounted () {
    this.generateTitles()
  },
  methods: {
    // 构造标题
    generateTitles(){
      // 大标题
      let $baseTitle=Array.from(document.getElementsByClassName('baseTitle_text'))
      // 小标题
      let $smallTitle=Array.from(document.getElementsByClassName('smallTitle_text'))
      let $baseTitleId=[]
      let $smallTitleId=[]
      let arr=[]

      $baseTitle.forEach(p=>{
        let id=p.id
        if($baseTitleId.includes(id)){
          p.id+=1
        }
      })

      $smallTitle.forEach(p=>{
        let id=p.id
        console.log(id)
        if($smallTitleId.includes(id)){
          p.id+=1
          console.log(p)
        }
      })

      // 构造导航数组
      for(let i in $baseTitle){
        let $baseTitleItem=$baseTitle[i]
        arr.push({
          baseTitleName:$baseTitleItem.innerHTML,
          baseTitleHref:$baseTitleItem.href,
          smallTitleArr:[]
        })
        for(let j in $smallTitle){
          let $smallTitleItem=$smallTitle[j]
          arr[i].smallTitleArr.push({
            smallTitleName:$smallTitleItem.innerHTML,
            smallTitleHref:$smallTitleItem.href
          })
        }
      }

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
    }
  }
}
</script>

<style lang="scss" scoped>
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
</style>


