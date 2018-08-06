
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
		/*for (var item of data) {
			var date = new Date(item.actdt);
			item.year = date.getFullYear();
			item.month = date.getMonth() + 1;
			item.day = date.getDate();
			var str = item.time.split(":");
			item.hour = str[0];
			item.minute = str[1];
		}
		$(adWorksWrapperTemplate({list: data})).appendTo(adWorksData);*/
	});
});