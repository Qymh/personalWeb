module.exports = {
  // 头部
  head:{
    title:'Qymh前端',
    meta:[
      {charset:'utf-8'},
      {name:'viewport',content:'width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no'}
    ],
    link:[
      {rel:'shortcut icon',type:'image/x-icon',href:'/images/q.ico'}
    ]
  },
  // 全局scss
  css:[
    {src:'assets/scss/reset.scss',lang:'scss'}
  ],
  // 加载线
  loading:{color:'#35caef'},
  // 缓存
  cache:true
}
