<template lang="jade">
  .basetext.mt30.font20
    slot  
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  .basetext{
    padding: 0 8%;
    a{
      color:deepskyblue;
    }
    span{
      line-height: 30px;
    }
    main{
      display: inline-block;
      font-size: 14px;
      height:30px;
      line-height: 30px;
      margin: 0 5px;
      padding:0 20px;
      color: deeppink;
      background-color:#F8F8F8;
    }
  }
</style>
