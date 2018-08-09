"use strict"

var userNo;
var adWorksData = $('.ad-works-data');
var adWorksEnrollBtn = $('.ad-works-enroll');
var adWorksWrapperTemplateSrc = $('#ad-works-template').html();
var adWorksWrapperTemplate = Handlebars.compile(adWorksWrapperTemplateSrc);

/*button 클릭시 파일 첨부 */	
$(function () {
	$('#imgUpload1').click(function (e) {
		e.preventDefault();
		$('#fileupload1').click();
	});
});

$(function () {
	$('#imgUpload2').click(function (e) {
		e.preventDefault();
		$('#fileupload2').click();
	});
});



$.getJSON(serverRoot + "/json/auth/loginUser", (data) => {
	//공방번호(사용자번호(PK))
	userNo = data.no;
	
	/* list */
	$.getJSON(serverRoot + "/json/works/adminList",{"no":userNo}, (data) => {
		console.log(userNo);
		console.log(data);
		for (var item of data) {
			var rdate = new Date(item.registeredDate);
			item.ryear = rdate.getFullYear();
			item.rmonth = rdate.getMonth() + 1;
			item.rday = rdate.getDate();
			
			var modifiedDate = item.modifiedDate;
			if(modifiedDate !== null && modifiedDate !== '') {
				var mdate = new Date(modifiedDate);
				item.myear = mdate.getFullYear();
				item.mmonth= mdate.getMonth() + 1
				item.mdate= mdate.getDate();
				}
			else {
			}
		}
		$(adWorksWrapperTemplate({list: data})).appendTo(adWorksData);
		});
	
	$.getJSON(serverRoot + "/json/works/currentState",{"no":userNo}, (data) => {
		console.log(data);
		$(totalCnt).text(data.totalCnt);
        $(sellCnt).text(data.sellCnt);
        $(waitCnt).text(data.waitCnt);
        $(outCnt).text(data.outCnt);
	});
});

adWorksData.on('click', '.ad-works-update', function(e) {
	var no = $(e.target).attr('data-worksNo');
	$.getJSON(serverRoot + "/json/works/adView/" + no, (data) => {
		console.log(data);
/*		$(acnm).val(data.title);
        $(minno).val(data.minPerson);
        $(maxno).val(data.maxPerson);
        $(actdt).val(data.experDate);
        $(avst).val(data.startTime);
        $(avet).val(data.endTime);
        $(mtrls).val(data.prepareCont);
        $(apric).val(data.price);
        $(accnt).val(data.content);
        $(wsano).val(data.no);*/
	});
	
	adWorksEnrollBtn.trigger('click', ['update']);
});



$('#ad-wors-addForm').click(function(e, action) {
	if (action === 'update') {
		console.log(action);
		$('#fileupload1').fileupload('option', 'url', '../../../json/works/update');
		$('.modal-title').text("작품정보수정");
		$('#addBtn').attr("id","updBtn");
		$('#updBtn').text("수정하기");
	} else {
		$('#fileupload1').fileupload('option', 'url', '../../../json/works/add');
		$('.modal-title').text("작품등록");
		$('#updBtn').attr("id","addBtn");
		$('#addBtn').text("등록하기");
		
	}
})

var imgFiles;

$('#fileupload2').fileupload({
	url: '../../../json/works/addWorksDetail',        // 서버에 요청할 URL
    dataType: 'json',
    autoUpload: true,
    done: function (e, data) { 
      console.log('done()...');
      console.log(data.result); // 서버가 보낸 JSON 객체는 data.result 에 보관되어 있다.
      $('#pddt').val(data.result.filename);
      $('<p/>').text('업로드 완료').appendTo('#ad-works-detail');
    }
});


$('#fileupload1').fileupload({
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
		
		$('#addBtn').click(function () {
			
			data.formData = {
				workshopNumber: userNo,
				title: $(wtitl).val(),
				price: $(price).val(),
				capacity: $(alstk).val(),
				salesStatus: $('#slst option:selected').val(),
				productDetail: $(pddt).val(),
				deliveryPrice: 'Y'
/*				"option.attributeValue": $(abnm).val(),
				"option.attributeName": $(abvls).val()*/
				
			};
			data.submit();
		});
		
		$('#updBtn').click(function () {
			data.formData = {
				workshopNo: userNo,
				/*title: $(acnm).val(),
				minPerson: $(minno).val(),
				maxPerson: $(maxno).val(),
				experDate: $(actdt).val(),
				startTime: $(avst).val() + ":00",
				endTime: $(avet).val() + ":00",
				prepareCont: $(mtrls).val(),
				price: $(apric).val(),
				content: $(accnt).val()*/
			};
			data.submit();
		});
	},
	done: function (e, data) { // 서버에서 응답이 오면 호출된다. 각 파일 별로 호출된다.
		console.log('done()...');
		console.log(data.result);
	}
});

/*미리보기 삭제 이벤트*/
function delImg(event) {
	var wrapperDiv = $(event.currentTarget);
	wrapperDiv.remove();
	var fileIndex = wrapperDiv.attr('data-file-index');
	imgFiles.splice(fileIndex, 1);
}


