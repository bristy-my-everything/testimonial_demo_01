/***************************************************
==================== JS INDEX ======================
****************************************************
01. Avoid console errors in browsers
02. ScrollToTop Js
03. Smooth Scroll
04. WOW Js
05. Sticky Js
06. Menu for Mobile
07. Nice Scroll
08. Preloader Js
****************************************************/



(function ($) {
  "use strict";


  ////////////////////////////////////////////////////
  // 01. Avoid console errors in browsers
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});
  while (length--) {
    method = methods[length];
    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  };


  ////////////////////////////////////////////////////
  // 02. ScrollToTop Js
  //Check to see if the window is top if not then display button
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 500) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });
  //Click event to scroll to top
  $('.scrollToTop').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });


  ////////////////////////////////////////////////////
  // 03. Smooth Scroll
  $('a.smooth-scroll').on('click', function (event) {
    event.preventDefault();
    var section_smooth = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(section_smooth).offset().top // - 64 (navbar2 needed)
    }, 1250, 'easeInOutExpo');
  });


  ////////////////////////////////////////////////////
  // 04. WOW Js
  new WOW().init();


  ////////////////////////////////////////////////////
  // 05. Sticky Js
  $(".oilymenu").sticky({
    topSpacing: 0
  });


  ////////////////////////////////////////////////////
  // 06. Menu for Mobile
  $('#menu').slicknav({
    'label': '',
    'closedSymbol': '&#10010;',
    'openedSymbol': '&#9866;',
    'appendTo': '.oilymenu-mobile'
    // 'prependTo' : '.oilymenu4'
  });


  ////////////////////////////////////////////////////
  // 07. Nice Scroll
  if (screen.width >= 992) {
    $("body").niceScroll({
      cursorcolor: "#3F3F3F",
      cursorborder: "0px",
      cursorwidth: "10px",
      cursorborderradius: "3px",
      mousescrollstep: 40,
      zindex: "auto" | [99999999],
      background: "#f1f1f1"
    });
  };


  ////////////////////////////////////////////////////
  // OwlCarousel for team, service, testimonials
  $(function () {
    $('.testimonial__body').owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 8000,
      smartSpeed: 2500,
      autoplayHoverPause: true,
      margin: 20,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        480: {
          items: 1
        },
        992: {
          items: 2
        },
        1000: {
          items: 2
        }
      }
    });
  });



})(jQuery);





//////////////////////////////////////////////////////
// window load function
(function ($) {
  "use strict";
  $(window).on("load", function () {

    //////////////////////////////////////////////////////
    // 08. Preloader Js
    $(".loader").delay(350).fadeOut('slow');

  });
})(jQuery);










//////////////////////////////////////////////////////
// new document ready function
// (function ($) {
//   "use strict";
// })(jQuery);

//////////////////////////////////////////////////////
// waypoint
// (function ($) {
//   "use strict";
//   $("#prog-bar").waypoint(function () {
//     // Your code will be go here
//   }, {
//     offset: 'bottom-in-view'
//   });
// })(jQuery);

//////////////////////////////////////////////////////
// old document ready function (Place not use it)
// $(document).ready(function () {
//   'use strict';
// });

//////////////////////////////////////////////////////
// window load function
// (function ($) {
//   "use strict";
//   $(window).on("load", function () {
//   });
// })(jQuery);