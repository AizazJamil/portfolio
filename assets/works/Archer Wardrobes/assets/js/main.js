// var swiper = new Swiper('.swiper-container', {
//   slidesPerView: 1,
//   spaceBetween: 10,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   breakpoints: {
//     640: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 40,
//     },
//     1024: {
//       slidesPerView: 4,
//       spaceBetween: 50,
//     },
//     1300: {
//       slidesPerView: 4,
//       spaceBetween: 50,
//     },
//   }
// });

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  spaceBetween: 5,
  centeredSlides: true,
  loop: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 5,
    },
    1700: {
      slidesPerView: 4,
      spaceBetween: 10,
    }
  }
});


// $(".scrolling--content").niceScroll({
//       cursorwidth:12,
//       cursoropacitymin:0.4,
//       cursorcolor:'#6e8cb6',
//       cursorborder:'none',
//       cursorborderradius:4,
//       autohidemode:'leave'
// });  // free your immagination
