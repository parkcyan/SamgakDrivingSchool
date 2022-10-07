$(document).ready(function() {
	
	$(".notitest").click(function(e) {
		e.preventDefault();
		alert("서비스 점검중입니다.");
	});
	
	setTimeout(function() {
		$("#main-leftdivp1").css("transition", "all 0.5s");
		$("#main-leftdivp1").css("opacity", "100%");
	}, 500)
	
	setTimeout(function() {
		$("#main-leftdivp2").css("transition", "all 0.5s");
		$("#main-leftdivp2").css("opacity", "100%");
	}, 1000)
	
	setTimeout(function() {
		$("#main-leftdivp3").css("transition", "all 0.5s");
		$("#main-leftdivp3").css("opacity", "100%");
	}, 1500)
	
	setTimeout(function() {
		$("#main-leftdivp4").css("transition", "all 0.5s");
		$("#main-leftdivp4").css("opacity", "100%");
	}, 2000)
	
	let mainarticleimg = 0;
	let url = window.location.href.replace('/index.html', '') + '/images/';
	
	setInterval(function() {
		if (mainarticleimg == 0) {
			$("#mainarticle").css("background-image", "url(" + url + "index2.webp");
			mainarticleimg++;
		} else if (mainarticleimg == 1) {
			$("#mainarticle").css("background-image", "url(" + url + "index3.webp");
			mainarticleimg++;
		} else if (mainarticleimg == 2) {
			$("#mainarticle").css("background-image", "url(" + url + "index.webp");
			mainarticleimg++;
		}
		if (mainarticleimg == 3) mainarticleimg = 0;
	}, 4000)  
	
	$(".main-rightdivitem").hover(function(){
		$(this).css("background-color", "rgb(0, 103, 163, 0.5)");
		$(this).css("cursor", "pointer");
	}, function() {
		$(this).css("background-color", "inherit");
		$(this).css("cursor", "auto");
	})
	
	$("#main-rightdivitem1").click(function(){
		location.href = 'intro.html'
	})
	
	$("#main-rightdivitem2").click(function(){
		location.href = 'process.html'
	})
	
	$("#main-rightdivitem3").click(function(){
		location.href = 'shuttle.html'
	})
	
	$("#main2-rightdiv div").hover(function(){
		$(this).css("filter", "brightness(85%) drop-shadow(2px 4px 6px black)");
		$(this).css("cursor", "pointer");
	}, function() {
		$(this).css("filter", "brightness(100%) drop-shadow(2px 4px 6px black)");
		$(this).css("cursor", "pointer");
	})
	
	$("#main2-rightdiv div").click(function() {
		alert("서비스 점검중입니다.");
	})
	
})