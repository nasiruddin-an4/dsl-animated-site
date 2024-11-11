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

    $(document).ready(function() {
        $('#navbarToggle').click(function() {
            // Toggle the visibility of the icons
            $('.navbar-toggler-icon').toggle();
            $('.close-icon').toggle();
        });
    
        // Optional: Reset icons when the navbar is collapsed (e.g., after a link is clicked)
        $('#navbarNav').on('hide.bs.collapse', function () {
            $('.navbar-toggler-icon').show();
            $('.close-icon').hide();
        });
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


    // app carousel
    $('.app-carousel').owlCarousel({
        items: 3,          // Default to 3 items for large screens
        loop: true,        // Enable looping
        autoplay: true,    // Enable autoplay
        margin: 20,        // Space between items
        dots: true,        // Show dots
        nav: false,        // Hide navigation arrows
        responsive: {
            0: {
                items: 1   // 1 item on small screens (e.g., mobile)
            },
            768: {
                items: 2   // 2 items on medium screens (e.g., tablets)
            },
            1024: {
                items: 3   // 3 items on larger screens (e.g., desktops)
            }
        }
    });


    // Clients Logo carousel
    $('.Clients-carousel').owlCarousel({
        items: 5,          // Default to 3 items for large screens
        loop: true,        // Enable looping
        autoplay: true,    // Enable autoplay
        margin: 20,        // Space between items
        dots: true,        // Show dots
        nav: false,        // Hide navigation arrows
        responsive: {
            0: {
                items: 3  // For small devices
              },
              768: {
                items: 3  // For medium devices (tablet)
              },
              1024: {
                items: 5  // For large devices (desktop)
            }
        }
    });
    

    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        items: 3,          // Default to 3 items for large screens
        loop: true,        // Enable looping
        autoplay: true,    // Enable autoplay
        margin: 20,        // Space between items
        dots: true,        // Show dots
        nav: false,        // Hide navigation arrows
        responsive: {
            0: {
                items: 1   // 1 item on small screens (e.g., mobile)
            },
            768: {
                items: 2   // 2 items on medium screens (e.g., tablets)
            },
            1024: {
                items: 3   // 3 items on larger screens (e.g., desktops)
            }
        }
    });
})(jQuery);

    // Counter Js
    (() => {
        const counter = document.querySelectorAll('.counter');
        // covert to array
        const array = Array.from(counter);
        // select array element
        array.map((item) => {
            // data layer
            let counterInnerText = item.textContent;

            let count = 1;
            let speed = item.dataset.speed / counterInnerText
            function counterUp() {
                item.textContent = count++
                if (counterInnerText < count) {
                    clearInterval(stop);
                }
            }
            const stop = setInterval(() => {
                counterUp();
            }, speed);
        })
    })()