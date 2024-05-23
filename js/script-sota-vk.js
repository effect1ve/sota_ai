$(".flowing-scroll").on("click", function () {
  var el = $(this);
  var offSet = 91; //Высота хедера
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

/*======= Скрипт для форма + маска =======*/
let phoneInputID = document.querySelector("#phone");

let iti = window.intlTelInput(phoneInputID, {
  allowDropdown: true,

  //autoInsertDialCode: true,
  autoPlaceholder: "aggressive",
  //dropdownContainer: document.body,
  // excludeCountries: ["us"],
  formatOnDisplay: true,
  geoIpLookup: function (callback) {
    fetch("https://ipapi.co/json")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        callback(data.country_code);
      })
      .catch(function () {
        callback("ru");
      });
  },
  //hiddenInput: "full_number",
  initialCountry: "auto",
  // localizedCountries: { 'de': 'Deutschland' },
  //nationalMode: true,
  //onlyCountries: ['ru', 'gb', 'ch', 'ca', 'do'],
  //placeholderNumberType: "MOBILE",
  // preferredCountries: ['cn', 'jp'],
  separateDialCode: true,

  //showFlags: true,
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.2.1/../js/utils.min.js",
});

let quantityNumbers;

$(phoneInputID).on("countrychange", function (event) {
  // Get the selected country data to know which country is selected.
  var selectedCountryData = iti.getSelectedCountryData();

  // Wait for the utils script to be loaded before using its functions.
  iti.promise.then(function () {
    // Get an example number for the selected country to use as placeholder.
    var newPlaceholder = intlTelInputUtils.getExampleNumber(
      selectedCountryData.iso2,
      true,
      intlTelInputUtils.numberFormat.INTERNATIONAL
    );

    // Reset the phone number input.
    iti.setNumber("");

    let newPlaceholder2;

    if (newPlaceholder.charAt(0) !== "(") {
      newPlaceholder2 = newPlaceholder.substring(1);
    } else {
      newPlaceholder2 = newPlaceholder;
    }

    let onlyNumbers = newPlaceholder2.replace(/[^0-9]/g, "");
    quantityNumbers = onlyNumbers.length;
    handleQuantityNumbers(quantityNumbers);

    var mask = newPlaceholder2.replace(/[1-9]/g, "0");
    // var mask = $("#phone").attr('placeholder').replace(/[0-9]/g, 0);
    $(document).ready(function () {
      $(phoneInputID).mask(mask);
    });
    // $(phoneInputID).mask(mask);
  });
});

iti.promise.then(function () {
  $(phoneInputID).trigger("countrychange");
});

/*======= КОНЕЦ Скрипта для форма + маска =======*/

function handleQuantityNumbers(quantity) {
  console.log(quantity);
}

/*========== ВАЛИДАЦИЯ ФОРМЫ ==========*/
$.validator.setDefaults({
  highlight: function (element) {
    $(element).addClass("invalid");
  },
  unhighlight: function (element) {
    $(element).removeClass("invalid");
  },
});

$(document).ready(function () {


  $("#form").validate({
    rules: {
      name: {
        required: true,
        minlength: 3,
      },
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
        minlength: 14,
      },
    },
    messages: {
      name: {
        required: "Пожалуйста, введите ваше имя",
        minlength: "Минимальная длина имени должна быть не менее 3 символов",
      },
      email: {
        required: "Пожалуйста, введите ваш email",
        email: "Пожалуйста, введите корректный email",
      },
      phone: {
        required: "Пожалуйста, введите ваш номер телефона",
        minlength: "Номер телефона слишком короткий",
      },
    },
    submitHandler: function (form) {
      // Действия при успешной валидации формы
      form.submit();
    },
  });

  
});
