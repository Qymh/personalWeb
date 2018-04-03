module.exports = {
  // 头部
  head:{
    title:'Qymh前端',
    meta:[
      {charset:'utf-8'},
      {name:'viewport',content:'width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no'},
      {name:'keywords',content:'Qymh|张博委'},
      {name:'description',content:'张博委的个人网站 HTML5|CSS3|JavaScript|Vue|Node|Express 文章笔记 项目架构分享'},
      {name:'og:title',content:'Qymh前端'},
      {name:'og:description',content:'张博委的个人网站 HTML5|CSS3|JavaScript|Vue|Node|Express 文章笔记 项目架构分享'},
      {name:'og:type',content: 'website' },
      {name:'og:url',content: 'https://qymh.org.cn' },
      {name:'og:image',content: 'https://nav.qymh.org.cn/static/images/q.ico' },
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
  // 禁用预加载
  performance: {
    prefetch: false
  },
  render: {
    resourceHints:false
  },
  // 插件
  plugins:[
    {src:'~plugins/baidu.js',ssr:false}
  ]
}
