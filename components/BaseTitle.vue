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
</style>


