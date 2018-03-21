<template lang="pug">
  div
    header.header
      nav-top.header_navTop(active="/html5")
    article-lists.articleLists(
      :articles="articles")
</template>

<script>

import NavTop from '~/components/NavTop'
import ArticleLists from '~/components/ArticleLists'

import fetch from '~/assets/js/actions/fetch'

export default {
  asyncData(){
    return fetch.getArticle('html5').then(data=>{
      return{
        articles:data
      }
    })
  },
  data () {
    return {
      articles:[]  
    }
  },
  components: {
    NavTop,
    ArticleLists
  }
}
</script>

<style lang="scss" scoped>
  .header{
    border-bottom: 1px solid #d6d7dc;
    position: fixed;
    width: 100%;
    background-color: #ffffff;
    &_navTop{
      width: 40%;
    }
  }
</style>



