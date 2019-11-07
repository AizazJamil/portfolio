var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 5,
  centeredSlides: false,
  loop: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
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
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1300: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1600: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    1700: {
      slidesPerView: 1,
      spaceBetween: 10,
    }
  }
});
