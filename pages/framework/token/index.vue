<template lang="pug">
  div
    header.header
      nav-top.header_navTop(active="/framework")
    section.articleMain
      nav-left
      .articleMain_body
        base-caption
          span(slot="base") Vue+Node实现前后端token认证
        base-title(title="后端")
        small-title(title="依赖")
        base-text
          slot.
            首先介绍下node中需要用到的依赖<br>
            <main>body-parser</main>用于接受发送来的数据<br>
            <main>express</main>提供更高层的http Api<br>
            <main>jsonwebtoken</main>提供token生成<br>
            <main>mongoose</main>实现数据管理<br>
        base-img(src="/images/token/token1.png" width="40")
        small-title(title="项目结构")
        base-text
          slot.
            下面是Node后端的项目结构<br>
            <main>lib</main>文件用于储存模版
            <main>routes</main>文件管理路由事件
        base-img(src="/images/token/token2.png")
        small-title(title="模型")
        base-text
          slot.
            首先介绍的是<main>lib\User.js</main><br>
            模版中包含了用户的事件函数方法,如用户创建,用户登录,用户检查,用户token生成等<br>
            先从构建用户的数据依赖开始<br>
        base-code(type="javascript")
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
        small-title(title="注册模型")
        base-text
          slot.
            上述代码生成了用户模型,可以看出需要保存的有三个数据,名字,密码,token<br>
            下一步我们将创建用户注册的方法,我们将这个函数层层分离,分为<main>四个函数</main><br>
        base-code(type="javascript")
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
        base-text
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
        small-title(title="登录模型")
        base-text
          slot.
            接着创建登录模型,登录模型有三个参数,名字,密码,回调函数<br>
            通过<main>UserModel.findOne</main>查找用户密码是否符合要求,返回结果<br>
        base-code(type="javascript")
          slot.
            // 登录
            User.prototype.authenticate=(name,pass,fn)=>{
              UserModel.findOne({name,pass},(err,result)=>{
                if(err) return fn(err)
                fn(null,result)
              })
            }
        small-title(title="用户数据获取模型")
        base-text
          slot.
            当用户登录成功后,如果要获取数据,可以通过<main>token</main>验证用户,成功则返回唯一数据
        base-code(type="javascript")
          slot.
            // 通过token搜索用户
            User.SearchByToken=(token,fn)=>{
              UserModel.findOne({token},(err,result)=>{
                if(err) fn(err)
                return fn(null,result)
              })
            }
        small-title(title="注册路由")
        base-text
          slot.
            在注册路由<main>routes/user.js</main>中获取用户输入的帐号和密码并执行刚才写到的用户注册模版<br>
        base-code(type="javascript")
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
        small-title(title="登录路由")
        base-text
          slot.
            登录路由与注册路由类似
        base-code
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
        small-title(title="用户数据获取路由")
        base-text
          slot.
            我们现在写<main>routes/user.js</main>通过接受发送来的头部信息获取token,并通过token找到对应的用户
        base-code(type="javascript")
          slot.
            const User=require('../lib/User') // 用户模版

            exports.getInfor=(req,res,next)=>{
              let token=req.headers['authorization']
              User.SearchByToken(token,(err,result)=>{
                res.json(result.name) // 返回前端用户的姓名
              })
            }
        small-title(title="app.js")
        base-text
          slot.
            现在后端的路由和模版都完成了,下一步可以完成<main>app.js</main>,里面包括了开发环境下测试的跨域环境,
            并且引用我们需要的依赖
        base-code(type="javascript")
          slot.
            const express=require('express')
            const bodyParser=require('body-parser')
            const router=require('./router')
            const app=express()

            const domain='127.0.0.1'
            const port=8080

            app.all('*', function(req, res, next) {
              res.header("Access-Control-Allow-Origin", "*");
              res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
              res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
              res.header("X-Powered-By",' 3.2.1')
              next()
            })

            app.use(bodyParser.urlencoded({extended:true}))
            app.use(bodyParser.json())

            app.use('/',router)

            app.listen(port,domain,()=>{
              console.log(`server is listening ${domain}:${port}`)
            })
        small-title(title="运行")
        base-text
          slot.
            最后运行我们的Node程序,<main>node app</main>
        base-title(title="前端")
        small-title(title="项目结构")
        base-text
          slot.
            前端用的是<main>vue2.x+webpack3.x</main>,模版引擎用的是<main>pug</main>,
            表单的认证引入了<main>vee-validate</main>,异步获取数据引用的是<main>axios</main>,
            也可以用<main>vue-resource</main>,两者原理是一样的,关于vue和webpack,
            我的文件位置和官方的<main>vue-cli</main>不一样,官方把<main>js style</main>
            放在了<main>assets</main>里面,不过原理是一样的,只需要更改对应的内容就行
        base-img(src="/images/token/token3.png")
        small-title(title="注册")
        base-text
          slot.
            我们在<main>js/auth.js</main>中完成注册的函数方法
        base-code
          slot.
            const SERVER_URL='http://127.0.0.1:8080/'
            const REGISTER_URL=SERVER_URL+'register'
            const LOGIN_URL=SERVER_URL+'login'

            import axios from 'axios'

            export default{

              data:{
                // 认证结果
                authenticated:false
              },

              /**
              * 注册函数
              * @param {Object} context 环境
              * @param {Object} info 用户数据对象
              * @param {String} message 返回的信息名称
              */
              register(context,info,message){
                axios.post(REGISTER_URL,info).then(res=>{
                  let checkValue=res.data.checkValue // 后端返回的结果
                  if(checkValue){
                    let token=res.data.token
                    localStorage.setItem('token',token) // 添加token到离线缓存
                    this.authenticated=true // 认证成功
                    context.$router.push('/home') // 返回首页
                  }else{
                    context[message]='相同的名字'
                    context.name=''
                    context.pass=''
                  }
                },res=>{
                  context[message]='请求错误,稍后重试'
                })
              },
        base-text
          slot.
            上述代码代表的是注册,我们在<main>components/register.vue</main>
            中通过<main>import auth from '../js/auth'</main>引用,
            通过<main>auth.register调用这个方法</main>,下面我们写<main>components/register.vue</main><br>
            首先是template,页面提供一个常规的表单认证
        base-img(src="/images/token/token4.png" width="80")
        base-code(type="pug")
          slot.
            &lttemplate lang="pug"&gt
              .registerBox
                form.h500.w500.pt50.ov(
                  autoComplete="off" style="margin:0 auto"
                  flex="cross:center dir:top"
                )
                  p.mb10.colorSky(flex="cross:center main:center") 注册
                  p.mb10.colorSky(flex="cross:center main:center" v-show="error") { { error } }
                  //- 名字
                  p.mb10.ov.pr
                    input.input-big(
                      name="name"
                      v-model="name"
                      v-validate="'required|min:4|max:10'"
                    )
                    span.dib.colorSky.pa.w300.h30.lh30.ml10(
                      v-show="fields.name.touched&&fields.name.invalid"
                      style="left:200px;"
                    ) 请输入4位到10位之间的名字
                  //- 密码
                  p.mb10.ov.pr
                    input.input-big(
                      type="password"
                      name="pass"
                      v-model="pass"
                      v-validate="'required|min:4|max:10'"
                    )
                    span.dib.colorSky.pa.w300.h30.lh30.ml10(
                      v-show="fields.pass.touched&&fields.pass.invalid"
                      style="left:200px;"
                    ) 请输入4位到10位之间的密码
                  //- 提交按钮
                  button.btn-big(
                    type="button"
                    @click="rigister"
                  ) 提交
            &lt/template&gt
        base-text
          slot.
            模版中通过<main>v-model</main>获取用户输入的用户名和密码,通过<main>@click="register"</main>
            提交用户的输入,下面我们完成register.vue中的数据与逻辑
        base-code
          slot.
            &ltscript&gt

              import Vue from 'vue'
              import VeeValidate from 'vee-validate'
              import auth from '../js/auth'

              Vue.use(VeeValidate)

              export default {
                data () {
                  return {
                    name:'', // 用户名
                    pass:'' , // 密码
                    error:''  // 错误提示的文字
                  }
                },
                methods: {
                  rigister(){
                    this.$validator.validateAll().then(res=&gt{
                      // 符合验证
                      if(res){
                        const user={
                          name:this.name,
                          pass:this.pass
                        }
                        // 发送数据到注册函数中
                        auth.register(this,user,'error')
                      }
                      // 不符合验证
                      else{
                        this.name=''
                        this.pass=''
                        this.error='不符合验证'
                      }
                    })
                  }
                }
              }
            &lt/script&gt
        small-title(title="登录")
        base-text
          slot.
            注册组件便完成了,下一步在<main>auth.js</main>中增加登录函数
        base-code
          slot.
            /**
            * 登录函数
            * @param {Object} context 环境
            * @param {Object} info 用户数据对象
            * @param {String} message 返回的信息名称
            */
            login(context,info,message){
              axios.post(LOGIN_URL,info).then(res=>{
                let checkValue=res.data.checkValue
                if(checkValue){
                  let token=res.data.token
                  localStorage.setItem('token',token) // 添加token到离线缓存
                  this.authenticated=true // 认证成功
                  context.$router.push('/home') // 返回首页
                }else{
                  context[message]='密码错误'
                  context.name=''
                  context.pass=''
                }
              },res=>{
                context[message]='请求错误,稍后重试'
              })
            },
        base-text
          slot.
            下一步完成<main>components/login.vue</main>的登录组件<br>
            登录组件与注册组件的模版和数据逻辑是几乎一样的,模版都是一个表单改一下名字<br>
            数据都是用户名、密码、错误选项,逻辑都是通过之前写好的auth进行对应的提交
        base-img(src="/images/token/token5.png" width="80")
        base-code(type="pug")
          slot.
            &lttemplate lang="pug"&gt
              .loginBox
                form.h500.w500.pt50.ov(
                  autoComplete="off" style="margin:0 auto"
                  flex="cross:center dir:top"
                )
                  p.mb10.colorSky(flex="cross:center main:center") 登录
                  p.mb10.colorSky(flex="cross:center main:center" v-show="error") { { error } }
                  //- 名字
                  p.mb10.ov.pr
                    input.input-big(
                      name="name"
                      v-model="name"
                      v-validate="'required|min:4|max:10'"
                    )
                    span.dib.colorSky.pa.w300.h30.lh30.ml10(
                      v-show="fields.name.touched&&fields.name.invalid"
                      style="left:200px;"
                    ) 请输入4位到10位之间的名字
                  //- 密码
                  p.mb10.ov.pr
                    input.input-big(
                      type="password"
                      name="pass"
                      v-model="pass"
                      v-validate="'required|min:4|max:10'"
                    )
                    span.dib.colorSky.pa.w300.h30.lh30.ml10(
                      v-show="fields.pass.touched&&fields.pass.invalid"
                      style="left:200px;"
                    ) 请输入4位到10位之间的密码
                  //- 提交按钮
                  button.btn-big(
                    type="button"
                    @click="login"
                  ) 提交
            &lt/template&gt
        base-code
          slot.
            &ltscript&gt
              import Vue from 'vue'
              import VeeValidate from 'vee-validate'
              import auth from '../js/auth'

              Vue.use(VeeValidate)

              export default {
                data () {
                  return {
                    name:'',
                    pass:'',
                    error:''  
                  }
                },
                methods: { 
                  login(){
                    this.$validator.validateAll().then(res=&gt{
                      // 认证成功
                      if(res){
                        const user={
                          name:this.name,
                          pass:this.pass
                        }
                        auth.login(this,user,'error')
                      }
                      // 认证失败
                      else{
                        this.name=''
                        this.pass=''
                        this.error='不符合验证'
                      }
                    })
                  }
                }
              }
            &lt/script&gt
        small-title(title="用户数据获取")
        base-text
          slot.
            注册登录都完成了,现在需要确定用户是否登录并且在下次登录的时候可以不用再次登录就可以获取自己的数据<br>
            现在我们完成token检查(用户是否登录的检查),并完成注销登录和用户在登录下的数据获取<br>
            首先在<main>auth.js</main>中增加获取头部token,登录检查,注销三个功能
        base-code
          slot.
            /**
            * 获取头部
            */
            getAuthHeader(){
              return {
                headers:{
                  'Authorization':localStorage.getItem('token')
                }
              }
            },

            /**
            * 检查是否登录
            */
            checkAuth(){
              let auth=localStorage.getItem('token')
              if(auth){
                this.authenticated=true
              }else{
                this.authenticated=false
              }
            },

            /**
            * 清楚缓存
            */
            clearAuth(){
              this.checkAuth()
              if(this.authenticated){
                localStorage.removeItem('token')
              }
              window.location.reload()
            }
        base-text
          slot.
            完成了auth函数方法,现在开始完善<main>components/home.vue</main>,这个页面代表了用户的主页<br>
        base-code
          slot.
            &lttemplate lang="pug"&gt
              .test userName:{ { userName } }
                .btn-small(v-show="userName" @click="clearUser") 注销
            &lt/template&gt
        base-code
          slot.
            &ltscript&gt
              import auth from '../js/auth'
              import axios from 'axios'
              export default {
                beforeCreate () {
                  // 异步发送带一个token的请求头判断用户是否登陆,成功后返回用户的名字
                  axios.post('http://127.0.0.1:8080/user',{},auth.getAuthHeader()).then(res=&gt{
                    this.userName=res.data
                  })
                },
                data () {
                  return {
                    userName:''
                  }
                },
                methods: {
                  clearUser(){
                    auth.clearAuth()
                  }
                }
              }
            &lt/script&gt
        base-text
          slot.
            当用户没有登陆访问自己的主页的时候常理应该让用户跳转到登陆页面,我们在<main>App.vue</main>中完善这个功能<br>
            在创建前检查是否有token,如果没有则跳转到登陆,如果有则把token保存到data中
        base-code
          slot.
            &ltscript&gt

              import auth from './js/auth'

              export default {
                beforeCreate () {
                  auth.checkAuth()
                  let bool=auth.authenticated
                  if(!bool&&window.location.pathname!='/register'){
                    this.$router.push('/login')
                  }else{
                    this.token=localStorage.getItem('token')
                  }
                },
                data () {
                  return {
                    token:''
                  }
                }
              }
            &lt/script&gt
        small-title(title="路由")
        base-text
          slot.
            最后是完善<main>index.js</main>并写入路由管理<main>router.js</main>,这里运用了懒加载的方法加载组件
        base-code
          slot.
            import Vue from 'vue'
            import Router from 'vue-router'
            const register=()=> import('./components/register')
            const login=()=>import('./components/login.vue')
            const home=()=>import('./components/home.vue')

            Vue.use(Router)

            export default new Router({
              mode:'history',
              routes:[
                {
                  path:'/register',
                  component:register
                },
                {
                  path:'/login',
                  component:login
                },
                {
                  path:'/home',
                  component:home
                }
              ]
            })
        base-code
          slot.
            import Vue from 'vue'
            import App from './App.vue'
            import router from './router'

            new Vue({
              router,
              render:h=>h(App)
            }).$mount('#app')
        small-title(title="运行")
        base-text
          slot.
            通过指令<main>npm run dev</main>运行代码
</template>

<script>

import NavTop from '~/components/NavTop'
import NavLeft from '~/components/NavLeft'
import BaseCaption from '~/components/BaseCaption'
import BaseTitle from '~/components/BaseTitle'
import SmallTitle from '~/components/SmallTitle'
import BaseText from '~/components/BaseText'
import BaseCode from '~/components/BaseCode'
import BaseImg from '~/components/BaseImg'

export default {
  components: {
    NavTop,
    NavLeft,
    BaseCaption,
    BaseTitle,
    SmallTitle,
    BaseText,
    BaseCode,
    BaseImg
  }
}
</script>


