<template lang="pug">
  .smallTitle
    i.icon-smalltitle
    a.smallTitle_text(
      :id="title"
      :href="title") {{title}}
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
  .smallTitle{
    margin-top: 30px;
    margin-left:100px;
    padding-bottom: 30px;
    display: flex;
    align-items: center;
    >i{
      font-size: 30px;
      color: #35caef;
    }
    &_text{
      font-size: 20px;
      margin-left: 10px;
    }
  }
</style>


