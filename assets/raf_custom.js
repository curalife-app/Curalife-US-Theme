'use strict';

function tabsProductPage() {
	jQuery('.product-page section.product .icons-wrapper').hide();
	jQuery('#tab-title-1').click(function () {
		jQuery('#tab1').fadeIn();
		jQuery('#tab2').fadeOut();
		jQuery(this).siblings('.separator').removeClass('right');
	});
	jQuery('#tab-title-2').click(function () {
		jQuery('#tab2').fadeIn();
		jQuery('#tab1').fadeOut();
		jQuery(this).siblings('.separator').addClass('right');
	});
}





let currIngIndex = 10;
//document.getElementsByTagName("html")[0].getAttribute("lang") === 'it-IT' ? currIngIndex = 9 : currIngIndex;

let maxIngs = 10;





function setMenuColor(scrollPos, changePos) {
	if (scrollPos > changePos) {
		jQuery('.product-page .product-menu').addClass('tur');
	} else {
		jQuery('.product-page .product-menu').removeClass('tur');
	}
}

// function setActiveProductMenu(scrollPos, offset) {
// 	if (jQuery('main').hasClass('product-page')) {
// 		let storyPos = jQuery('#story').offset().top;
// 		let productPos = jQuery('#product').offset().top;
// 		let ingredientsPos = jQuery('#ingredients').offset().top;
// 		let reviewsPos = jQuery('#reviews').offset().top;
// 		scrollPos += offset;
// 		jQuery('.product-menu .product-step').removeClass('active');
// 		if (scrollPos < productPos) {
// 			jQuery('.product-menu .product-step[data-section=story]').addClass('active');
// 		} else if (scrollPos < ingredientsPos) {
// 			jQuery('.product-menu .product-step[data-section=product]').addClass('active');
// 		} else if (scrollPos < reviewsPos) {
// 			jQuery('.product-menu .product-step[data-section=ingredients]').addClass('active');
// 		} else {
// 			jQuery('.product-menu .product-step[data-section=reviews]').addClass('active');
// 		}
// 	}
// }
function setActiveProductMenu(e, t) {
    if (jQuery("#curalin-type-2-diabetes-herbal-supplement").hasClass("curalin_template")) {
        jQuery("#story").offset().top, jQuery("#product").offset().top;
        let o = jQuery("#ingredients").offset().top,
            r = jQuery("#reviews").offset().top,
            p = jQuery("#product").offset().top,
            n = jQuery("#shopNow").offset().top;
      if(e < 120){
      	jQuery(".product-menu-wrapper").addClass("postop");
      }else{
      	jQuery(".product-menu-wrapper").removeClass("postop");
      }	
        e += t, jQuery(".product-menu .product-step").removeClass("active"), e < o ? (jQuery(".product-menu .product-step[data-section=product]").addClass("active"), jQuery(".product-menu-wrapper").removeClass("posAbs")) : e < r ? (jQuery(".product-menu .product-step[data-section=ingredients]").addClass("active"), jQuery(".product-menu-wrapper").removeClass("posAbs")) : e < n ? (jQuery(".product-menu .product-step[data-section=reviews]").addClass("active"), jQuery(".product-menu-wrapper").removeClass("posAbs")) : (jQuery(".product-menu .product-step[data-section=shopNow]").addClass("active"), jQuery(".product-menu-wrapper").addClass("posAbs"))
    }
}
setMenuColor(jQuery(window).scrollTop(), 350), setActiveProductMenu(jQuery(window).scrollTop(), 250);




jQuery( function( $ ) {

	$('.product-menu .product-step').click(function () {
		let section = $(this).attr('data-section');
		let scrollPos = $('#' + section).offset().top - 220;
		window.scrollTo({
			top: scrollPos,
			left: 0,
			behavior: 'smooth'
		})
	});

	jQuery(window).scroll(function () {
		setMenuColor($(window).scrollTop(), 340);
		setActiveProductMenu($(window).scrollTop(), 240);
	});
  
  


})


jQuery(function( $ ) {
	$('[data-read-more-holder]').on('click', function(e) {
		e.preventDefault()
		const totalitem = $(this).attr('data-totla');
		const curent = $(this).attr('data-first');
		const newCount = parseInt(curent) + 6;	
		$('section#scroll-community .community_grid .item.big').each(function() {
			const item = $(this).attr('data-index');
			if(newCount >= item){
				$(this).show();
			}
		});
		
		if (newCount >= totalitem) {
			$(this).hide();
		} else {			
			$(this).attr('data-first',newCount);
		}

	});
  	$('.arrow-scroll').click(function () {
		let section = $(this).attr('data-section');
		let scrollPos = $('#' + section).offset().top - 100;
		window.scrollTo({
			top: scrollPos,
			left: 0,
			behavior: 'smooth'
		})
	});
  	$('.community-grid_section .item.big .heart').click(function () {
		toggleHeart($(this));
	});  
 	 function toggleHeart(e) {
        e.toggleClass("active")
    }
  
  	
  
  
  
})
