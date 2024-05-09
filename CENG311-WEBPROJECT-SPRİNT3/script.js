$(document).ready(function () {
  // Initialize Slick carousel
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  //Galeri için slider kaydırma,ok ekleme
  $(document).ready(function () {
    $(".slider").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      prevArrow: '<button type="button" class="slick-prev">←</button>',
      nextArrow: '<button type="button" class="slick-next">→</button>',
    });

    // border rengini rastgele değiştiren fonksiyon
    function changeBordersToRandomColor() {
      $(".slide img").css("border-color", getRandomColor());
    }

    // eventListenerlar
    $(".slick-next").on("click", changeBordersToRandomColor);
    $(".slick-prev").on("click", changeBordersToRandomColor);
  });
});

$(document).ready(function () {
  // Form doğrulama için JQuery Validation kullanılıyor
  $("#iletisim").validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
        number: true,
        minlength: 10,
        maxlength: 10,
      },
    },
    messages: {
      name: {
        required: "Lütfen adınızı girin",
        minlength: "Ad en az 2 karakter olmalı",
      },
      email: {
        required: "Lütfen e-posta adresinizi girin",
        email: "Geçerli bir e-posta adresi girin",
      },
      phone: {
        required: "Lütfen telefon numarası girin",
        minlength: "Telefon numarası en az 10 haneli olmalı",
        maxlength: "Telefon numarası en fazla 10 haneli olmalı",
        number: "Geçerli bir telefon numarası girin",
      },
    },
  });

  // Tarih seçici
  $("#datepicker").datepicker();
});

$(document).ready(function name(params) {
  $("#iletisim").on("submit", function (event) {
    event.preventDefault();
    alert("Form başarıyla gönderildi!");
  });
});

$(document).ready(function name() {
  function updateClock() {
    var now = new Date();
    var hours = String(now.getHours()).padStart(2, "0");
    var minutes = String(now.getMinutes()).padStart(2, "0");
    var seconds = String(now.getSeconds()).padStart(2, "0");
    var timeString = hours + ":" + minutes + ":" + seconds;
    $("#clock").text(timeString); // Saati güncelle
  }

  // Sayfa yüklendiğinde saati güncellemeye başla
  $(function () {
    updateClock();
    setInterval(updateClock, 1000);
  });
});

//datapicker alındı
$(document).ready(
  $(function () {
    $("#datepicker").datepicker();
  })
);

$(function () {
  var apiKey = "7bddc9afb5b8395d57c309dce08c17fa";
  var city = "Ankara";
  var apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    apiKey +
    "&units=metric";

  $.getJSON(apiUrl, function (data) {
    var weather = data.weather[0].description;
    var temperature = data.main.temp;
    var cityName = data.name;

    var weatherHtml = "<p>Şehir: " + cityName + "</p>";
    weatherHtml += "<p>Sıcaklık: " + temperature + "°C</p>";
    weatherHtml += "<p>Hava: " + weather + "</p>";

    $("#weather-info").html(weatherHtml);
  }).fail(function () {
    $("#weather-info").html("<p>Hava durumu bilgisi alınamadı.</p>");
  });
});

//döviz kuru Apiden alındı

$(document).ready(
  $(function () {
    var apiKey = "3c66fd30f65742d8b48a1e5e8319027a";
    var apiUrl =
      "https://openexchangerates.org/api/latest.json?app_id=" + apiKey;

    $.getJSON(apiUrl, function (data) {
      var rates = data.rates;
      var usdToTry = rates.TRY;
      var usdToZAR = rates.ZAR;

      var ratesHtml = "<p>1 USD = " + usdToTry.toFixed(2) + " TRY</p>";
      ratesHtml +=
        "<p>1 USD = " + usdToZAR.toFixed(2) + " ZAR (Güney Afrika Randı)</p>";

      $("#currency-rates").html(ratesHtml);
    }).fail(function () {
      $("#currency-rates").html("<p>Döviz kurları alınamadı.</p>");
    });
  })
);

//donation sayfasındaki negatif girişleri ve sayı olamyan girişleri önlemek için .

$(document).ready(function () {
  // Bağış miktarı için negatif kontrolü
  $('input[type="text"]').on("input", function () {
    let value = $(this).val();

    //sayi mi değil mi
    if (isNaN(value)) {
      alert("Lütfen sadece rakam giriniz.");
      $(this).val("");
    } else {
      let num = parseFloat(value);
      if (num < 0) {
        alert("Bağış miktarı negatif olamaz!");
        $(this).val("");
      }
    }
  });
});

//jquery animation
$(document).ready(function () {
  // Nav bar animation on hover
  $(".nav-links a").hover(
    function () {
      $(this).animate({ fontSize: "1.5em" }, 300); // Büyütme
    },
    function () {
      $(this).animate({ fontSize: "1em" }, 300); // Eski boyuta dönme
    }
  );

  // Header animation on page load
  $("header h1").hide().fadeIn(1500); // Başlık fade in animasyonu

  // Box hover animation
  $(".box").hover(
    function () {
      $(this).animate({ backgroundColor: "#f0f0f0" }, 300); // Renk değişimi
    },
    function () {
      $(this).animate({ backgroundColor: "#ffffff" }, 300); // Eski renge dönme
    }
  );
});

//code for jqueery accordion plugin
$(document).ready(function () {
  $("#accordion").accordion({
    collapsible: true,
    heightStyle: "content",
  });
});
