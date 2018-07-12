$(window).on("scroll touchmove", function () {
    $('#header_bg').toggleClass('tiny', $(document).scrollTop() > 0);
});

$.get("/interior/interia/html/header.html", (data) => {
    $("#header").html(data);
});

