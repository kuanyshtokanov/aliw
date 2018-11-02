/*
* ----------------------------------------------------------------------------------------
Author       : MonisterThemes
Template Name: Unifox - OnePage Responsive Parallax
Version      : 1.0                                          
* ----------------------------------------------------------------------------------------
*/
(function($) {
    'use strict';

    jQuery(document).ready(function() {


        /*----------------------------------------------------*/
        /* Preloader 
		/*----------------------------------------------------*/

        var prealoaderOption = $(window);
        prealoaderOption.on("load", function() {
            var preloader = jQuery('.spinner');
            var preloaderArea = jQuery('.preloader-area');
            preloader.fadeOut();
            preloaderArea.delay(350).fadeOut('slow');
        });


        /*----------------------------------------------------*/
        /* MainMenu Bg Change 
		/*----------------------------------------------------*/

        var headertopoption = $(window);
        var headTop = $('.header-top-area');

        headertopoption.on('scroll', function() {
            if (headertopoption.scrollTop() > 200) {
                headTop.addClass('menu-strick-bg');
            } else {
                headTop.removeClass('menu-strick-bg');
            }
        });

        /*----------------------------------------------------*/
        /* Smooth Scroll 
		/*----------------------------------------------------*/

        $('a.smoth-scroll').on("click", function(e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });

        /*----------------------------------------------------*/
        /* MixitUp 
		/*----------------------------------------------------*/

        $('.portfolio-list').mixItUp();

        /*----------------------------------------------------*/
        /* parallax 
		/*----------------------------------------------------*/

        $(window).stellar({
            responsive: true,
            positionProperty: 'position',
            horizontalScrolling: false
        });

        /*----------------------------------------------------*/
        /* Particle  
		/*----------------------------------------------------*/

        $('.fullseen-particle').particleground({
            dotColor: '#ddd',
            lineColor: '#aaa',
        });

        /*----------------------------------------------------*/
        /* MagnificPopup 
		/*----------------------------------------------------*/

        $('.play-video').magnificPopup({
            type: 'iframe'
        });

        /*----------------------------------------------------*/
        /* Coming Soon 
		/*----------------------------------------------------*/

        var launchDay = new Date(2018, 12 - 1, 8);
        $('#timer').countdown({
            until: launchDay
        });

        /*----------------------------------------------------*/
        /* Team 
		/*----------------------------------------------------*/

        $(".team-list").owlCarousel({
            items: 4,
            autoPlay: true,
            navigation: false,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [980, 3],
            itemsTablet: [768, 2],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            pagination: true,
            autoHeight: true,
        });

        /*----------------------------------------------------*/
        /* Testimonial 
		/*----------------------------------------------------*/

        $(".testimonial-list").owlCarousel({
            items: 3,
            autoPlay: true,
            navigation: false,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [980, 2],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            pagination: true,
            autoHeight: true,
        });

        /*----------------------------------------------------*/
        /* FancyBox 
		/*----------------------------------------------------*/

        $("a.portfolio-popup").fancybox();

        /*----------------------------------------------------*/
        /* TwitterFeed 
		/*----------------------------------------------------*/

        $(".twitter-feed-list").owlCarousel({
            items: 1,
            autoPlay: true,
            navigation: false,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            pagination: true,
            autoHeight: true,
        });

        /*----------------------------------------------------*/
        /* Scroll spy
		/*----------------------------------------------------*/

        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });

        /*----------------------------------------------------*/
        /* CounterUp 
		/*----------------------------------------------------*/

        $(".counter-number").counterUp({
            time: 2000,
            delay: 10
        });

        /*----------------------------------------------------*/
        /* Hide Menu 
		/*----------------------------------------------------*/

        $(document).on('click', '.navbar-collapse.in', function(e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });

        /*----------------------------------------------------*/
        /* ScrollUp 
		/*----------------------------------------------------*/

        $(window).on("scroll", function() {
            if ($(this).scrollTop() > 250) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });
        $('.scroll-up').on("click", function() {
            $("html, body").animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        $( document ).ready(function() {
            scaleVideoContainer();
        
            initBannerVideoSize('.video-container .poster img');
            initBannerVideoSize('.video-container .filter');
            initBannerVideoSize('.video-container video');
        
            $(window).on('resize', function() {
              scaleVideoContainer();
              scaleBannerVideoSize('.video-container .poster img');
              scaleBannerVideoSize('.video-container .filter');
              scaleBannerVideoSize('.video-container video');
            });
          });
        
          function scaleVideoContainer() {
            var height = $(window).height() + 5;
            var unitHeight = parseInt(height) + 'px';
            $('.homepage-hero-module').css('height',unitHeight);
          }
        
          function initBannerVideoSize(element){
            $(element).each(function(){
              $(this).data('height', $(this).height());
              $(this).data('width', $(this).width());
            });
        
            scaleBannerVideoSize(element);
          }
        
          function scaleBannerVideoSize(element) {
        
            var windowWidth = $(window).width(),
            windowHeight = $(window).height() + 5,
            videoWidth,
            videoHeight;
        
            // console.log(windowHeight);
        
            $(element).each(function(){
              var videoAspectRatio = $(this).data('height')/$(this).data('width');
        
              $(this).width(windowWidth);
        
              if(windowWidth < 1000){
                  videoHeight = windowHeight;
                  videoWidth = videoHeight / videoAspectRatio;
                  $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});
        
                  $(this).width(videoWidth).height(videoHeight);
              }
        
              $('.homepage-hero-module .video-container video').addClass('fadeIn animated');
        
            });
          }
        

        /*----------------------------------------------------*/
        /* Google Map 
		/*----------------------------------------------------*/

        var contact = {
            "lat": "43.228890",
            "lon": "76.954202"
        }; //Change a map coordinate here!
        try {
            $('.map').gmap3({
                action: 'addMarker',
                latLng: [contact.lat, contact.lon],
                map: {
                    center: [contact.lat, contact.lon],
                    zoom: 14,
                    styles: [{
                        "featureType": "all",
                        "elementType": "all",
                        "stylers": [{
                            "visibility": "simplified"
                        }]
                    }, {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [{
                            "visibility": "on"
                        }, {
                            "hue": "#ff0000"
                        }]
                    }]

                },
            }, {
                action: 'setOptions',
                args: [{
                    scrollwheel: false
                }]
            });
        } catch (err) {}

    });

})(jQuery);