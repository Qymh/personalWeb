// 加载图
$.loading=function(){
  let libHtml=`
  <div class="alertLoading">
    <div class="cube1"></div>
    <div class="cube2"></div>
  </div>
  `

  $('body').append($(libHtml))
}

// 移除加载图
$.removeLoading=function(){
  $('.alertLoading').remove()
}

// 温馨提示
$.remind=function(text='请输入提示文字',timeout=2000){

  let libHtml=`
    <div class="alertBackGround"></div>
    <div class="alertRemind animated pulse" flex="cross:center main:center">
      ${text}
    </div>
  `
  $('body').append($(libHtml))

  let timer=setTimeout(() => {
    $('.alertRemind').removeClass('pulse').addClass('fadeOut')
    let _inner=setTimeout(() => {
      $('.alertRemind').remove()
      $('.alertBackGround').remove()
      _inner=null
    }, 200);
    timer=null
  }, timeout);
}

// 空div

$.empty=()=>{
  let libHtml=`
    <div class="alertEmpty"></div>
  `

  $('body').append($(libHtml))
}

$.removeEmpty=()=>{
  $('.alertEmpty')[0].remove()
}