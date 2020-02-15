// $(document).ready(function() {
// })
//     (function() {
//       $(".menu-wrapper").on("click", function() {
//         $(".hamburger-menu").toggleClass("animate");
//       });
//     })();
//
//
//
// $("ul.main-menu li").click(function(e) {
//   // e.preventDefault();
//
//   if (
//     $(this)
//       .siblings("li")
//       .find("ul.submenu:visible").length
//   ) {
//     $("ul.submenu").slideUp("normal");
//   }
//   $(this)
//     .find("ul.submenu")
//     .slideToggle("normal");
// });
//
// var t1 = new TimelineMax({ paused: true });
//
// t1.to(".menu", 0.5, {
//   autoAlpha: 1,
//   y: -1
// });
//
// t1.staggerFrom(
//   ".main-menu li a:not(.submenu li a)",
//   1,
//   {
//     opacity: 0,
//     y: 10,
//     ease: Power3.easeInOut
//   },
//   0.1
// );
//
// t1.from(".submenu", 0.5, {
//   autoAlpha: 0
// });
//
// t1.staggerFrom(
//   ".media ul li",
//   0.6,
//   {
//     opacity: 0,
//     y: 10,
//     ease: Power3.easeInOut
//   },
//   0.1,
//   "-=2"
// );
//
// t1.from(".call", 1, {
//   delay: -2,
//   opacity: 0,
//   y: 10,
//   ease: Power3.easeInOut
// });
//
// t1.from(".mail", 1, {
//   delay: -1.6,
//   opacity: 0,
//   y: 10,
//   ease: Power3.easeInOut
// });
//
// t1.reverse();
//
// $(document).on("click", ".menu-wrapper", function() {
//   t1.reversed(!t1.reversed());
//   $(".menu-wrapper").addClass("hamburger-menu-add");
// });
//
// $(document).on("click", ".close-menu", function() {
//   t1.reversed(!t1.reversed());
// });


// const $bigBall = document.querySelector('.cursor__ball--big');
// const $smallBall = document.querySelector('.cursor__ball--small');
// const $hoverables = document.querySelectorAll('.hoverable');
//
// // Listeners
// document.body.addEventListener('mousemove', onMouseMove);
// for (let i = 0; i < $hoverables.length; i++) {
//   $hoverables[i].addEventListener('mouseenter', onMouseHover);
//   $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
// }
//
// // Move the cursor
// function onMouseMove(e) {
//   TweenMax.to($bigBall, .4, {
//     x: e.pageX - 15,
//     y: e.pageY - 15
//   })
//   TweenMax.to($smallBall, .1, {
//     x: e.pageX - 5,
//     y: e.pageY - 7
//   })
// }
//
// // Hover an element
// function onMouseHover() {
//   TweenMax.to($bigBall, .3, {
//     scale: 2
//   })
// }
// function onMouseHoverOut() {
//   TweenMax.to($bigBall, .3, {
//     scale: 1
//   })
// }


class Demo {
  constructor() {
    this.initSVG();
    this.initCursor();
    this.initHovers();
  }

  initSVG(){
    $(document).mousemove(function(event){

  $("mask polygon").each(function(index, element){

    var xPos = (event.clientX/$(window).width())-0.5,
       yPos = (event.clientY/$(window).height())-0.5,
       box = element;

  TweenLite.to(box, 1, {
    rotationY: xPos * 100,
    rotationX: yPos * 100,
    ease: Power1.easeOut,
  });

  })
});
  }

  initCursor() {
    const { Back } = window;
    this.outerCursor = document.querySelector(".circle-cursor--outer");
    this.innerCursor = document.querySelector(".circle-cursor--inner");
    this.outerCursorBox = this.outerCursor.getBoundingClientRect();
    this.outerCursorSpeed = 0;
    this.easing = Back.easeOut.config(1.7);
    this.clientX = -100;
    this.clientY = -100;
    this.showCursor = false;

    const unveilCursor = () => {
      TweenMax.set(this.innerCursor, {
        x: this.clientX,
        y: this.clientY
      });
      TweenMax.set(this.outerCursor, {
        x: this.clientX - this.outerCursorBox.width / 2,
        y: this.clientY - this.outerCursorBox.height / 2
      });
      setTimeout(() => {
        this.outerCursorSpeed = 0.2;
      }, 100);
      this.showCursor = true;
    };
    document.addEventListener("mousemove", unveilCursor);

    document.addEventListener("mousemove", e => {
      this.clientX = e.clientX;
      this.clientY = e.clientY;
    });

    const render = () => {
      TweenMax.set(this.innerCursor, {
        x: this.clientX,
        y: this.clientY
      });
      if (!this.isStuck) {
        TweenMax.to(this.outerCursor, this.outerCursorSpeed, {
          x: this.clientX - this.outerCursorBox.width / 2,
          y: this.clientY - this.outerCursorBox.height / 2
        });
      }
      if (this.showCursor) {
        document.removeEventListener("mousemove", unveilCursor);
      }
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
  }

  initHovers() {
    const handleMouseEnter = e => {
      this.isStuck = true;
      const target = e.currentTarget;
      const box = target.getBoundingClientRect();
      this.outerCursorOriginals = {
        width: this.outerCursorBox.width,
        height: this.outerCursorBox.height
      };
      TweenMax.to(this.outerCursor, 0.2, {
        x: box.left,
        y: box.top,
        width: box.width,
        height: box.height,
        opacity: 0.4,
        borderColor: "#000"
      });
    };

    const handleMouseLeave = () => {
      this.isStuck = false;
      TweenMax.to(this.outerCursor, 0.2, {
        width: this.outerCursorOriginals.width,
        height: this.outerCursorOriginals.height,
        opacity: 0.2,
        borderColor: "#000"
      });
    };

    const mainNavHoverTween = TweenMax.to(this.outerCursor, 0.3, {
      backgroundColor: "#fff",
      ease: this.easing,
      paused: true,
      opacity: 0.2,
      scale: 1.5
    });

    const mainNavMouseEnter = () => {
      this.outerCursorSpeed = 0;
      TweenMax.set(this.innerCursor, { opacity: 0 });
      mainNavHoverTween.play();
    };

    const mainNavMouseLeave = () => {
      this.outerCursorSpeed = 0.2;
      TweenMax.set(this.innerCursor, { opacity: 1 });
      mainNavHoverTween.reverse();
    };

    const mainNavLinks = document.querySelectorAll(".hoverable");
    mainNavLinks.forEach(item => {
      item.addEventListener("mouseenter", mainNavMouseEnter);
      item.addEventListener("mouseleave", mainNavMouseLeave);
    });
  }
}

const demo = new Demo();


// scroll active
$(document).ready(function() {
		$('.nav__link[href*=#]').bind('click', function(e) {
				e.preventDefault(); // prevent hard jump, the default behavior

				var target = $(this).attr("href"); // Set the target as variable

				// perform animated scrolling by getting top-position of target-element and set it as scroll target
				$('html, body').stop().animate({
						scrollTop: $(target).offset().top
				}, 300, function() {
						location.hash = target; //attach the hash (#jumptarget) to the pageurl
				});

				return false;
		});
});

$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();

		// Assign active class to nav links while scolling
		$('.page-scroll').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
						$('.main-navigation ul li a.active').removeClass('active');
						$('.main-navigation ul li a').eq(i).addClass('active');
				}
		});
}).scroll();

// Nicescroll
// $("body").niceScroll({
//   cursorcolor:"black",
//   cursorborder: "1px solid black",
//   cursorwidth:"4px"
// });


// key function
document.onkeydown = function(e) {
  if (e.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
};
