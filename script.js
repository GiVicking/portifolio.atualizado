$('.type-it').typeIt({
    startDelay: 3000,
    deleteSpeed: 50,
    strings: 'a Web designer',
    deleteDelay: 3000,
    loop: true,
  }).tiPause(800);
  $('.type-it').tiDelete();
  $('.type-it').tiType('a Front End Developer').tiPause(800);
  $('.type-it').tiDelete();
  $('.type-it').tiType('a Graphic Design').tiPause(3000);
  
  //footer
  
  $('footer p').typeIt({
    startDelay: 1000,
    deleteSpeed: 50,
    strings: '2017 &copy; Website creafted with <i class="fa fa-heart" aria-hidden="true"></i>      by the owner.',
    deleteDelay: 3000,
    loop: true,
  }).tiPause(1000);
  
  // ANIME.JS
  //example
  anime({ 
  });
  
  
  //AOS scroll animations
  AOS.init(1400);
  
  //window scroll animations
  var $window = $(window);
      $boxHeight = $('.box').height();
  
  $window.scroll(function() {
    if ($window.scrollTop() >= ($boxHeight + 650)) {
      $('.ui').addClass('animated bounceIn is').css('display', 'flex');
    } else {
    }
  });
  
  // fade animations
  $('.logo').hide().delay(500).fadeIn(500);
  $('ul').hide().delay(1000).fadeIn(500);
  $('.hero-text').hide().delay(1500).fadeIn(800);
  $('.cta').hide().delay(1500).fadeIn(1000);
  
  
  