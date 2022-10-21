$(document).ready(function() {

	var footerHeight = $("footer").css("height");
	
	$("#gotop").css("bottom", footerHeight);
	
	$(".processindex").hover(function() {
		$(this).css("background-color", "#0067a3");
		$(this).css("color", "white")
		$(this).css("cursor", "pointer");
	}, function() {
		$(this).css("background-color", "white");
		$(this).css("color", "#666")
		$(this).css("cursor", "auto");
	})
	
	$(".processindex a").click(function(e) {
		e.preventDefault();
	})
	
	$("#process-ulitem1").click(function() {
		location.href = '#p1'
	})
	
	$("#process-ulitem2").click(function() {
		location.href = '#p2'
	})
	
	$("#process-ulitem3").click(function() {
		location.href = '#p3'
	})
	
	$("#process-ulitem4").click(function() {
		location.href = '#p4'
	})
	
	$("#process-ulitem5").click(function() {
		location.href = '#p5'
	})
	
	$("#process-ulitem6").click(function() {
		location.href = '#p6'
	})
	
})