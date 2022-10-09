$(document).ready(function() {
	
	$(".processindex").hover(function() {
		$(this).css("background-color", "#0067a3");
		$(this).css("color", "white")
		$(this).css("cursor", "pointer");
	}, function() {
		$(this).css("background-color", "white");
		$(this).css("color", "#666")
		$(this).css("cursor", "auto");
	})
	
})