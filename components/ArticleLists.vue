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
          span.title 上传
          span.text {{article.time}}
        //- 更新
        .articleLists_article_details_chunk
          i.icon-update
          span.title 更新
          span.text {{article.update}}
        //- 分类
        .articleLists_article_details_chunk
          i.icon-category
          span.title 分类
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
  // pc
  @media(min-width:1000px){
    .articleLists{
      width: 85%;
      &_article{
        margin-top: 2rem;
        width: 48.5%;
        flex-direction: row;
        padding:40px 20px;
        &:nth-child(even){
          margin-left:3%;
        }
        &_infor{
          width: 65%;
          &_title{
            font-size: 25px;
            &:hover{
              color: #35caef;
              transition: color 0.2s ease-in-out;
            }
          }
          &_details{
            margin-top: 25px;
            line-height: 25px;
            >span{
              width:90%;
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
            .title{
                text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
            }
            .text{
              margin-left: 10px;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
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
  }

  // 移动
  @media(max-width:1000px){
    .articleLists{
      width: 85%;
      &_article{
        flex-direction: column;
        width: 100%;
        margin-bottom: 1rem;
        position: relative;
        padding:15px 20px;
        &_infor{
          width:100%;
          &_title{
            font-size: 20px;
          }
          &_details{
            margin-top:10px;
            line-height: 20px;
            >span{
              width:100%;
            }
          }
        }
        &_details{
          display: flex;
          flex-direction: column;
          &_chunk{
            display: flex;
            align-items: center;
            margin-top: 10px;
            font-size: 12px;
            >i{
              font-size: 20px;
              color: #35caef;
              margin-right: 7px;
            }
            .title{
              display: inline-block;
              text-align: center;
              margin-right: 7px;
            }
            .jumpText{
              color: #35caef;
            }
          }
        }
      }
    }
  }

  // 公用
  .articleLists{
    display: flex;
    width: 85%;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
    padding-top: 80px;
    padding-bottom: 100px;
    &_article{
      height:15rem;
      display: flex;
      border-radius:20px;
      border: 1px solid #35caef;
      &_infor{
        display: flex;
        flex-direction: column;
        justify-content: center;
        &_title{
          font-weight: bold;
          line-height: 35px;
        }
        &_details{
          color: #8e959a;
          >span{
            overflow: hidden;
            word-break: break-all;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }
        }
      }
    }
  }
</style>



