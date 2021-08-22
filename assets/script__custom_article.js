$(document).ready(function(){
	$(".sign-form input[type='text']").on("input" ,function(e){
		e.preventDefault();
		if ($(this).val().length != 0) {
			$('.sign-form>p').slideDown(250);
		} else{
			$('.sign-form>p').slideUp(250);
		}
	});
});