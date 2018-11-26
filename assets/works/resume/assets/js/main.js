$(function() {
  $(".dot").typed({
    strings: ["DESIGNER", "DEVELOPER", "CREATIVE"],
    typeSpeed: 50,
    backSpeed: 10,
    backDelay: 2000,
    showCursor: false,
    loop: false
  });
});


(function($) {
  var duration = 2500;  // change this to change rotation time in milliseconds
  var current = 1;
  var tricker = $(".tricker");
  var height = tricker.height();
  var number = tricker.children().length;
  var first = tricker.children().first();

  setInterval(function() {
    var interv = current * -1 * height;
    first.css("margin-top", interv + "px");
    if (current == number) {
      first.css("margin-top", "0px");
      current = 1;
    } else {
      current++;
    }
  }, duration);
})(jQuery);


// Testimonial Section Slider Clients
var swiper = new Swiper('#testimonial', {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '#swiper-pagination-client',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Blogs Section Multiple Slider Clients
// var swiper = new Swiper('#blog-container', {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   centeredSlides: true,
//   // loop: true,
//   // autoplay: {
//   //   delay: 2500,
//   //   disableOnInteraction: false,
//   // },
//   pagination: {
//     el: '#swiper-client-blogs',
//     clickable: true,
//   },
// });


var swiper = new Swiper('#blog-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '#swiper-client-blogs',
    clickable: true,
  },
  // navigation: {
  //   nextEl: '#swiper-button-next-sold',
  //   prevEl: '#swiper-button-prev-sold',
  // },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    450: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    }
  }
});


// Enable Smooth Scrolling ...  by Chris Coyier of CSS-Tricks.com
$('a[href*="#"]:not([href="#"]):not([href="#show"]):not([href="#hide"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});


let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("main section");

let lastId;
let cur = [];

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});



// Back to Top
jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});


jQuery('#cody-info ul li').eq(1).on('click', function(){
$('#cody-info').hide();
});


// Scrolled Navigation Position Fixed
$(function() {
  $(window).scroll(function() {
      if ($(window).scrollTop() >= 500) {
          $('.navbar-navigation').addClass('scrolled');
      } else {
          $('.navbar-navigation').removeClass('scrolled');
      }
  });
});
