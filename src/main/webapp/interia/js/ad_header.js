$(document).ready(function(){
    $(".ad-nav-link").click(function(){
        $(".ad-nav-second").animate({
            height: 'toggle'
        });
    });
});

$.get("/interior/interia/html/admin/store_admin_header.html", (data) => {
    $("#ad-header").html(data);
});
