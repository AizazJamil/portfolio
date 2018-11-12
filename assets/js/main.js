function resizeNav(){$("#nav-fullscreen").css({"height":window.innerHeight});var radius=Math.sqrt(Math.pow(window.innerHeight,2)+Math.pow(window.innerWidth,2));var diameter=radius*2;$("#nav-overlay").width(diameter);$("#nav-overlay").height(diameter);$("#nav-overlay").css({"margin-top":-radius,"margin-left":-radius})}
$(document).ready(function(){$("#nav-toggle").click(function(){$("#nav-toggle, #nav-overlay, #nav-fullscreen").toggleClass("open")});$(window).resize(resizeNav);resizeNav()})

AOS.init();