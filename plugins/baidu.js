
if (process.BROWSER_BUILD && process.env.NODE_ENV === 'production') {
  var _hmt = _hmt || [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?bce79e37f357d4592a07a7d66195b6ac";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
  })();
}

export default({app:{router},store})=>{
  router.afterEach(()=>{
    
  })
}