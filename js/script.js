$(document).ready(function () {
  $('#button-callback').on('click', function () {
    $('#modal-callback').toggleClass('modal_visible');
  });
  $('.modal__box-white_close').on('click', function () {
    $('#modal-callback').toggleClass('modal_visible');
  });
  $
});


$('.owl-carousel').owlCarousel({
  margin: 30,
  loop: true,
  nav: true,
  dots: false,
  navText: ["<img src='img/slider/left-arrow.png'>", "<img src='img/slider/right-arrow.png'>"],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    768: {
      items: 2,
    },
    1000: {
      items: 3
    }
  }
})

$('form').submit(function () {
  var th = $(this);
  $.ajax({
    type: "POST",
    url: "../mailer/smart.php",
    data: th.serialize()
  }).done(function() {
    $(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
    setTimeout(function() {
      $(th).find('.success').removeClass('active').fadeOut();
      th.trigger("reset");
    }, 7000);
  });
  return false;
});

ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map", {
    center: [55.742119, 37.558957],
    zoom: 16,
    controls: []
  }),
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Тебе сюда',
    }, {
        iconImageHref: '../img/footer/pin.png',
        iconLayout: 'default#image'
      });
  myMap.geoObjects
    .add(myPlacemark);
  myMap.behaviors.disable('scrollZoom');
}

jQuery(function($){
   $("#phone-one").mask("+7(999)9999-999");
   $("#phone-two").mask("+7(999)9999-999");
   $("#footer-unput__tel").mask("+7(999)9999-999");
});