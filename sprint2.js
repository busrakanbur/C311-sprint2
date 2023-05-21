
$(document).ready(function () {

  //slider
  $("#slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $(".prev-button"),
    nextArrow: $(".next-button"),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  //sticky buttons
  $('#sticky-button').sticky({
    topSpacing: 20,
    bottomSpacing: 40
  });

  $("#dialog").dialog();

  

});




