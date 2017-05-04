
$(document).on('click', 'a.page-scroll', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
});

$('body').scrollspy({
    target: '#navigation',
    offset: 54
});

// Make the navbar collapse when a link is clicked.
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

// Alter the navbar after scrolling past the landing page.
$(window).scroll(function() {
    if ($("#navigation").offset().top > 100) {
        $("#navigation").addClass("navbar-shrink");
    } else {
        $("#navigation").removeClass("navbar-shrink");
    }
});

function scaleGoogleMap() {
  var contactSection = $(".contact-page");
  var googleMap = $(".google-map");
  if (contactSection.width() >= 751) {
    googleMap.height(contactSection.height());
  }
  else {
    googleMap.height('300px');
  }
}

$(window).on('resize', scaleGoogleMap);
$(document).ready(scaleGoogleMap);



window.sr = ScrollReveal();

// Service icons.
sr.reveal('.service-box .icon-reveal', {
    viewOffset: { top: 80, right: 0, bottom: 0, left: 0 },
    duration: 600,
    reset: true,
    scale: 0.3,
    distance: '0px'
}, 200);

sr.reveal('.header-scroll-button .icon-reveal', {
    viewOffset: { top: 80, right: 0, bottom: 0, left: 0 },
    duration: 600,
    reset: true,
    scale: 0.3,
    distance: '0px'
}, 200);

sr.reveal('.sr-logo', {
  duration: 600,
  viewOffset: { top: 0, right: 0, bottom: 0, left: 20 }
}, 200);
