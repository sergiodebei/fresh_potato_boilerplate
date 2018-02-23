$( document ).ready(function() {

  // console.log('ready');

    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').stop().animate({
                scrollTop: target.offset().top - 100
              }, 1000);
              return false;
            }
          }
        });
    });
  
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 50,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 400,
    //grab the "back to top" link
    $back_to_top = $('.cd__top');

    function checkOffset() {
      if($('.flying').offset().top + $('.flying').height() >= $('footer').offset().top)
          $('.flying').css({position:'absolute', right: '20px', bottom: $('footer').height() + 'px'});
      if($(document).scrollTop() + window.innerHeight < $('footer').offset().top)
          $('.flying').css({position:'fixed', right: '20px', bottom: '20px'}); 
          // restore when you scroll up
    }

    //hide or show the "back to top" link
    $(window).scroll(function(){
      checkOffset();
      ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd__is-visible') : $back_to_top.removeClass('cd__is-visible cd__fade-out');
      if( $(this).scrollTop() > offset_opacity ) { 
          $back_to_top.addClass('cd__fade-out');
      }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event){
      event.preventDefault();
      $('body,html').animate({
          scrollTop: 0 ,
          }, scroll_top_duration
      );
    });

    //hamburger menu
    $('.hamburger-menu, .bodyoverlay').on('click', function() {
        $('.bar').toggleClass('animate');
        $('nav').toggleClass('visible');
        $('.bodyoverlay').toggleClass('cover-bg');
    });

    //adding class to menu items
    $(".menu-item").click(function() {
        $('.menu-item').not(this).removeClass('active');
        $(this).addClass('active');
    });

    //Highlight Menu Item when Scrolling Down to Section
    $(window).scroll(function() {
        var position = $(this).scrollTop();

        $('section').each(function() {
            var target = $(this).offset().top;
            var id = $(this).attr('id');

            if (position >= target) {
              $('nav > ul > li').removeClass('active');
              $('nav > ul > li > a[href=#' + id + ']').parent().addClass('active');
            }
        });
    });

});

