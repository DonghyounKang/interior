$(window).scroll(function () { 
  var scrollValue = $(document).scrollTop(); 
  
  if (scrollValue < 1200) {
	$(".ib-pd-foot").css("display", "none");
  } else if (scrollValue >= 1200) {
  	$(".ib-pd-foot").css("display", "flex");
  }
});
