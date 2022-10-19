$(document).ready(function() {
	
	let isEduMenuOpen = false;
	
	$("#edu").click(function(e) {
		e.preventDefault();
		
		if (!isEduMenuOpen) {
			$("#header-edumenu").css("top", "80px");
			isEduMenuOpen = true
		}
		else {
			$("#header-edumenu").css("top", "30px");
			isEduMenuOpen = false;
		}
	})

});