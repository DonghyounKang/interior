
"use strict"
var userNo;
var adWorksData = $('.ad-works-data');
var adWorksEnrollBtn = $('.ad-class-enroll');
var adWorksWrapperTemplateSrc = $('#ad-works-template').html();
var adWorksWrapperTemplate = Handlebars.compile(adWorksWrapperTemplateSrc);

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