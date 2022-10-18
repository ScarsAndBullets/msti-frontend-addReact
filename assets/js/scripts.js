/*
* ----------------------------------------------------------------------------------------
Author       : themepoke
Template Name: NASTRO - Onepage Business Template
Version      : 1.0
* ----------------------------------------------------------------------------------------
*/
(function ($) {
    'use strict';

    jQuery(document).ready(function () {

        /*START PRELOADED*/
        $(window).on('load', function () {
            $('.preloader').fadeOut();
            $('.preloader-area').delay(350).fadeOut('slow');
        });
        /*END PRELOADED*/

        /*START MAGNIFICENT POPUP JS*/
        $('.work-popup').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
        /*END MAGNIFICENT POPUP JS*/

        /*START WELCOME SLIDE CAROUSEL*/
        $("#welcome-slide-carousel").owlCarousel({
            items: 1,
            loop: true,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            freeDrag: false,
            // autoWidth: true,
            navigation: true,
            nav: true,
            // navElement: ['<a class="left welcome-control owl-prev" href="#welcome-slide-carousel" role="button" data-slide="prev"><i class="fa fa-angle-left"></i></a>','<a class="right welcome-control owl-next" href="#welcome-slide-carousel" role="button" data-slide="next"><i class="fa fa-angle-right"></i></a>'],
            rewind: false,
            // lazyLoadEager: 1,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeout: 5000,
            slideSpeed : 300,
            paginationSpeed: 400,
            itemsDesktop : false,
            itemsDesktopSmall : false,
            itemsTablet: false,
            itemsMobile : false
        });
        /*END WELCOME SLIDE CAROUSEL*/

        /*START TESTMONIAL JS*/
        $(".testimonial-list").owlCarousel({
            items: 1,
            autoPlay: true,
            navigation: false,
            theme: "tp-round-button",
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            autoHeight: true,
            pagination: true,
        });
        /*END TESTMONIAL JS*/

        /*COUNTER UP JS*/
        $(".counter-number").counterUp({
            time: 2000,
            delay: 10
        });
        /*COUNTER UP JS*/

        /*START WORK JS*/
        $('.work-inner').mixItUp();
        /*END WORK JS*/

        /*START MENU HIDE*/
        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        /*END MENU HIDE*/

        /*START BOOTSTRAP SCROLL-SPY*/
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });
        /*END BOOTSTRAP SCROLL-SPY*/

        /*START CHANGE MENU BACKGROUND JS*/
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 200) {
                $('.header-top-area').addClass('menu-bg');
            } else {
                $('.header-top-area').removeClass('menu-bg');
            }
        });
        /*END CHANGE MENU BACKGROUND JS*/

        /*START SMOOTH SCROLL JS*/
        $('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 60
            }, 1000);
            e.preventDefault();
        });
        /*END SMOOTH SCROLL JS*/

        /*START CONTACT MAP JS*/
        var contact = {
            "lat": "38.862270",
            "lon": "-77.330790"
        }; //Change a map coordinate here!
        try {
            $('.map').gmap3({
                action: 'addMarker',
                latLng: [contact.lat, contact.lon],
                map: {
                    center: [contact.lat, contact.lon],
                    zoom: 5
                },
            }, {
                action: 'setOptions',
                args: [{
                    scrollwheel: false
                }]
            });
        } catch (err) { }
        /*END CONTACT MAP JS*/

        /*START SCROLL TO UP*/
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 500) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });
        $('.scrollup').on("click", function () {
            $("html, body").animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        /*END SCROLL TO UP*/

        $('.project-complete-area').hide();
        $('.our-pricing-area').hide();

    });

})(jQuery);