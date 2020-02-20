window.onload = window.onresize =  function () {
    let html = document.querySelector('html')
    html.style.fontSize = window.innerWidth / 20 + 'px'
}
// var whei=$(window).width()
// $("html").css({fontSize:whei/20})
// $(window).resize(function(){
// var whei=$(window).width()
// $("html").css({fontSize:whei/20})
// });