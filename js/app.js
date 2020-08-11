AOS.init({
  duration: 1100,
  easing: 'easeOutSine'
});

$(function() {
  $('a[href^="#"]').click(function () {
    var time = 600;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html,body").animate({ scrollTop: position }, time, "swing");
    return false;
  });

  // ヘッダーメニュー
  var targetHeight = $('.js-float-menu-target').height();
  $(window).on('scroll', function() {
    $('.js-float-menu').toggleClass('float-active', $(this).scrollTop() > targetHeight);
  });

  // SPメニュー
  $('.js-toggle-sp-menu').on('click', function () {
    $(this).toggleClass('active');
    $('.js-toggle-sp-menu-target').toggleClass('active');
  });
    
  $('.menu-link').on('click', function() {
    $('.js-toggle-sp-menu').removeClass('active');
    $('.js-toggle-sp-menu-target').removeClass('active');
  });

});