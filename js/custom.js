/*global $, window*/


$(function () {
    'use strict';
    
    var
        
        navbar = $('nav'),
        navLinks = $('a');
    
    // Add The Active Class To The NavBar 
    
    
    navbar.find(navLinks).on('click', function () {
        
        navbar.find(navLinks).removeClass('main-color');
        
        $(this).addClass('main-color');
    });
    
    //Adjust The Body Padding-top For Navbar 

    // Scrolling To Elements 
    
    
    $('.navbar li a').click(function () {
        
        $('html, body').animate({
            
            scrollTop: $('#' + $(this).data('scroll')).offset().top - $('.navbar').height()
            
        }, 500);
         
    });
 
    //Sync Links 
    $(window).scroll(function () {
        
        $('.block').each(function () {
            
            if ($(window).scrollTop()  >= $(this).offset().top - $('.navbar').height() - 10) {
                
                navbar.find('a').removeClass('main-color');
                
                navbar.find('li a[data-scroll="' + $(this).attr('id') + '"]').addClass('main-color');
            }
        });
        
        if ($(window).scrollTop() >= $('.services').offset().top - $('.navbar').height()) {
            
            $('.arrow').fadeIn(500);
        } else {
            
            $('.arrow').fadeOut(500);
        }
            
    });
    
    //Adjust The Height Of Header 
    
    $('.header').height($(window).height());
    
    $('.header').css('padding-top', $('.navbar').height());
    
    
    //frequesntly ask question 
    
    
    $('.frequently-ask').click(function () {
        
        $(this).find('.fa-plus').toggleClass('rotate');
        $('.' + $(this).data('class')).slideToggle(500);
        $('.' + $(this).data('color')).toggleClass('main-color');
        $(window).console.log($(this).data('color'));
    });
    
    // Scroll To Top 
    
    
    
    $('.header .fa-arrow-up').click(function () {
        
        $('body, html').animate({
             
            scrollTop: 0
            
        }, 500);
    });
    
    //A djust The Flexslider 
    
    
    $('.flexslider').flexslider({
        animation: "fade",
        controlNav: true,
        slideshowSpeed: 5000
    });
    
    //sliderText.css('paddingTop', ($(window).height() - navbar.height() - sliderText.height()) / 2);

    /* Adjust Magnific Popup */

    $('.box').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled: true
        }
	// By defailt it looks for an image tag:
    });
    /*MagnificPopup
	var magnifPopup = function () {
		$('.box').magnificPopup({
            delegate: 'a',
			type: 'image',
			removalDelay: 300,
			mainClass: 'mfp-with-zoom',
			gallery: {
				enabled: true
			},
			zoom: {
				enabled: true, // By default it's false, so don't forget to enable it

				duration: 300, // duration of the effect, in milliseconds
				easing: 'ease-in-out', // CSS transition easing function

				// The "opener" function should return the element from which popup will be zoomed in
				// and to which popup will be scaled down
				// By defailt it looks for an image tag:
				opener: function (openerElement) {
				// openerElement is the element on which popup was initialized, in this case its <a> tag
				// you don't need to add "opener" option if this code matches your needs, it's defailt one.
				    return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}
		});
    };
    var magnifVideo = function() {
		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
	};
    magnifPopup();
    magnifVideo();*/
    /* 
.portfolio {
    padding:50px 0;
}
.portfolio .myHeader{
    font-size: 30px;
    font-weight: normal
    
}
.portfolio p {
    color: #333;
    line-height: 1.7
}
.portfolio .myHeader::after {
    
    position: static;
    margin: auto;
    margin-top: 25px;
}
.portfolio .row .box {
    float: left;
    width: 32.333333%;
    border-radius: 10px;
    margin-right: 1%;
    transition: .5s all ease-in-out
}
.portfolio .row .box img:hover{
    
    transform: scaleY(1.1);
}
.portfolio .row .box img {
    transition: 1s all ease-in-out;
    border-radius: 10px;
    box-shadow: -7px 7px 3px #CCC,
                7px -7px 3px #CCC;
    width: 100%;
    border: 1px solid #999
}
.portfolio .row .box .fa-plus{
    position: relative;
    top: 150px;
    color: #FFF
}
*/
});