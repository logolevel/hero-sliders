$('.hero-slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.hero-slider-nav',
    fade: false,
    adaptiveHeight: true,
  });
  $('.hero-slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.hero-slider-for',
    dots: true,
    arrows: false,
    appendDots: '.hero-slider-nav-dots',
    fade: true,
  });