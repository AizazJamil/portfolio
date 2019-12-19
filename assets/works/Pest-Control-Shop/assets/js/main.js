var swiper = new Swiper('.pest-container', {
  slidesPerView: 2,
  spaceBetween: 50,
  centeredSlides: true,
  loop: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  pagination: {
    el: '.customer-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1300: {
      slidesPerView: 7,
      spaceBetween: 30,
    },
    1600: {
      slidesPerView: 7,
      spaceBetween: 30,
    },
    1700: {
      slidesPerView: 11,
      spaceBetween: 30,
    }
  }
});

var swiper = new Swiper('.container-product', {
  slidesPerView: 2,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.product-slide-next',
    prevEl: '.product-slide-prev',
  },
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 10,
      centeredSlides: true,
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 10,
      centeredSlides: true,
    },
    1700: {
      slidesPerView: 5,
      spaceBetween: 10,
      centeredSlides: false,
    }
  }
});
