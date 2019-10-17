var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// Smooth Scrolling Href Linker
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
  e.preventDefault();

  document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
  });
});
});
