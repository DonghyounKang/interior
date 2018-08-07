// 자랑하기 리스트
$(window).scroll(function(){
	let $window = $(this);
    let scrollTop = $window.scrollTop();
    let windowHeight = $window.height();
    let documentHeight = $(document).height();

    if( scrollTop >= documentHeight - windowHeight){
            console.log("끝!");
            snslist();
    }
});

var grid = $(".grid");
var $grid = $(grid).masonry({
	itemSelector: '.grid-item',
	columnWidth: 224,
	gutter: 20
});
var myList = null;
var flag = false;

$.getJSON(serverRoot + "/json/auth/loginUser", (data) => {
	console.log("로그인:"+ data.no);
	uno = data.no;
	$.getJSON("../../../json/board/islike"+uno,(data) => {
		console.log(data);
		myList = data;
	});
});

setTimeout(function() {
$.getJSON("../../../json/board/list",{"pageNo":1, "pageSize":40},(data) => {
	for (var item of data) {
		console.log("myList: " + myList);
		if (myList != null) {
			for(let list of myList) {
			
				if(list.BNO == item.no) {
					var divs = $('<div class="grid-item">' +
							'<a  class="grid-photo-a" onclick="mkmodal('+ item.no +')" href="#myModal" data-toggle="modal">'+
							'<div class="grid-photo">'+
							'<img  src="../../images/sns/'+ item.path +'" alt="">'+
							'</div>'+
							'</a>'+
							'<div class="grid-photo-cont">'+
							'<a class="grid-photo-like likeoff'+ i +'" id="like_off" onclick=\"likeon('+ i +')\" style="display:none;">'+ 
							'<i class="material-icons">favorite_border</i>'+
							'<span>'+ item.count +'</span>'+
							'</a>' +
							'<a class="grid-photo-like likeon'+ i +'" id="like_on" onclick=\"likeoff('+ i +')\" style="display:flex; color:#ffc001">'+ 
							'<i class="material-icons" >favorite</i>'+
							'<span>'+ item.count +'</span>'+
							'</a>' +
							'</div>'+
					'</div>').appendTo(grid);
					flag = true;
					break;
				}
			}
		}
		if(!flag) {
			var divs = $('<div class="grid-item">' +
					'<a  class="grid-photo-a" onclick="mkmodal('+ item.no +')" href="#myModal" data-toggle="modal">'+
					'<div class="grid-photo">'+
					'<img  src="../../images/sns/'+ item.path +'" alt="">'+
					'</div>'+
					'</a>'+
					'<div class="grid-photo-cont">'+
					'<a class="grid-photo-like likeoff'+ i +'" id="like_off" onclick=\"likeon('+ i +')\">'+ 
					'<i class="material-icons">favorite_border</i>'+
					'<span>'+ item.count +'</span>'+
					'</a>' +
					'<a class="grid-photo-like likeon'+ i +'" id="like_on" onclick=\"likeoff('+ i +')\" style="display:none">'+ 
					'<i class="material-icons" >favorite</i>'+
					'<span>'+ item.count +'</span>'+
					'</a>' +
					'</div>'+
			'</div>').appendTo(grid);
		}
		
		
		i++;
		var $divs = $(divs);
		$grid.append($divs).masonry("appended", $divs);
		$(grid).imagesLoaded().progress( function() {
			$grid.masonry('layout');
		});
		
		if(flag)
			flag = false;
	}

});

}, 500);
var i = 1;
var addNo = 3;
var addPage = 20;
var isEnd = false;

function snslist() {
if(isEnd == true){
    return;
}
console.log("addNo: " + addNo);
$.getJSON("../../../json/board/list",{"pageNo":addNo, "pageSize":addPage},(data) => {
	for (var item of data) {
		if (myList != null) {
			for(let list of myList) {
				if(list.BNO == item.no) {
					var divs = $('<div class="grid-item">' +
							'<a  class="grid-photo-a" onclick="mkmodal('+ item.no +')" href="#myModal" data-toggle="modal">'+
							'<div class="grid-photo">'+
							'<img  src="../../images/sns/'+ item.path +'" alt="">'+
							'</div>'+
							'</a>'+
							'<div class="grid-photo-cont">'+
							'<a class="grid-photo-like likeoff'+ i +'" id="like_off" onclick=\"likeon('+ i +')\" style="display:none;">'+ 
							'<i class="material-icons">favorite_border</i>'+
							'<span>'+ item.count +'</span>'+
							'</a>' +
							'<a class="grid-photo-like likeon'+ i +'" id="like_on" onclick=\"likeoff('+ i +')\" style="display:flex; color:#ffc001">'+ 
							'<i class="material-icons" >favorite</i>'+
							'<span>'+ item.count +'</span>'+
							'</a>' +
							'</div>'+
					'</div>').appendTo(grid);
					flag = true;
					break;
				}
			}
		}
		if(!flag) {
			var divs = $('<div class="grid-item">' +
					'<a  class="grid-photo-a" onclick="mkmodal('+ item.no +')" href="#myModal" data-toggle="modal">'+
					'<div class="grid-photo">'+
					'<img  src="../../images/sns/'+ item.path +'" alt="">'+
					'</div>'+
					'</a>'+
					'<div class="grid-photo-cont">'+
					'<a class="grid-photo-like likeoff'+ i +'" id="like_off" onclick=\"likeon('+ i +')\">'+ 
					'<i class="material-icons">favorite_border</i>'+
					'<span>'+ item.count +'</span>'+
					'</a>' +
					'<a class="grid-photo-like likeon'+ i +'" id="like_on" onclick=\"likeoff('+ i +')\" style="display:none">'+ 
					'<i class="material-icons" >favorite</i>'+
					'<span>'+ item.count +'</span>'+
					'</a>' +
					'</div>'+
			'</div>').appendTo(grid);
		}
		
		i++;
		var $divs = $(divs);
		$grid.append($divs).masonry("appended", $divs);
		$(grid).imagesLoaded().progress( function() {
			$grid.masonry('layout');
		});
		
		if(flag)
			flag = false;
	}
	
	console.log("data.length: "+data.length);
	if( data.length == 0 ){
        isEnd = true;
	}
});

addNo++; 

}

function likeon(i) {
	$(".likeoff"+ i).css("display","none");
	$(".likeon"+i).css({"display":"flex","color":"#ffc001"});
}
function likeoff(i) {
	$(".likeon"+ i).css("display","none");
	$(".likeoff"+ i).css("display","flex");
}
























//
