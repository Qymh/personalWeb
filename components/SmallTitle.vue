<template lang="pug">
  .smallTitle
    i.icon-smalltitle
    a.smallTitle_text.titles(
      :id="title"
      :href="'#'+title") {{title}}
</template>

<script>
export default {
  name:'SmallTitle',
  props:{
    title:{
      type:String,
      default:''
    }
  }
}
</script>

<style lang="scss" scoped>
  // pc
  @media(min-width:1000px){
    .smallTitle{
      margin-top: 30px;
      margin-left:80px;
      padding-bottom: 10px;
      display: flex;
      align-items: center;
      >i{
        font-size: 30px;
        color: #35caef;
      }
      &_text{
        font-size: 25px;
        margin-left: 10px;
        font-weight: bold;
        line-height: 30px;
      }
    }
  }
  // 移动
  @media(max-width:1000px){
    .smallTitle{
      margin-top: 20px;
      margin-left:10px;
      padding-bottom: 10px;
      display: flex;
      align-items: center;
      >i{
        font-size: 20px;
        color: #35caef;
      }
      &_text{
        font-size: 20px;
        margin-left: 5px;
        font-weight: bold;
        line-height: 25px;
      }
    }
  }
</style>


