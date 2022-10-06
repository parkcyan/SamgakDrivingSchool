$(document).ready(function() {
	
	$("#edu").hover(function() {
		$("#header-edumenu").css("top", "80px");
	})
	
	$("#header-edumenu").mouseleave(function() {
		$("#header-edumenu").css("top", "30px");
	})
	
});