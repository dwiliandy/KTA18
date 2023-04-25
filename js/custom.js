(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.load').fadeOut(2000); // set duration in brackets    
    });


    // MENU
    $('.menu-burger').on('click', function() {
      $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
      $('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
    });


    // ABOUT SLIDER
    // $('body').vegas({
    //     slides: [
    //         { src: 'images/slide.jpg' }
    //     ],
    //     timer: false,
    //     transition: [ 'zoomOut', ]
    // });

})(jQuery);
