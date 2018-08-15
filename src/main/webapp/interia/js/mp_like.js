$.getJSON("../../../json/mylike/list", (data) => {
	for (let item of data) {
		$('<a onclick="mkmodal('+ item.BNO +')" href="#myModal" data-toggle="modal">'+
			'<div class="ib-mp-post">'+
				'<img src="../../images/sns/'+ item.PATH +'" alt="게시물">'+
				'<div class="ib-mp-icons post_like_count'+ item.BNO +'"></div>'+
			'</div>'+	
		  '</a>').appendTo('.ib-mp-pgroup');
		$.getJSON("../../../json/mylike/likeCount"+item.BNO, (data) => {
			$('<div style="padding-right: 10px;"><i class="fas fa-heart"></i> '+ data.count +'</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;').appendTo(".post_like_count"+ item.BNO);
			$.getJSON("../../../json/mylike/commentCount"+item.BNO, (data) => {
				$('<div><i class="fas fa-comment-dots"></i> '+ data.count +'</div>').appendTo(".post_like_count"+ item.BNO);
			});
		});
		
	}
});


// 좋아요한 개수
$.getJSON(serverRoot + "/json/mylike/mpLikeCnt", (data) => {
	console.log(data);
	$('<span class="ib-mp-pnum">' + data + '<span>').appendTo(".ib-mp-titl > p");
});






























/*끝 */