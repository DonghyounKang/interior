
//var mpPostTemplateSrc = $('#post-template').html();
//var mpPostCompile = Handlebars.compile(mpPostTemplateSrc);


$.getJSON(serverRoot + "/json/board/mpboard", (data) => {
	console.log(data);
	
	for (let item of data) {
		$('<a href="#">'+
	      '<div class="ib-mp-post">'+
	         '<img src="../../../files/board/'+ item.path +'_1000x1000.jpg" class="ib-mp-postimage" alt="게시물">' +
	         '<div class="ib-mp-icons">'+
	             '<div><i class="fas fa-heart"></i> '+ item.count +'</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
	             '<div><i class="fas fa-comment-dots"></i> '+ item.commtCnt +'</div>'+
	         '</div>'+
	      '</div>'+
		'</a>').appendTo(".ib-mp-pgroup");
	}
});



window.onload = function() {
	var divs = document.querySelectorAll('.ib-mp-post');
	for (var i = 0; i < divs.length; ++i) {
		var div = divs[i],
			divAspect = div.offsetHeight / div.offsetWidth;
		
		var img = div.querySelector('.ib-mp-postimage'),
			imgAspect = img.height / img.width;
		
		if (imgAspect <= divAspect) {
			// 이미지가 div보다 납작한 경우 세로를 div에 맞추고 가로는 잘라낸다
			var imgWidthActual = div.offsetHeight / imgAspect,
				imgWidthToBe = div.offsetHeight / divAspect,
				marginLeft = -Math.round((imgWidthActual - imgWidthToBe) / 2)
			img.style.cssText = 'width: auto; height: 100%; margin-left: '
				+ marginLeft + 'px;'
		} else {
			// 이미지가 div보다 길쭉한 경우 가로를 div에 맞추고 세로를 잘라낸다
			img.style.cssText = 'width: 100%; height: auto; margin-left: 0;';
		}
	}
}
