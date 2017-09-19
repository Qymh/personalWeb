<template lang="jade">
  .smalltitle.mt30.mb20.font20.fb
    i.icon-smalltitle.colorSky.font30.fb.mr10.vs
    a.dib.col9.font20(:href="'#'+this.title+this.innerNum")(:id="this.title+this.innerNum") {{title}}
</template>

<script>
export default {
  props:['title'],
  data () {
    return {
      innerNum:0  
    }
  },
  created () {

    var self=this

    // 重复
    function move(){
      var a=Math.floor(Math.random()*100)
      if(self.innerNum!=a){
        self.innerNum=a
      }else{
        move()
      }
    }

    move()
  }
}
</script>

