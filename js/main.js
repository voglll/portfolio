 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

$(document).ready(function($) {

	"use strict";

	$(window).stellar({
    responsive: false,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });

	// Scrollax
  $.Scrollax();


	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    dots: false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1,
	        nav:false
	      },
	      600:{
	        items:1,
	        nav:false
	      },
	      1000:{
	        items:1,
	        nav:false
	      }
	    }
	   });
	};
	carousel();

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var burgerMenu = function() {

		$('.js-colorlib-nav-toggle').on('click', function(event) {
			event.preventDefault();
			var $this = $(this);
			if( $('body').hasClass('menu-show') ) {
				$('body').removeClass('menu-show');
				$('#colorlib-main-nav > .js-colorlib-nav-toggle').removeClass('show');
			} else {
				$('body').addClass('menu-show');
				setTimeout(function(){
					$('#colorlib-main-nav > .js-colorlib-nav-toggle').addClass('show');
				}, 900);
			}
		})
	};
	burgerMenu();
	
	var counter = function() {
		
		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

   
   $('#appointment_date').datepicker({
	  'format': 'm/d/yyyy',
	  'autoclose': true
	});
	$('#appointment_time').timepicker();

    // This is the original progress bar function from your file, which works.
	var pageProgress = function() {
		$(window).scroll(function() {
	    var wintop = $(window).scrollTop(), docheight = $('.page').height(), winheight = $(window).height();
	    var totalScroll = (wintop/(docheight-winheight))*100;
	    $(".KW_progressBar").css("width",totalScroll+"%");
	  });

	};
	pageProgress();


});

// Hero text fade-in logic. This is correct.
document.addEventListener('DOMContentLoaded', () => {
	setTimeout(() => {
		const helloElement = document.getElementById('hello');
		if (helloElement) helloElement.style.opacity = 1;
	  }, 400);
  
	setTimeout(() => {
		const nameElement = document.getElementById('Name');
		if (nameElement) nameElement.style.opacity = 1;
	  }, 700);

	setTimeout(() => {
	  const lineElement = document.getElementById('line');
	  if (lineElement) lineElement.style.opacity = 1;
	}, 1000);

	setTimeout(() => {
		const buttonElement = document.getElementById('button');
		if (buttonElement) buttonElement.style.opacity = 1;
	  }, 1300);

	// Create scroll glow element for interactive background
	const scrollGlow = document.createElement('div');
	scrollGlow.className = 'scroll-glow';
	document.body.insertBefore(scrollGlow, document.body.firstChild);

	// Enhanced color palettes - more dramatic transitions with blues, teals, and purples
	const colorStops = [
		{ pos: 0, colors: ['#1a252f', '#2c3e50', '#34495e', '#2c3e50', '#1a252f'] },      // Dark industrial blue
		{ pos: 0.2, colors: ['#1a2d3d', '#234a5f', '#2d5a6f', '#234a5f', '#1a2d3d'] },    // Teal shift
		{ pos: 0.4, colors: ['#1e2a3a', '#2a3f55', '#354d65', '#2a3f55', '#1e2a3a'] },    // Steel blue
		{ pos: 0.6, colors: ['#1f2937', '#2d3a4a', '#3a485a', '#2d3a4a', '#1f2937'] },    // Cooler gray-blue
		{ pos: 0.8, colors: ['#1a2535', '#283545', '#354555', '#283545', '#1a2535'] },    // Deep blue-gray
		{ pos: 1, colors: ['#1a252f', '#2c3e50', '#34495e', '#2c3e50', '#1a252f'] }       // Back to start
	];

	// Interpolate between two colors
	function lerpColor(color1, color2, t) {
		const c1 = parseInt(color1.slice(1), 16);
		const c2 = parseInt(color2.slice(1), 16);
		const r1 = (c1 >> 16) & 0xff, g1 = (c1 >> 8) & 0xff, b1 = c1 & 0xff;
		const r2 = (c2 >> 16) & 0xff, g2 = (c2 >> 8) & 0xff, b2 = c2 & 0xff;
		const r = Math.round(r1 + (r2 - r1) * t);
		const g = Math.round(g1 + (g2 - g1) * t);
		const b = Math.round(b1 + (b2 - b1) * t);
		return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
	}

	// Get interpolated colors for scroll position
	function getColorsForScroll(scrollPercent) {
		let lower = colorStops[0], upper = colorStops[colorStops.length - 1];
		for (let i = 0; i < colorStops.length - 1; i++) {
			if (scrollPercent >= colorStops[i].pos && scrollPercent <= colorStops[i + 1].pos) {
				lower = colorStops[i];
				upper = colorStops[i + 1];
				break;
			}
		}
		const t = (scrollPercent - lower.pos) / (upper.pos - lower.pos || 1);
		return lower.colors.map((c, i) => lerpColor(c, upper.colors[i], t));
	}

	// Update background on scroll
	let ticking = false;
	window.addEventListener('scroll', () => {
		if (!ticking) {
			requestAnimationFrame(() => {
				const scrollTop = window.scrollY || document.documentElement.scrollTop;
				const docHeight = document.documentElement.scrollHeight - window.innerHeight;
				const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
				
				// Update CSS variables for gradient colors
				const colors = getColorsForScroll(scrollPercent);
				document.body.style.setProperty('--bg-color-1', colors[0]);
				document.body.style.setProperty('--bg-color-2', colors[1]);
				document.body.style.setProperty('--bg-color-3', colors[2]);
				document.body.style.setProperty('--bg-color-4', colors[3]);
				document.body.style.setProperty('--bg-color-5', colors[4]);
				
				// Enhanced glow movement - more dynamic with sine waves
				const glowY = 25 + scrollPercent * 50 + Math.sin(scrollPercent * Math.PI * 3) * 10;
				const glowX = 65 + Math.sin(scrollPercent * Math.PI * 2) * 25;
				const glowY2 = 75 - scrollPercent * 45 + Math.cos(scrollPercent * Math.PI * 4) * 8;
				const glowX2 = 25 + Math.cos(scrollPercent * Math.PI * 2.5) * 20;
				
				scrollGlow.style.setProperty('--glow-y', `${glowY}%`);
				scrollGlow.style.setProperty('--glow-x', `${glowX}%`);
				scrollGlow.style.setProperty('--glow-y2', `${glowY2}%`);
				scrollGlow.style.setProperty('--glow-x2', `${glowX2}%`);
				
				// Subtle glow intensity change based on scroll
				const glowOpacity = 0.35 + Math.sin(scrollPercent * Math.PI) * 0.15;
				scrollGlow.style.opacity = glowOpacity;
				
				ticking = false;
			});
			ticking = true;
		}
	});
});
