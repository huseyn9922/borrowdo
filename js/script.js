
jQuery(document).ready(function(){
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});
});



AOS.init();


// $(window).scroll(function(){
//   var scroll = $(window).scrollTop(),
//   dh = $(document).height(),
//   wh = $(window).height();
//   scrollPercent = (scroll / (dh-wh)) * 100;
//   $('#progressbar').css('height', scrollPercent + '%');
// })


var open = document.getElementById('hamburger');
var changeIcon = true;

open.addEventListener("click", function(){

    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

        changeIcon = false;
    }
    else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
    }
});