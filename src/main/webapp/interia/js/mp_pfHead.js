$.get("/interior/interia/html/mp_pfHead.html", (data) => {
    $(".mp-banner").html(data);
});


/* scroller_underBar */
$.get("/interior/interia/html/mp_underBar.html", (data) => {
    $("#mp_underBar").html(data);
});

var offset = $("#footer").offset();
$(window).scroll(function () { 
  var scrollValue = $(document).scrollTop(); 
  
  console.log(scrollValue);
  console.log(offset.top);
  if (scrollValue < 280) {
    $("#mp_underBar").css("display", "none");
  }
  if (scrollValue > 320 && scrollValue < offset.top + 200) {
    $("#mp_underBar").css("display", "block");
  }
  if (scrollValue > offset.top + 200) {
    $("#mp_underBar").css("display", "none");
  }
});





// 팔로우 버튼 자신의 마이페이지에서만 안보이도록 
$(document).ready(function() {
    $.getJSON(serverRoot + "/json/auth/loginUser", (data) => {
        if ($(".mp-user-name").text() == data.id) {
            $(".btn-outline-light").css("display", "none");
        }
    });
});

//좋아요 기능 구현 
/*var prothumb = "${pivo.prothumb}";
function updateProInterestThumb(){
  var userid = "${user.id}";
  if(userid == ""){
	  location.replace("link_page.html");
  }else{
    if(prothumb=='Y'){ 
      prothumb='N'; //console.log("1      "+prothumb);
    }else{f
      prothumb='Y'; //console.log("2      "+prothumb);
    }//console.log("3     "+prothumb);
    $.ajax({
      url : '/updateProInterestThumb',
      type : 'POST',
      data : {'code':code , 'prothumb': prothumb},
      success : function(result){
        $('#prothumbYn').html('');
        var jsonObj = JSON.parse( result );
        if(jsonObj.prothumb== "Y"){
          $('#layLike').css('display', 'block');
          $('#layLike').html("<p id="liketxt"><strong style="color:#f43142">좋아요</strong>가 되었습니다.<br><a href="prointerestlistThumb">전체보기</a></p>");
          $("#prothumbYn").html("<i class="fa fa-heart" style="color:#f43142"></i>"+" <strong>"+jsonObj.prothumbcount+"</strong>");
        }else{
          $('#layLike').css('display', 'block');
          $('#layLike').html("<p id="liketxt"><strong style="color:#f43142">좋아요</strong>가 취소되었습니다.</p>");
          $("#prothumbYn").html("<i class="fa fa-heart-o"></i>"+" <strong>"+jsonObj.prothumbcount+"</strong>");
        }
      } 
    });
  }
}
*/

// 팔로우 클릭시 팔로잉
/*$(document).ready(function(){
	$("button").click(function(){
		$("p").text("안녕하세요!");
	});
});
*/

// 팔로잉 팔로우 버튼 누르면 전환
/*$(".mp-following-btn>button").click (function(){
	$("button").toggleClass("important");
});

$(".mp-following-btn>button").click(function(){
	$("button").toggleClass("blue");
});
*/



