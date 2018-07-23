$("#sellerApplyBtn").click(() => {
	$.getJSON(serverRoot + "/json/auth/loginUser", (data) => {
		console.log(data)
		$.getJSON(serverRoot + "/json/workshop/isExist/" + data.no, (result) => {
			if (result) {  // 판매자 회원 신청 완료시
				window.alert("이미 판매자 신청을 완료한 상태입니다.");
			} else { // 판매자 회원이 아닐 경우
				location.href = "./workshop_sellerRequest.html?" + data.no;
			}
		})
	}).fail(() => {
		window.alert("로그인을 하십시오");
		location.href = serverRoot + "/interia/html/auth/login.html";
	});
});