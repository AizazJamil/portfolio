// Animation here code
//header
const header = document.querySelector(".menu-wrapper");

//banner
const home = document.querySelector("#homeBg");
const homeAddition = document.querySelector("#homeBgAddition");

// home text
const h5Small = document.querySelector(".hero-title h5");
const h2Line = document.querySelectorAll(".line span");
const contentP = document.querySelector(".hero-title p");
const contentButton = document.querySelectorAll(".hero-title .btn");

//image
const bannerImage = document.querySelector(".hero-image .hero__image");

//mousescroll animation
const mouseScrollAnimation = document.querySelector(".mouse-scroll");

//mousescroll animation
const sayFixedP = document.querySelectorAll(".fixed-bottom p");
const sayFixedLine = document.querySelectorAll(".fixed-bottom .line");
const sayFixedA = document.querySelectorAll(".fixed-bottom a");

// Portfolio
const scrollHeadingOne = document.querySelectorAll(".heading h2 .head-one");
const scrollHeadingTwo = document.querySelectorAll(".heading h2 .head-two");


const bannerTL = gsap.timeline();

bannerTL
  .from([homeAddition, home], {
    duration: 1.2,
    width: 0,
    skewX: 4,
    ease: "power3.inOut",
    stagger: {
      amount: 0.2
    }
  })
  .from(header, {
    delay: -0.2,
    y: 16,
    opacity: 0,
    duration: 0.8,
    ease: "power3.inOut"
  })
  .from([h5Small], {
    delay: -0.4,
    y: -40,
    duration: 0.8,
    opacity: 0,
    ease: "power3.out",
    stagger: {
      amount: 0.2
    }
  })
  .from(h2Line, {
    delay: -0.4,
    y: 80,
    duration: 0.8,
    ease: "power3.out",
    stagger: {
      amount: 0.2
    }
  })
  .from([contentP, contentButton], {
    delay: -0.6,
    y: -40,
    duration: 0.8,
    opacity: 0,
    ease: "power3.out",
    stagger: {
      amount: 0.2
    }
  });


gsap.from(bannerImage, {
  delay: 2.2,
  x: -100,
  skewX: 2,
  duration: 0.8,
  opacity: 0,
  ease: "power3.out"
});

gsap.from(mouseScrollAnimation, {
  delay: 2.4,
  y: 100,
  skewX: 2,
  duration: 0.8,
  opacity: 0,
  ease: "power3.out"
});

gsap.from(sayFixedP, {
  delay: 2.6,
  y: 100,
  skewX: 2,
  duration: 0.8,
  opacity: 0,
  ease: "power3.out"
});

gsap.from(sayFixedLine, {
  delay: 2.8,
  y: 100,
  skewX: 2,
  duration: 0.8,
  opacity: 0,
  ease: "power3.out"
});

gsap.from(sayFixedA, {
  delay: 3,
  y: 100,
  skewX: 2,
  duration: 0.8,
  opacity: 0,
  ease: "power3.out"
});


// Portfolio Animation
const portfolioTL = gsap.timeline();

portfolioTL.from([scrollHeadingOne, scrollHeadingTwo], {
  delay: -0.4,
  opacity: 0,
  y: 40,
  duration: 0.6,
  ease: "power3.out",
  stagger: {
    amount: 0.2
  }
});


const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  triggerElement: "#heroEnd",
  triggerHook: 0,
  reverse: true
})
.addIndicators()
.setTween(portfolioTL)
.addTo(controller)
