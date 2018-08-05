//button 클릭시 파일 첨부	
"use strict"
var userNo;
var adClassData = $('.ad-works-data');
var adClassEnrollBtn = $('.ad-works-enroll');
var adClassWrapperTemplateSrc = $('#ad-class-wrapper-template').html();
var adClassWrapperTemplate = Handlebars.compile(adClassWrapperTemplateSrc);

/*button 클릭시 파일 첨부 */	
$(function () {
	$('#imgUpload').click(function (e) {
		e.preventDefault();
		$('#fileupload').click();
	});
});

$.getJSON(serverRoot + "/json/auth/loginUser", (data) => {
	//공방번호(사용자번호(PK))
	userNo = data.no;
	
	/* list */
	$.getJSON(serverRoot + "/json/wsav/adminList",{"no":userNo}, (data) => {
		console.log(userNo);
		console.log(data);
		for (var item of data) {
			var date = new Date(item.actdt);
			item.year = date.getFullYear();
			item.month = date.getMonth() + 1;
			item.day = date.getDate();
			var str = item.time.split(":");
			item.hour = str[0];
			item.minute = str[1];
		}
		$(adClassWrapperTemplate({list: data})).appendTo(adClassData);
	});
});

/* view */
adClassData.on('click', '.ad-class-card-update', function(e) {
	var no = $(e.target).attr('data-wsano');
	$.getJSON(serverRoot + "/json/wsav/" + no, (data) => {
		console.log(data);
		$(acnm).val(data.title);
        $(minno).val(data.minPerson);
        $(maxno).val(data.maxPerson);
        $(actdt).val(data.experDate);
        $(avst).val(data.startTime);
        $(avet).val(data.endTime);
        $(mtrls).val(data.prepareCont);
        $(apric).val(data.price);
        $(accnt).val(data.content);
        $(wsano).val(data.no);
	});
	
	adClassEnrollBtn.trigger('click', ['update']);
});

/*
$('#classAddModal').on('shown.bs.modal', function () {
  alert('okok')
}); */

$('#ad-class-addForm').click(function(e, action) {
	if (action === 'update') {
		console.log(action);
		$('#fileupload').fileupload('option', 'url', '../../../json/wsav/update');
		$('.modal-title').text("체험수정");
		$('#addBtn').attr("id","updBtn");
		$('#updBtn').text("수정하기");
	} else {
		$('#fileupload').fileupload('option', 'url', '../../../json/wsav/add');
		$('.modal-title').text("체험등록");
		$('#addBtn').text("등록하기");
		
	}
})

/*// fileUpload : add & update*/
var imgFiles;
$('#fileupload').fileupload({
	dataType: 'json',
	sequentialUploads: true,
	singleFileUploads: false,
	autoUpload: false,
	disableImageResize: /Android(?!.*Chrome)|Opera/
		.test(window.navigator && navigator.userAgent), // 안드로이드와 오페라 브라우저는 크기 조정 비활성 시키기
	previewMaxWidth: 80,   // 미리보기 이미지 너비
	previewMaxHeight: 80,  // 미리보기 이미지 높이 
	previewCrop: true,      // 미리보기 이미지를 출력할 때 원본에서 지정된 크기로 자르기
	processalways: function (e, data) {
		console.log('fileuploadprocessalways()...');
		imgFiles = data.files;
		var imagesDiv = $('#ad-images-div');
		imagesDiv.html("");
		for (var i = 0; i < data.files.length; i++) {
			try {
				if (data.files[i].preview.toDataURL) {
					var imgWrapper = $('<div>')
						.attr("data-file-index", i)
						.addClass('ad-adImgs-wrapper')
						.click(delImg)
						.appendTo(imagesDiv);
					var imgContent = $('<div>')
						.addClass('ad-adImgs-content')
						.appendTo(imgWrapper);
					var imgCover = $('<div>')
						.addClass('ad-adImgs-cover')
						.appendTo(imgWrapper);
					$("<img/>").attr('src', data.files[i].preview.toDataURL()).appendTo(imgContent).addClass('ad-adImgs');
				}
			} catch (err) { }
		}
		
		$('#updBtn').click(function () {
			data.formData = {
				workshopNo: userNo,
				title: $(acnm).val(),
				minPerson: $(minno).val(),
				maxPerson: $(maxno).val(),
				experDate: $(actdt).val(),
				startTime: $(avst).val(),
				endTime: $(avet).val() ,
				prepareCont: $(mtrls).val(),
				price: $(apric).val(),
				content: $(accnt).val(),
				no:$(wsano).val()
			};
			data.submit();
		});
		
		$('#addBtn').click(function () {
			data.formData = {
				workshopNo: userNo,
				title: $(acnm).val(),
				minPerson: $(minno).val(),
				maxPerson: $(maxno).val(),
				experDate: $(actdt).val(),
				startTime: $(avst).val() + ":00",
				endTime: $(avet).val() + ":00",
				prepareCont: $(mtrls).val(),
				price: $(apric).val(),
				content: $(accnt).val()

			};
			data.submit();
		});
	},
	done: function (e, data) { // 서버에서 응답이 오면 호출된다. 각 파일 별로 호출된다.
		console.log('done()...');
		console.log(data.result);
	}
});

/*delete*/
 function classdel(no) {
     if (window.confirm("삭제하시겠습니까?") == false) 
     	return;
     $.get("../../../json/wsav/adminDelete", {"wsano": no}, () => {
    	 
     });
/*      location.reload(); */  
}

/*미리보기 삭제 이벤트*/
function delImg(event) {
	var wrapperDiv = $(event.currentTarget);
	wrapperDiv.remove();
	var fileIndex = wrapperDiv.attr('data-file-index');
	imgFiles.splice(fileIndex, 1);
}

