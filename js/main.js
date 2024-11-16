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
        items: 5, // Number of items to show on large devices
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 3000, // Autoplay time in milliseconds
        responsive: {
            0: {
                items: 1 // Number of items to show on small devices
            },
            768: {
                items: 2 // Number of items to show on medium devices
            },
            1024: {
                items: 3 // Number of items to show on large devices
            }
        },
        dots: true,
        dotsEach: true // Enable dots for each item
    });


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        items: 5, // Number of items to show on large devices
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 3000, // Autoplay time in milliseconds
        responsive: {
            0: {
                items: 1 // Number of items to show on small devices
            },
            768: {
                items: 2 // Number of items to show on medium devices
            },
            1024: {
                items: 3 // Number of items to show on large devices
            }
        },
        dots: true,
        dotsEach: true // Enable dots for each item
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


    // For The Clients Logo Area
    const waveContent = document.getElementById("waveContent");

    const clone = waveContent.cloneNode(true);
    waveContent.parentNode.appendChild(clone);
    // For The Clients Logo Area

    // waveContentLeft-scrolling effect
    const waveContentLeft = document.getElementById("waveContentLeft");

    const cloneLeft = waveContentLeft.cloneNode(true);
    waveContentLeft.parentNode.appendChild(cloneLeft);

    // waveContentLeft-scrolling effect
    const waveContentRight = document.getElementById("waveContentRight");

    const cloneRight = waveContentRight.cloneNode(true);
    waveContentRight.parentNode.appendChild(cloneRight);





    // Get elements
const openSearch = document.getElementById("openSearch");
const closeSearch = document.getElementById("closeSearch");
const searchBox = document.getElementById("searchBox");

// Open search box
openSearch.addEventListener("click", () => {
    searchBox.style.display = "flex";
});

// Close search box
closeSearch.addEventListener("click", () => {
    searchBox.style.display = "none";
});

// Close search box when clicking outside (optional)
searchBox.addEventListener("click", (e) => {
    if (e.target === searchBox) {
        searchBox.style.display = "none";
    }
});
