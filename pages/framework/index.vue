<template lang="pug">
  div
    header.header
      nav-top.header_navTop(active="/framework")
    article-lists.articleLists(
      :articles="articles")
</template>

<script>

import NavTop from '~/components/NavTop'
import ArticleLists from '~/components/ArticleLists'

import fetch from '~/assets/js/actions/fetch'

export default {
  asyncData(){
    return fetch.getArticle('framework').then(data=>{
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



