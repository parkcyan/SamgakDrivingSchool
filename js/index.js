$(document).ready(function() {
	
	const call = "01049230191";
	
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
	
	function preload(imagesArray) {
		let n = imagesArray.length;
		for (let i = 0; i < n; i++) {
			let img = new Image();
			img.src = imagesArray[i];
		}
	}
	
	preload([url + "index2.webp", url + "index3.webp"]);
	
	setInterval(function() {
		if (mainarticleimg == 0) {
			$("#indextoparticle").css("background-image", "url(" + url + "index2.webp");
			mainarticleimg++;
		} else if (mainarticleimg == 1) {
			$("#indextoparticle").css("background-image", "url(" + url + "index3.webp");
			mainarticleimg++;
		} else if (mainarticleimg == 2) {
			$("#indextoparticle").css("background-image", "url(" + url + "index.webp");
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
	
	$(".main2-topdivitem").hover(function() {
		$(this).css("background-color", "black");
		$(this).css("color", "white");
		$(this).children('img').css("filter", "invert(100%)");
		$(this).css("cursor", "pointer");
	}, function() {
		$(this).css("background-color", "transparent");
		$(this).css("color", "black");
		$(this).children('img').css("filter", "none");
		$(this).css("cursor", "auto");
	})
	
	$("#main2-topdivitem1").click(function() {
		location.href = 'expense.html'
	})
	
	$("#main2-topdivitem2").click(function() {
		location.href = 'course.html'
	})
	
	$("#main2-topdivitem3").click(function() {
		alert("서비스 점검중입니다.");
		//location.href = '.html'
	})
	
	$("#main2-rightdiv div").hover(function(){
		$(this).css("filter", "brightness(85%) drop-shadow(2px 4px 6px black)");
		$(this).css("cursor", "pointer");
	}, function() {
		$(this).css("filter", "brightness(100%) drop-shadow(2px 4px 6px black)");
		$(this).css("cursor", "auto");
	})
	
	$("#main2-rightdivitem1").click(function() {
		alert("서비스 점검중입니다.");
	})
	
	$("#main2-rightdivitem2").click(function() {
		alert("서비스 점검중입니다.");
	})
	
	$("#main2-rightdivitem3").click(function() {
		alert("서비스 점검중입니다.");
	})
	
	$("#main2-rightdivitem4").click(function() {
		location.href = "tel:" + call;
	})
	
})