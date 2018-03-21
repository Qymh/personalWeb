<template lang="pug">
  .baseCaption
    div.baseCaption_icon
      i.icon-caption
    div.baseCaption_infor
      slot.baseCaption_infor_title(name="base")
      slot.baseCaption_infor_details(name="detail")
</template>

<script>
export default {
  name:'BaseCaption'
}
</script>

<style lang="scss" scoped>
  .baseCaption{
    display: flex;
    flex-direction: row;
    &_icon{
      color: #35caef;
      font-size: 35px;
    }
    &_infor{
      display: flex;
      flex-direction: column;
      margin-left: 20px;
      >span{
        &:nth-child(1){
          font-size: 35px;
          font-weight: bold;
        }
        &:nth-child(2){
          margin-top: 20px;
          color: #35caef;
        }
      }
    }
  }
</style>


