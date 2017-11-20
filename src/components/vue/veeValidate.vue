<template lang="pug">
  .limit.oa
    .article.col100
      basecaption
        span(slot="base") vee-validate学习笔记
      basetitle(title="官方提供的验证Api")
      basetext
        slot.
          <main>vee-validate</main>用于表单的验证,如数字、英文、邮箱、链接等,
          也可以自己写其他的专属验证<br>
          下面的代码叙述了常用的由官方提供的验证
      basecode(type="xml")
        slot.
          //- 第一个验证，验证名字是否为英文且长度不低于4
          
          &ltinput
            name= "englishName"
            data-vv-delay= "200"
            placeholder= "please write your English Name"
            v-validate= "'required|alpha|min:4'"&gt

          &ltspan v-show= "errors.has('englishName')"&gt
            名字格式不正确
          &lt/span&gt

          //- 第二个验证，验证邮箱地址是否正确

          &ltinput
            name= "email"
            data-vv-scope= "special"
            placeholder= "please write your Email"
            v-validate= "'required|email'"&gt

          &ltspan v-show="errors.has('special.email')"&gt
            邮箱地址不正确
          &lt/span&gt

          //- 第三个验证，验证是否为数字且大于6位小于10位

          &ltinput
            name= "number"
            placeholder= "please write your id"
            v-validate= "'required|numeric|min:6|max:10'"&gt
          &ltspan v-show= "errors.has('number')"&gt
            id不正确
          &lt/span&gt

          //- 第四个验证，验证是否为url地址

          &ltinput
            name= "url"
            placeholder= "please write your website"
            v-validate= "'required|url'"&gt
          &ltspan v-show= "errors.has('url')"&gt
            网址不正确
          &lt/span&gt
      basetext
        slot.
          上面的第一个验证用了一个<main>data-vv-delay</main>用于延迟验证,时间为毫秒<br>
          上面的第二个验证用了一个<main>data-vv-scope</main>用于避免重复验证,加一个特殊的标记,
          同时对应的api会有稍微的不同<br>
      basetitle(title="官方提供的状态Api")
      basetext
        slot.
          <main>touched</main>表已经聚焦并失焦一次<br>
          <main>untouched</main>表没有触碰<br>
          <main>valid</main>表验证过一次且成功<br>
          <main>invalid</main>表验证过一次且失败<br>
          <main>pristine</main>表没有接触过<br>
          <main>dirty</main>表修改过<br>
      basecode(type="xml")
        slot.
          &ltinput v-validate= "'required|email'"&gt
          &ltspan v-show= "fields.email&&fields.touched"&gttouched&lt/span&gt
          &ltspan v-show= "fields.email&&fields.untouched"&gtuntouched&lt/span&gt
          &ltspan v-show= "fields.email&&fields.valid"&gtvalid&lt/span&gt
          &ltspan v-show= "fields.email&&fields.invalid"&gtinvalid&lt/span&gt
          &ltspan v-show= "fields.email&&fields.pristine"&gtpristine&lt/span&gt
          &ltspan v-show= "fields.email&&fields.dirty"&gtdirty&lt/span&gt
      basetitle(title="js验证api")
      basecode(type="xml")
        slot.
          &ltform @submit.prevent= "check"&gt
            &ltinput name= "email" v-validate= "'required|email'"&gt
            &ltbutton&gt提交&lt/button&gt
          &lt/form&gt

          //- 当验证成功时的回调函数

          check(){
            this.$validator.validateAll().then(res=>{

            })
          }
      basetext
        slot.
          当一个表单验证成功时,用上述api可以进行提交,我们也可以用js写特殊和更完美的验证
      basecode
        slot.
          import { Validator } from 'vee-validate'

          //- 电话验证
          
          const telIm = value => new Promise(resolve => {
            setTimeout(() => {
              const verification = /^1[34578]\d{9}$/ // 验证器
              const bool = verification.test(value) // 返回验证的布尔值
              resolve({
                valid: bool // 一定要用valid表返回的布尔值
              })
            })
          })

          Validatr.extend('telIm', {
            validate: telIm,
            getMessage: (field, param, data) => data // 返回的错误提示
          })

</template>

<script>

// 代码高亮
import Highlight from 'highlight.js'

// 主标题组件
import Basecaption from '../public/Basecaption'

// 标题组件
import Basetitle from '../public/Basetitle'

// 小标题组件
import Smalltitle from '../public/Smalltitle'

// 描述组件
import Basetext from '../public/Basetext'

// 代码组件
import Basecode from '../public/Basecode'

export default {
  mounted() {
    // 高亮代码
    Highlight.initHighlighting()

    // 改变重复的id值
    var $ids=document.querySelectorAll('[id]')
    var idArr=[]

    $ids.forEach((id)=>{
      idArr.push(id.id)
    })

    for(var i=0;i<idArr.length;i++){
      for(var j=0;j<i;j++){
        if(idArr[i]==idArr[j]){
          $ids[i].id+=i
          $ids[i].href+=i
        }
      }
    }
  },
  components: { Basecaption, Basetitle, Basetext, Basecode,Smalltitle}
}
</script>

<style lang="scss">
  @import '../../assets/style/scss/article.scss';
</style>

