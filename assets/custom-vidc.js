$(document).ready(function(){
	$('#order-top-section .instant ul.off-price li').on('click',function(e) { 
      e.preventDefault();      
      var _regular_price = $(this).attr('data-regular-price');      
      var _instant_saving = $(this).attr('data-instant-saving');
      var _sale_price = $(this).attr('data-sale-price');
      var _product_short = $(this).attr('data-pack');
      $('#order-top-section .instant').find('li').removeClass('active');
      $(this).addClass('active');
      var txt_value = $(this).find('h3').text();
      var detail = $('#order-top-section div[data-detail]'); 
	
      if(_instant_saving){
      	detail.html('<b>'+_product_short+'</b><h4>Regular Price: <del>' + _regular_price + '</del></h4><h5>Instant Savings: ' + _instant_saving + '</h5><h6>' + _sale_price + '</h6>');
      }else{
      	detail.html('<b>'+_product_short+'</b><h4></h4><h5></h5><h6>' + _sale_price + '</h6>');
      }      

      var curalin_url = $(this).attr('data-link');      
      $('#order-top-section .buy_btn a').attr('href',curalin_url);  

  });
  $('#ordernowdesk .instant ul.off-price li').on('click',function(e) { 
      e.preventDefault();      
      var _regular_price = $(this).attr('data-regular-price');      
      var _instant_saving = $(this).attr('data-instant-saving');
      var _sale_price = $(this).attr('data-sale-price');
      var _product_short = $(this).attr('data-pack');
      $('#ordernowdesk .instant').find('li').removeClass('active');
      $(this).addClass('active');
      var txt_value = $(this).find('h3').text();
      var detail = $('#ordernowdesk div[data-detail]'); 
	
      if(_instant_saving){
      	detail.html('<b>'+_product_short+'</b><h4>Regular Price: <del>' + _regular_price + '</del></h4><h5>Instant Savings: ' + _instant_saving + '</h5><h6>' + _sale_price + '</h6>');
      }else{
      	detail.html('<b>'+_product_short+'</b><h4></h4><h5></h5><h6>' + _sale_price + '</h6>');
      }      

      var curalin_url = $(this).attr('data-link');      
      $('#ordernowdesk .buy_btn a').attr('href',curalin_url);  

  });
  
  $('.couldit_slider').slick({
      dots: false,
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
  });
  
  $('.ingredient_slider').slick({
      dots: false,
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
  });

  $(".ques_heading h3").click(function(e) {
      $(this).next(".question-ans").slideToggle('');
      $(this).toggleClass("minus-btn");
      $(this).parent().toggleClass("bg_color_yellow");
  });
 


  $(".orderCuraLin").click(function(e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $("#ordernowdesk").offset().top
      }, 2000);
  });
  $(".orderCuraLinMbl").click(function(e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $("#packagedivmbl").offset().top
      }, 2000);
  });
	
  $(".order-buttden.scrollto").click(function(e) {
      e.preventDefault();
      var target = $(this).attr('href');	
      $('html, body').animate({
          scrollTop: $(target).offset().top
      }, 2000);
  });
  
});



