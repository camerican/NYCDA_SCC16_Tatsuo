$(".image").attr("src", "olympic.png").click(function() {

	$(this).css("width", "300px");

});

$("#colorChange").hover(function() {

	$(this).css("color", "red");

});

$("#hide").hover(function() {
	$(this).hide();
});

$("#show").click(function() {
	$("#hide").show();
});

$('button[name="gold"]').click(function() {
	$("#gold").attr("src", "gold.jpeg").fadeIn(3000);
});

$('button[name="silver"]').click(function() {
	$("#silver").first().attr("src", "silver.jpeg").fadeIn(3000);
});

$('button[name="bronze"]').click(function() {
	$("#bronze").first().attr("src", "bronz.jpeg").fadeIn(3000);
});

$("#fadeOut").click(function() {
	$(".medal").fadeOut("fast");
});

$("#run").click(function() {

	$("#runner").animate({
		marginLeft:"500px"
	});

});