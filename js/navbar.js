$(".nav-mobile").click(function () {
  $(".nav-list").slideToggle();
});

$("#navbar-toggle").on("click", function () {
  this.classList.toggle("active");
});

// $(".nav-list-item").hover(
//   function () {
//     if (!$("#navbar-toggle").hasClass("active")) {
//       $(this).find(".dropdown-menu").css({
//         visibility: "visible",
//         transition: "all 0.3s ease 0s",
//         opacity: 1,
//         transform: "translateY(0)",
//       });
//     }
//   },
//   function () {
//     if (!$("#navbar-toggle").hasClass("active")) {
//       $(this).find(".dropdown-menu").css({
//         visibility: "hidden",
//         transition: "all 0.3s ease 0s",
//         opacity: 0,
//         transform: "translateY(10%)",
//       });
//     }
//   }
// );

$(".nav-list-item").mouseenter(function () {
  if (!$("#navbar-toggle").hasClass("active")) {
    $(this).find(".drop-menu").css({
      visibility: "visible",
      transition: "all 0.3s ease 0s",
      opacity: 1,
      transform: "translateY(0)",
    });
  }
});

$(".nav-list-item").mouseleave(function () {
  if (!$("#navbar-toggle").hasClass("active")) {
    $(this).find(".drop-menu").css({
      visibility: "hidden",
      transition: "all 0.3s ease 0s",
      opacity: 0,
      transform: "translateY(10%)",
    });
  }
});


$(".nav-list-item").click(function () {
  if ($("#navbar-toggle").hasClass("active")) {
    // Закрываем все dropdown-menu, кроме текущего
    $(".drop-menu").not($(this).find(".drop-menu")).slideUp().css({
      visibility: "hidden",
    });
    
    // Открываем текущий dropdown-menu
    $(this).find(".drop-menu").slideToggle().css({
      visibility: "visible",
      opacity: 1,
      transform: "translateY(0)",
    });
  }
});