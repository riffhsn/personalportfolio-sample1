window.onscroll = function() {
    if(document.documentElement.scrollTop > 200 ){
        backtotop.style.display = 'block'
        }
    else {
        backtotop.style.display = 'none'
    }
}

backtotop.onclick = function(){
window.scrollTo({
    top: 0,
    behavior: "smooth",
}) 
}
       