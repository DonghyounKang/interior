/*// fileUpload*/
"use strict"

$(document).ready(function(){
	$('#chk_all').click(function(){
		if($('#chk_all').prop('checked')) {
			$('.frt_tbl_type input[type=checkbox]').prop('checked',true);
		} else {
			$('.frt_tbl_type input[type=checkbox]').prop('checked',false);
		}
	});
	
});


