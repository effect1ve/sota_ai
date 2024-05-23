$(document).ready(function() {

  
    let mySwiper = new Swiper(".swiper-container", {
      spaceBetween: 1,
      slidesPerView: 3,
      centeredSlides: true,
      roundLengths: true,
      loop: true,
      loopAdditionalSlides: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  });
  