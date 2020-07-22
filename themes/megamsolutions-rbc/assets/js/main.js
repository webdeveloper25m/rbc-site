// Preloader js    
$(window).on('load', function () {
	$('.preloader').fadeOut(100);
});

(function ($) {
	'use strict';

	// Sticky Menu
	$(window).scroll(function () {
		if ($('.header').offset().top > 40) {
			$('.header').addClass('header-bg');
		} else {
			$('.header').removeClass('header-bg');
		}
	});

	// Background-images
	$('[data-background]').each(function () {
		$(this).css({
			'background-image': 'url(' + $(this).data('background') + ')'
		});
	});

	// background color
	$('[data-color]').each(function () {
		$(this).css({
			'background-color': $(this).data('color')
		});
	});

	// progress bar
	$('[data-progress]').each(function () {
		$(this).css({
			'bottom': $(this).data('progress')
		});
	});


	// /* ########################################### /hero parallax ############################################## */

	var scene = document.getElementById('parallax');
	if (scene)
		var parallaxInstance = new Parallax(scene);

	// testimonial-slider
	$('.js-hero-slider').slick({
		dots: true,
		infinite: true,
		autoplaySpeed: 3500,
		slidesToShow: 1,
		fade: false,
		arrows: true,
		prevArrow: "<button type='button' class='carousel__prev'><i class='fas fa-chevron-left'></i></button>",
    nextArrow: "<button type='button' class='carousel__next'><i class='fas fa-chevron-right'></i></button>",
		autoplay: true,
		
		accessibility: true
	});


	// clients logo slider
	$('.client-logo-slider').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		dots: false,
		arrows: false,
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	// Shuffle js filter and masonry
	var containerEl = document.querySelector('.shuffle-wrapper');
	if (containerEl) {
		var Shuffle = window.Shuffle;
		var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
			itemSelector: '.shuffle-item',
			buffer: 1
		});

		jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
			var input = evt.currentTarget;
			if (input.checked) {
				myShuffle.filter(input.value);
			}
		});
	}



})(jQuery);