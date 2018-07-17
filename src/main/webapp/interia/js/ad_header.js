//$(document).ready(function(){
//    $(".ad-nav-item > a").click(function(){
//        $(".ad-nav-second").animate({
//            height: 'toggle'
//        });
//    });
//});
$.get("/interior/interia/html/admin/store_admin_header.html", (data) => {
    $("#ad-header").html(data);
});



function fntt() {
	$(".ad-nav-second").slideToggle("slow");
};