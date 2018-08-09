// 팝업
$(document).ready(function() {
	$(".mp-pic-focus").click(function() {
	    $(".mp-cover-popup").toggle();
	    $(".mp-pic-box").css("opacity","1");
	    $(".mp-photo-icon").css({
	    	"font-size": "1.5em",
	    	"padding": "0.23em 0.4em 0 0"
	    });
	});
	$(".mp-popup-hidden").click(function() {
	    $(".mp-cover-popup").css("display","none");
	});
	$(window).mousedown(function (e) {
		var popup = $(".mp-cover-popup");
		var focus = $(".mp-pic-focus");
		if (!popup.is(e.target) && popup.has(e.target).length === 0
				&&
			!focus.is(e.target) && focus.has(e.target).length === 0){
			popup.css("display","none");
			$(".mp-pic-box").css("opacity","0");
		    $(".mp-photo-icon").css({
		    	"font-size": "2.1em",
		    	"padding": "0"
		    });
		}
	});
	console.log(document.body.offsetWidth); 
	console.log(document.body.scrollWidth); // (문서 전체의 크기)
	console.log(document.body.clientWidth); // (창의 크기)

	console.log(window.innerWidth); // 브라우저 윈도우 두께를 제외한 실질적 가로 길이
	console.log(window.outerWidth); // 브라우저 윈도우 두께를 포함한 브라우저 전체 가로 길이
});


//Input을 버튼으로 클릭
$(document).ready(function() {
	var fileSelect = document.getElementById("fileSelect"),
		fileElem = document.getElementById("fileupload");
	
	fileSelect.addEventListener("click", function (e) {
	  if (fileElem) {
	    fileElem.click();
	  }
	}, false);
});

var imageData;

// cropit
$(function() {
	var $imageCropper = $('.image-editor'),
    	$imagePreview = $imageCropper.find('.cropit-preview'),
		$imageRemove = $imageCropper.find('.mp-cropit-cancel');
    	$imageApply = $imageCropper.find('.mp-cropit-apply'),
	
    $('.image-editor').cropit({ 
		imageState: {src: ''},
		width: $(window).width(),
		initialZoom: 'min',
		minZoom: 'fill',
		maxZoom: '5',
		allowDragNDrop: false,
		freeMove: false,
		onImageError: function() {
		    console.log("error");
		},
		onImageLoading: function() {
		/*$( window ).resize(function() {
				
			});*/
		        $(".mp-banner-image")
		        	.css({
		        		"z-index": "100",
		        		"opacity": "1"
		        	});
		        $(".cropit-preview")
		        	.css({
		        		"opacity": "1",
		        	});
		        $(".mp-slider")
		        	.css({
		        		"opacity": "1"
		        	});
		}
	});
	
	$imageRemove.on('click', function(e) {
        e.preventDefault();
        if ($imagePreview.hasClass('cropit-image-loaded')){
        	
        	$imagePreview.removeClass('cropit-image-loaded'); 
            $('input.cropit-image-input').val(''); 
//            $('.cropit-preview-image').removeAttr('style'); 
            $('.cropit-preview-image').attr('src','');
            $(".mp-banner-image")
	        	.css({
	        		"z-index": "-100",
	        		"opacity": "0",
	        	});
	        $(".cropit-preview")
	        	.css({
	        		"opacity": "0",
	        	});
	        $(".mp-slider")
	        	.css({
	        		"opacity": "0",
	        	});
        }
    });
	
	$imageApply.click(function() {
		imageData = $imageCropper.cropit('export',{
				type: 'image/jpeg',
				quality: '1',
				originalSize: false,
		});
		
		$('#imgsrc').text(imageData);
		window.open(imageData);
		console.log(imageData);
		
	});
	
});

//파일 업로드

//$('#fileupload').fileupload({
//	url: '../../../json/mpfile/upload',        // 서버에 요청할 URL
//	dataType: 'json',         // 서버가 보낸 응답이 JSON임을 지정하기
//	sequentialUploads: true,  // 여러 개의 파일을 업로드 할 때 순서대로 요청하기.
//	singleFileUploads: false, // 한 요청에 여러 개의 파일을 전송시키기.
//	autoUpload: false,
//	add: function (e, data) {// 각 파일에 대해 호출된다.
//		console.log('add()...');
//		console.log(data.files);
//		
///*		$('<img>')
//		.attr('src', '../files/' + data.result.filename)
//		.appendTo($("#mp-images-div"));
//		$('.mp-cropit-apply').click(function() {
//			data.submit(); // submit()을 호출하면, 서버에 데이터를 보내기 전에 submit 이벤트가 발생한다. // 해당 파일의 서버 전송을 시작한다.
//		});*/
//	},
//	
//	done: function (e, data) { // 서버에서 응답이 오면 호출된다. 각 파일 별로 호출된다.
//		console.log('done()...');
//		console.log(data.result);
//		$.each(data.result.files, function(index, file) {
//			$('<p/>').text(file.filename + " : " + file.filesize).appendTo(document.body);
//		});
//	}
//});  

