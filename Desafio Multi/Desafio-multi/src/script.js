$(document).ready(function () {
  $(".carousel-slider").slick({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
  });

  $(".carousel-slider img").css({
    width: "50%",
    margin: "0 10px",
  });
});
