


// Initialize fullpage.
/* $(document).ready(function() {
  $('#fullpage').fullpage({
    menu: '#menu',
    anchors:['home', 'diensten', 'portfolio', 'over', 'contact', 'footer'],
    autoScrolling: false,
    fitToSection: false,
    paddingTop: '50px',
		fixedElements: '#menu',
    scrollBar: false
  });
}); */

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

window.sr = ScrollReveal();
sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
}, 200);
