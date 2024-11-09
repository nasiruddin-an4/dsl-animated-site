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


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-primary shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('bg-primary shadow-sm').css('top', '-150px');
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        items: 3,          // Number of items to display
        loop: true,        // Enable looping
        autoplay: true,    // Enable autoplay
        margin: 20,        // Space between items (adjust as needed)
        dots: true,        // Show dots
        nav: false,        // Hide navigation arrows
        responsive: {
            0: {
                items: 1   // 1 item on small screens
            },
            768: {
                items: 2   // 2 items on medium screens
            },
            1024: {
                items: 3   // 3 items on larger screens
            }
        }
    });
    
})(jQuery);

