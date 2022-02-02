// Index of jQuery Active Code

(function ($) {
    'use strict';

    var $window = $(window);
    var zero = 0;

    // :: 1.0 PRELOADER ACTIVE CODE
    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // :: 2.0 NAVIGATION MENU ACTIVE CODE
    function navMenu() {

        // MAIN MENU TOGGLER ICON (MOBILE SITE ONLY)
        $('[data-toggle="navbarToggler"]').click(function () {
            $('.navbar').toggleClass('active');
            $('body').toggleClass('canvas-open');
        });
        // MAIN MENU TOGGLER ICON
        $('.navbar-toggler').click(function () {
            $('.navbar-toggler-icon').toggleClass('active');
        });

        // NAVBAR STICKY
        var $stickyNav = $(".navbar-sticky");

        $(window).on("scroll load", function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 120) {
                $stickyNav.addClass("navbar-sticky-moved-up");
            } else {
                $stickyNav.removeClass("navbar-sticky-moved-up");
            }
            // apply transition
            if (scroll >= 250) {
                $stickyNav.addClass("navbar-sticky-transitioned");
            } else {
                $stickyNav.removeClass("navbar-sticky-transitioned");
            }
            // sticky on
            if (scroll >= 500) {
                $stickyNav.addClass("navbar-sticky-on");
            } else {
                $stickyNav.removeClass("navbar-sticky-on");
            }

        });
    }
    navMenu();

    // :: 3.0 SCROLL TO TOP ACTIVE CODE
    var offset = 300;
    var duration = 500;

    $window.on('scroll', function () {
        if ($(this).scrollTop() > offset) {
            $("#scrollUp").fadeIn(duration);
        } else {
            $("#scrollUp").fadeOut(duration);
        }
    });

    $("#scrollUp").on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, duration);
    });

    // :: 4.0 SCROLL LINK ACTIVE CODE
    var scrollLink = $('.scroll');

    // SCROLLSPY ACTIVE CODE
    $('body').scrollspy({
        target: '#appo-header'
    });

    // :: 5.0 SMOOTH SCROLLING ACTIVE CODE
    scrollLink.on('click', function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    // :: 6.0 AOS ACTIVE CODE
    AOS.init();

    // :: 7.0 PREVENT DEFAULT ACTIVE CODE
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // :: 8.0 Client SLIDER ACTIVE CODE
    $('.testi-box-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        smartSpeed: 2000,
        autoplay: false,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });

    $('.client-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        smartSpeed: 2000,
        autoplay: false,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            576: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 3,
                dots: true
            }
        }
    });

    // News SLIDER ACTIVE CODE
    $('.rooms-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        smartSpeed: 2000,
        autoplay: true,
        responsiveClass: true,
        autoplayTimeout: 4000,
        navText: ['<i class="icofont-thin-left"></i>', '<i class="icofont-thin-right"></i>'],
        responsive: {
            0: {
                items: 1,
                margin: 20
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3,
                margin: 20,
                nav: true
            }
        }
    });


    // :: 14.0 FANCYBOX IMAGE GALLERY
    $('[data-fancybox="images"]').fancybox({
        afterLoad: function (instance, current) {
            var pixelRatio = window.devicePixelRatio || 1;

            if (pixelRatio > 1.5) {
                current.width = current.width / pixelRatio;
                current.height = current.height / pixelRatio;
            }
        }
    });

    $('[data-fancybox]').fancybox({
        youtube: {
            controls: 0,
            showinfo: 0
        },
        vimeo: {
            color: 'f00'
        }
    });

    // :: 9.0 COUNTERUP ACTIVE CODE
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // :: 10.0 DATEPICKER ACTIVE CODE
    $('#datepicker').datepicker({

        weekStart: 1,

        daysOfWeekHighlighted: "6,0",

        autoclose: true,

        todayHighlight: true,

    });


    $('#datepicker2').datepicker({

        weekStart: 1,

        daysOfWeekHighlighted: "6,0",

        autoclose: true,

        todayHighlight: true,

    });

    $('#datepicker3').datepicker({

        weekStart: 1,

        daysOfWeekHighlighted: "6,0",

        autoclose: true,

        todayHighlight: true,

    });


    $('#datepicker4').datepicker({

        weekStart: 1,

        daysOfWeekHighlighted: "6,0",

        autoclose: true,

        todayHighlight: true,

    });
    
    // :: 11.0 NAV TAB HOVER CHANGE IMAGES CODE
    $(".nav-tab-link").hover(function(){
        $(this).tab("show")
    })

    // :: 12.0 CONTACT FORM ACTIVE CODE
    // Get the form.
    var form = $('#contact-form');
    // Get the messages div.
    var formMessages = $('.form-message');
    // Set up an event listener for the contact form.
    $(form).submit(function (e) {
        // Stop the browser from submitting the form.
        e.preventDefault();
        // Serialize the form data.
        var formData = $(form).serialize();
        // Submit the form using AJAX.
        $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
            .done(function (response) {
                // Make sure that the formMessages div has the 'success' class.
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');

                // Set the message text.
                $(formMessages).text(response);

                // Clear the form.
                $('#contact-form input,#contact-form textarea').val('');
            })
            .fail(function (data) {
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');

                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });
    });

}(jQuery));