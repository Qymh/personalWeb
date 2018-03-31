<template lang="pug">
  .baseTitle
    i.icon-basetitle
    a.baseTitle_text.titles(
      :id="title"
      :href="'#'+title") {{title}}
</template>

<script>
export default {
  name:'BaseTitle',
  props:{
    title:{
      type:String,
      default:''
    }
  },
}
</script>

<style lang="scss" scoped>
  // pc
  @media(min-width:1000px){
    .baseTitle{
      margin-top: 50px;
      margin-left:50px;
      padding-bottom: 20px;
      border-bottom: 1px solid #ddd;
      >i{
        font-size: 30px;
        color: #35caef;
      }
      &_text{
        font-size: 35px;
        margin-left: 20px;
        font-weight: bold;
      }
    }
  }
  // 移动
  @media(max-width:1000px){
    .baseTitle{
      margin-top: 20px;
      padding-bottom: 10px;
      border-bottom: 1px solid #ddd;
      >i{
        font-size: 20px;
        color: #35caef;
      }
      &_text{
        font-size: 25px;
        margin-left: 10px;
        font-weight: bold;
      }
    }
  }
  
</style>


