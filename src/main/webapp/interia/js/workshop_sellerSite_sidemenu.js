$.getJSON(serverRoot + "/json/workshop/listSellerSite", (data) => {
	console.log(data);
	console.log(data[0].lpath);
	$("<img src='../../../files/" + data[0].lpath + "'>"
	).appendTo(".workshop_sellerSite_sidemenu_img");
	$("<a href='../admin/store_admin_index.html'>" +
			"<h1>" + data[0].wsnm + "</h1>" +
			"</a>" +
			"<p>" + data[0].itrod + "</p>"
	).appendTo(".workshop_sellerSite_sidemenu_imgtext");
	$("<img src='../../../files/" + data[0].path + "'>"
	).appendTo(".workshop_sellerSite_content_visual");
	$("<img src='../../../files/" + data[0].lpath + "' style='width: 50px;'>"
	).appendTo(".snsbanner00_title_00");
	$("<p>" + data[0].wsnm + "</p>"
	).appendTo(".snsbanner00_title_01");
});
