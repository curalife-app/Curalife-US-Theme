jQuery(document).ready(function(){
	jQuery('#order-top-section .instant ul.off-price li').on('click',function(e) { 
      e.preventDefault();      
      var _regular_price = jQuery(this).attr('data-regular-price');      
      var _instant_saving = jQuery(this).attr('data-instant-saving');
      var _sale_price = jQuery(this).attr('data-sale-price');
      var _product_short = jQuery(this).attr('data-pack');
      jQuery('#order-top-section .instant').find('li').removeClass('active');
      jQuery(this).addClass('active');
      var txt_value = jQuery(this).find('h3').text();
      var detail = jQuery('#order-top-section div[data-detail]'); 
	
      if(_instant_saving){
      	detail.html('<b>'+_product_short+'</b><h4>Regular Price: <del>' + _regular_price + '</del></h4><h5>Instant Savings: ' + _instant_saving + '</h5><h6>' + _sale_price + '</h6>');
      }else{
      	detail.html('<b>'+_product_short+'</b><h4></h4><h5></h5><h6>' + _sale_price + '</h6>');
      }      

      var curalin_url = jQuery(this).attr('data-link');      
      jQuery('#order-top-section .buy_btn a').attr('href',curalin_url);  

  });
  jQuery('#ordernowdesk .instant ul.off-price li').on('click',function(e) { 
      e.preventDefault();      
      var _regular_price = jQuery(this).attr('data-regular-price');      
      var _instant_saving = jQuery(this).attr('data-instant-saving');
      var _sale_price = jQuery(this).attr('data-sale-price');
      var _product_short = jQuery(this).attr('data-pack');
      jQuery('#ordernowdesk .instant').find('li').removeClass('active');
      jQuery(this).addClass('active');
      var txt_value = jQuery(this).find('h3').text();
      var detail = jQuery('#ordernowdesk div[data-detail]'); 
	
      if(_instant_saving){
      	detail.html('<b>'+_product_short+'</b><h4>Regular Price: <del>' + _regular_price + '</del></h4><h5>Instant Savings: ' + _instant_saving + '</h5><h6>' + _sale_price + '</h6>');
      }else{
      	detail.html('<b>'+_product_short+'</b><h4></h4><h5></h5><h6>' + _sale_price + '</h6>');
      }      

      var curalin_url = jQuery(this).attr('data-link');      
      jQuery('#ordernowdesk .buy_btn a').attr('href',curalin_url);  

  });
  
  jQuery('.couldit_slider').slick({
      dots: false,
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
  });
  
  jQuery('.ingredient_slider').slick({
      dots: false,
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
  });

  jQuery(".ques_heading h3").click(function(e) {
      jQuery(this).next(".question-ans").slideToggle('');
      jQuery(this).toggleClass("minus-btn");
      jQuery(this).parent().toggleClass("bg_color_yellow");
  });
 


  jQuery(".orderCuraLin").click(function(e) {
      e.preventDefault();
      jQuery('html, body').animate({
          scrollTop: jQuery("#ordernowdesk").offset().top
      }, 2000);
  });
  jQuery(".orderCuraLinMbl").click(function(e) {
      e.preventDefault();
      jQuery('html, body').animate({
          scrollTop: jQuery("#packagedivmbl").offset().top
      }, 2000);
  });
	
  jQuery(".order-buttden.scrollto").click(function(e) {
      e.preventDefault();
      var target = jQuery(this).attr('href');	
      jQuery('html, body').animate({
          scrollTop: jQuery(target).offset().top
      }, 2000);
  });
  
});



