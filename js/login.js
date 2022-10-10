$(document).ready(function() {
	
	$("#loginformbutton").click(function(e) {
		
		e.preventDefault();
		
		let acc = $("#loginaccount").val();
		let pass = $("#loginpass").val();
		
		if (acc == "admin" && pass == "admin") {
			alert("로그인되셨습니다.");
			location.href = 'index.html';
		} else {
			alert("등록번호, 또는 비밀번호가 잘못되었거나 없는 등록번호입니다.")
		}
		
	})
	
})