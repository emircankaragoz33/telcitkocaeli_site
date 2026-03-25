(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Top contact marquee (shared across pages)
    if ($('.nav-bar').length && $('.top-contact-bar').length === 0) {
        var topContactBar = '' +
            '<div class="top-contact-bar">' +
            '<marquee behavior="scroll" direction="left" scrollamount="5">' +
            '<i class="fas fa-phone-alt me-1"></i> 0 542 415 95 62 &nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp; ' +
            '<i class="fas fa-envelope me-1"></i> guclucit@gmail.com' +
            '</marquee>' +
            '</div>';

        $('.nav-bar').first().before(topContactBar);
    }


    // Sticky Navbar + Back to top (single throttled handler)
    var $navBar = $('.nav-bar');
    var $backToTop = $('.back-to-top');
    var ticking = false;

    $(window).on('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(function () {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                if (scrollTop > 45) {
                    $navBar.addClass('sticky-top');
                } else {
                    $navBar.removeClass('sticky-top');
                }
                if ($backToTop.length) {
                    if (scrollTop > 300) {
                        $backToTop.fadeIn('slow');
                    } else {
                        $backToTop.fadeOut('slow');
                    }
                }
                ticking = false;
            });
            ticking = true;
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });

    // Reference logos carousel
    $(".reference-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 800,
        margin: 24,
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:4
            }
        }
    });
    
})(jQuery);

