
"use strict"
var userNo;
var adWorksData = $('.ad-works-data');
var adWorksEnrollBtn = $('.ad-works-enroll');
var adWorksWrapperTemplateSrc = $('#ad-works-template').html();
var adWorksWrapperTemplate = Handlebars.compile(adWorksWrapperTemplateSrc);

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
		
		/* view */
		adClassData.on('click', '.ad-works-update', function(e) {
			var no = $(e.target).attr('data-workshopNo');
			$.getJSON(serverRoot + "/json/works/" + no, (data) => {
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
	
	$.getJSON(serverRoot + "/json/works/currentState",{"no":userNo}, (data) => {
		console.log(data);
		$(totalCnt).text(data.totalCnt);
        $(sellCnt).text(data.sellCnt);
        $(waitCnt).text(data.waitCnt);
        $(outCnt).text(data.outCnt);
	});
	
});