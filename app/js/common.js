$(function() {

  $('.hamburger').sidr({
    side: 'right'
  });

  $(window).on('load', function () {
    $preloader = $('.loaderArea'),
      $loader = $preloader.find('.loader');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
  });

  $(".button").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".m-we_are").offset().top
    }, 1000);
});

$(window).scroll(function() {
  if ($(this).scrollTop() > $(this).height()) {
    $('.top').addClass('active');
  } else {
    $('.top').removeClass('active');
  }
});
$('.top').on('click', function() {
  $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
})

});
