$(document).ready(function () {
  $(".slick-slider").slick({
    centerMode: true,
    arrows: false,
    slidesToScroll: 1,
    centerPadding: "20px",
    slidesToShow: 3,
    infinite: true,
    focusOnSelect: true,
    // variableHeight: true,
    //variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "10px",
          slidesToShow: 1,
          variableWidth: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "10px",
          slidesToShow: 1,
          swipe: true, // Включить свайп для навигации
          touchThreshold: 10,
          swipeToSlide: true,
          prevArrow: $(".prev-arrow"),
          nextArrow: $(".next-arrow"),
        },
      },
    ],
  });
});
