<template lang="pug">
  .limit.oa
    .article.col100
      basecaption
        span(slot="base") Vue+Node实现前后端token认证
      basetitle(title="后端")
      smalltitle(title="依赖")
      basetext
        slot.
          首先介绍下node中需要用到的依赖<br>
          <main>body-parser</main>用于接受发送来的数据<br>
          <main>express</main>提供更高层的http Api<br>
          <main>jsonwebtoken</main>提供token生成<br>
          <main>mongoose</main>实现数据管理<br>
      baseimg(src="../../../static/images/token/token1.png" width="40")
      smalltitle(title="项目结构")
      basetext
        slot.
          下面是Node后端的项目结构<br>
          <main>lib</main>文件用于储存模版
          <main>routes</main>文件管理路由事件
      baseimg(src="../../../static/images/token/token2.png")
      smalltitle(title="模型")
      basetext
        slot.
          首先介绍的是<main>lib\User.js</main><br>
          模版中包含了用户的事件函数方法,如用户创建,用户登陆,用户检查,用户token生成等<br>
          先从构建用户的数据依赖开始<br>
      basecode(type="javascript")
        slot.
          const mongoose=require('mongoose') // 引用mongoose
          const jwt=require('jsonwebtoken') // token注册工具
          const SECRET='Qymh' // token密码
          const db=mongoose.connect('mongodb://127.0.0.1:27017/token') //mongoose服务器
          const Schema=mongoose.Schema // 模式

          //- 用户模式
          const UserSchema=new Schema({
            name:Schema.Types.Mixed, // 用户名
            pass:Schema.Types.Mixed, // 用户密码
            token:Schema.Types.Mixed // 用户token
          })

          //- 用户模型
          const UserModel=mongoose.model('user',UserSchema)

          //- 用户构造函数
          function User(obj){
            for(let key in obj){
              this[key]=obj[key]
            }
          }

          module.exports=User
      smalltitle(title="注册模型")
      basetext
        slot.
          上述代码生成了用户模型,可以看出需要保存的有三个数据,名字,密码,token<br>
          下一步我们将创建用户注册的方法,我们将这个函数层层分离,分为<main>四个函数</main><br>
      basecode(type="javascript")
        slot.
          // 创建用户
          User.prototype.create=function(fn){
            let user=this
            let name=user.name
            User.checkSame(name,(err,token)=>{
              if(err) return fn(err)
              // 用户创建成功
              if(token){
                user.token=token
                let UserEntity=new UserModel(user)
                UserEntity.save()
                fn(null,true)
              }
              // 用户创建失败
              else{
                fn(null,false)
              }

            })
          }

          // 验证用户的唯一性
          User.checkSame=(name,fn)=>{
            User.SearchByName({name},(err,result)=>{
              // 用户存在
              if(result){
                fn(null,null)
              }
              // 用户不存在
              else{
                User.giveToken(name,fn)
              }
            })
          }

          // 通过名字搜索用户
          User.SearchByName=(name,fn)=>{
            UserModel.findOne(name,(err,result)=>{
              if(err) return fn(err)
              fn(null,result)
            })
          }

          // 给用户传递token
          User.giveToken=(name,fn)=>{
            let token=jwt.sign({name:name},SECRET)
            fn(null,token)
          }
      basetext
        slot.
          下面分析这4个函数的作用<br>
          1.<main>User.prototype.create</main>此函数用于创建用户<br>
          2.<main>User.checkSame</main>此函数用于检查用户名是否重复,此函数包含在<main>User.prototype.create</main>函数内<br>
          3.<main>User.searchByName</main>此函数用于通过用户名查找用户,此函数包含在<main>User.checkSame</main>函数内<br>
          4.<main>User.giveToken</main>此函数用于给通过验证的用户创建唯一token,此函数包含在<main>User.searchByName</main>函数成功后的函数内<br>
          四个函数是层层嵌套的,1函数为User构造函数的原型,2,3,4则是直接基于User构造函数的函数<br>
          当用User构造函数创建实例时,函数1的this便可获取实例中的属性<br>
          函数1参数是一个回调函数传到函数2<br>
          函数2获取名字为第一参数并传入一个回调函数为第二参数到函数3<br>
          函数3获取到函数2的名字参数,并执行搜索<br>
          如果搜索不成功,返回函数二传来的回调函数为false<br>
          如果成功,则传入名称为第一参数另外一个回调函数为第二参数到函数4<br>
          函数4执行注册token,并返回函数二传来的回调函数的第二参数为token值<br>
          此时,函数3,4执行完毕,函数2中执行检测传来的回调函数是false,还是token<br>
          是token便执行注册,是false,则返回名字已存在<br>
      smalltitle(title="登陆模型")
      basetext
        slot.
          接着创建登陆模型,登陆模型有三个参数,名字,密码,回调函数<br>
          通过<main>UserModel.findOne</main>查找用户密码是否符合要求,返回结果<br>
      basecode(type="javascript")
        slot.
          // 登陆
          User.prototype.authenticate=(name,pass,fn)=>{
            UserModel.findOne({name,pass},(err,result)=>{
              if(err) return fn(err)
              fn(null,result)
            })
          }
      smalltitle(title="用户数据获取模型")
      basetext
        slot.
          当用户登陆成功后,如果要获取数据,可以通过<main>token</main>验证用户,成功则返回唯一数据
      basecode(type="javascript")
        slot.
          // 通过token搜索用户
          User.SearchByToken=(token,fn)=>{
            UserModel.findOne({token},(err,result)=>{
              if(err) fn(err)
              return fn(null,result)
            })
          }
      smalltitle(title="注册路由")
      basetext
        slot.
          在注册路由<main>routes/user.js</main>中获取用户输入的帐号和密码并执行刚才写到的用户注册模版<br>
      basecode(type="javascript")
        slot.
          const User=require('../lib/User') // 用户模版

          //- 注册
          exports.register=(req,res,next)=>{
            let data=req.body // 数据
            let name=data.name // 名字
            let pass=data.pass // 密码

            let user=new User(data) // 以User为构造函数创建user实例

            user.create((err,result)=>{
              // 成功
              if(result){
                res.json({
                  checkValue:true,
                  token:result.token
                })
              }
              // 失败
              else{
                res.json({
                  checkValue:false,
                  token:result.token||''
                })
              }
            })
          }
      smalltitle(title="登陆路由")
      basetext
        slot.
          登陆路由与注册路由类似
      basecode
        slot.
          exports.login=(req,res,next)=>{
            let data=req.body // 数据
            let name=data.name // 名字
            let pass=data.pass // 密码

            let user=new User(data) // 以User为构造函数创建user实例

            user.authenticate(name,pass,(err,result)=>{
              // 成功
              if(result){
                res.json({
                  checkValue:true,
                  token:result.token
                })
              }
              // 失败
              else{
                res.json({
                  checkValue:false,
                  token:''
                })
              }
            })
          }
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

// 图像组件
import Baseimg from '../public/Baseimg'

export default {
  mounted() {
    // 高亮代码
    Highlight.initHighlighting()

    // // 视口高度
    // const baseHeight=document.documentElement.clientHeight||
    // document.body.clientHeight

    // var $limit=document.getElementsByClassName('limit')[0]
    // var $nav=document.querySelectorAll('.navMobile')[0]

    // var navHeight=$nav.clientHeight
    // $limit.style.height=baseHeight-navHeight+'px'

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
  components: { Basecaption, Basetitle, Basetext, Basecode,Smalltitle,Baseimg}
}
</script>

<style lang="scss">
@import '../../assets/style/scss/article.scss';
</style>

