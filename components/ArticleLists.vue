<template lang="pug">
  .articleLists
    .articleLists_article(
      v-for="(article,index) in articles"
      :key="index")
      //- 文章信息
      .articleLists_article_infor
        //- 标题
        nuxt-link.articleLists_article_infor_title(
          :to="article.href")
          span {{article.title}}
        //- 描述
        .articleLists_article_infor_details
          span {{article.description}}
      //- 侧栏详情
      .articleLists_article_details
        //- 上传
        .articleLists_article_details_chunk
          i.icon-time
          span 上传
          span.text {{article.time}}
        //- 更新
        .articleLists_article_details_chunk
          i.icon-update
          span 更新
          span.text {{article.update}}
        //- 分类
        .articleLists_article_details_chunk
          i.icon-category
          span 分类
          nuxt-link.text.jumpText(
            :to="article.categoryHref") {{article.category}}
</template>

<script>
export default {
  name:'ArticleLists',
  props:{
    // 文章
    articles:{
      type:Array,
      default:[]
    }
  },
}
</script>

<style lang="scss" scoped>
  .articleLists{
    display: flex;
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 80px;
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 100px;
    &_article{
      height:15rem;
      width: 48.5%;
      margin-top: 2rem;
      padding:40px 20px;
      display: flex;
      flex-direction: row;
      border-radius:20px;
      border: 1px solid #35caef;
      &:nth-child(even){
        margin-left:3%;
      }
      &_infor{
        width: 65%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        &_title{
          font-size: 25px;
          font-weight: bold;
          &:hover{
            color: #35caef;
            transition: color 0.2s ease-in-out;
          }
        }
        &_details{
          margin-top: 30px;
          color: #8e959a;
          line-height: 25px;
          >span{
            width: 90%;
            overflow: hidden;
            word-break: break-all;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }
        }
      }
      &_details{
        width: 35%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        &_chunk{
          margin-top:20px;
          display: flex;
          align-items: center;
          &:nth-child(1){
            margin-top: 0;
          }
          >i{
            font-size: 25px;
            color: #35caef;
            margin-right: 10px;
          }
          .text{
            margin-left: 10px;
          }
          .jumpText{
            &:hover{
              color: #35caef;
              transition: color 0.2s ease-in-out;
            }
          }
        }
      }
    }
  }
</style>



