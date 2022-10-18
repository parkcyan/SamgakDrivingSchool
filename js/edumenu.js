$(document).ready(function() {
	
	$("#edu").hover(function() {
		$("#header-edumenu").css("top", "80px");
	})
	
	$("#header-edumenu").mouseover(function() {
		$("#header-edumenu").css("top", "80px");
	})
	
	$("#header-edumenu").mouseleave(function() {
		setTimeout(function(){
			$("#header-edumenu").css("top", "30px");
		}, 1000)
	})
	
});