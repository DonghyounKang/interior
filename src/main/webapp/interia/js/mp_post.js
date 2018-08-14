
var mpPostTemplateSrc = $('#post-template').html();
var mpPostCompile = Handlebars.compile(mpPostTemplateSrc);


$.getJSON(serverRoot + "/json/board/mpboard", (data) => {
	console.log(data);

	$(".ib-mp-pgroup").append(mpPostCompile({list:data}))
});

window.onload = function() {
	var div = document.querySelector('.ib-mp-post');
	var divAspect = div.offsetHeight / div.offsetWidth;
	    
    var img = div.querySelector('.ib-mp-postimage');
    var imgAspect = img.height / img.width;

    if (imgAspect <= divAspect) {
      // 이미지가 div보다 납작한 경우 세로를 div에 맞추고 가로는 잘라낸다
      var imgWidthActual = div.offsetHeight / imgAspect;
      var imgWidthToBe = div.offsetHeight / divAspect;
      var marginLeft = -Math.round((imgWidthActual - imgWidthToBe) / 2)
      img.style.cssText = 'width: auto; height: 100%; margin-left: '
                      + marginLeft + 'px;'
    } else {
      // 이미지가 div보다 길쭉한 경우 가로를 div에 맞추고 세로를 잘라낸다
      img.style.cssText = 'width: 100%; height: auto; margin-left: 0;';
    }
}
