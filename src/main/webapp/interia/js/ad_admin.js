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

$(document).ready(function(){
	$('.modal').on('hidden.bs.modal', function (e) { 
		$(this).find('form')[0].reset() 
	});
});

/* works modal option */
function openOption(className, obj) {
    var $input = $(obj);
    if ($input.prop('checked')) $(className).show();
    else $(className).hide();
}


$(document).ready(function(){
	ClassicEditor
	.create( document.querySelector( '#editor' ) )
	.then( editor => {
	    console.log( editor );
	} )
	.catch( error => {
	    console.error( error );
	} );
});

