let phoneInputID = document.querySelector("#phone");

        let iti = window.intlTelInput(phoneInputID, {
            allowDropdown: true,
            autoPlaceholder: "aggressive",
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
            initialCountry: "auto",
            separateDialCode: true,
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
        });

        let quantityNumbers;

        $(phoneInputID).on("countrychange", function (event) {
            var selectedCountryData = iti.getSelectedCountryData();

            iti.promise.then(function () {
                var newPlaceholder = intlTelInputUtils.getExampleNumber(
                    selectedCountryData.iso2,
                    true,
                    intlTelInputUtils.numberFormat.INTERNATIONAL
                );

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

                $(document).ready(function () {
                    $(phoneInputID).mask(mask);
                });
            });
        });

        iti.promise.then(function () {
            $(phoneInputID).trigger("countrychange");
        });

        function handleQuantityNumbers(quantity) {
            // console.log(quantity);
        }

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
                    },
                    email: {
                        required: true,
                        email: true,
                    },
                    phone: {
                        required: true,
                        minlength: 10,
                    },
                },
                messages: {
                    name: {
                        required: "Пожалуйста, введите ваше имя",
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
                submitHandler: function (form, event) {
                    event.preventDefault();  // Предотвращает стандартное поведение отправки формы
                    console.log("submitHandler called");

                    let phone = iti.getNumber(intlTelInputUtils.numberFormat.E164); // Убедитесь, что intlTelInputUtils загружен
                    $("#phone").val(phone);

                    let formData = new FormData(form);

                    let xhr = new XMLHttpRequest();

                    xhr.onreadystatechange = function () {
                        if (xhr.readyState === 4) {
                            if (xhr.status === 200) {
                                $('.send-success').css('display', 'block');
                                $('.form-submit-btn').css('display', 'none');
                                form.reset();
                            } else {
                                alert("Произошла ошибка при отправке формы.");
                            }
                        }
                    };

                    xhr.open("POST", "sendFormToEmail.php", true);
                    xhr.send(formData);
                },
            });
        });