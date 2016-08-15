$(".image").attr("src", "olympic.png").click(function() {

	$(this).css("width", "200px");

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
	$(".medal").attr("src", "gold.jpeg").fadeIn(4000);
});

$("#fadeOut").click(function() {
	$(".medal").fadeOut("fast");
});