// let x = document.querySelector(".container")
// setTimeout(function(){
//   x.style.animation = "fade 1s";
//   x.style.opacity = "1"
//   },1000)
  


  $(".flowing-scroll").on("click", function () {
    var el = $(this);
    var offSet = 86; //Высота хедера
    var dest = el.attr("href"); // получаем направление
    if (dest !== undefined && dest !== "") {
      // проверяем существование
      $("html").animate(
        {
          scrollTop: $(dest).offset().top - offSet, // прокручиваем страницу к требуемому элементу - вычитаем высоту меню, чтобы не закрывало контент
        },
        1000
      ); // скорость прокрутки
    }
    return false;
  });
  


// загрузка модуля footer для всех страниц
$("#footer").load("footer.html"); 
 

