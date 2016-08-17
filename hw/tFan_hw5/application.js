$(document).ready(function() {

	$(".active-modal").click(function(e) {
		e.preventDefault();
		$("#modal-wrapper").css("display", "block");
		$("#modal").css("display", "block");
	});


	$(".button-link").click(function(){

		$("#modal").css("display", "none");
		$("#modal-wrapper").css("display", "none");		
	
	});

	$(".yes").click(function(){

		$("#modal").css("display", "none");
		$("#modal-wrapper").css("display", "none");	
	
	});

	$(".goToGoogle").click(function() {
		window.open("https://www.google.com", "_self");
	});

	$("#modal-wrapper").click(function() {
		$("#modal").css("display", "none");
		$("#modal-wrapper").css("display", "none");		
	
	});

});