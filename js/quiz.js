$(document).ready(function() {

var score = 0;

$('button').on('click', function() {
	if($(this).hasClass("true")) {
		$(this).removeClass("true").addClass("green");
		$(this).siblings("button").attr("disabled", "disabled");
		score++;
		document.getElementById("finalScore").innerHTML = "You scored " + score + "/10!";
	} 
	if ($(this).hasClass("false")) {
		$(this).removeClass("false").addClass("red");
		$(this).siblings("button").attr("disabled", "disabled");
	}
});

});
