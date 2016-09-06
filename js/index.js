var seatTpl='<div class="table">\
			<div class="seat_{$status1} seat1"></div>\
			<div class="seat_{$status2} seat2"></div>\
			<div class="seat_{$status3} seat3"></div>\
			<div class="seat_{$status4} seat4"></div>\
		</div>';
$(function(){
	switch(window.location.hash)
	{
		case '':
		break;
		case '#room1':
		LoadRoom1();
		break;
		case '#room2':
		LoadRoom2();
		break;
		case '#room3':
		LoadRoom3();
		break;
	}
	window.onhashchange=function(){
		switch(window.location.hash)
		{
			case '':
			window.location.reload();
			break;
			case '#room1':
			LoadRoom1();
			break;
			case '#room2':
			LoadRoom2();
			break;
			case '#room3':
			LoadRoom3();
			break;
		}
	}
	$('.room1').on('click',function(){
		window.location.hash="#room1";
	});
	$('.room2').on('click',function(){
		window.location.hash="#room2";
	});
	$('.room3').on('click',function(){
		window.location.hash="#room3";
	});
	$('#back').on('click',function(){
		window.history.back(-1);
		window.history.reload();
	})
});
function LoadRoom1()
{
	var data=[[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0]];//ajax请求
	$('.container').empty();
	$('.compass').css('position','fixed');
	AddTpl(data);
}
function LoadRoom2()
{
	var data=[[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0]];//ajax请求
	$('.container').empty();
	$('.compass').css('position','fixed');
	AddTpl(data);
}
function LoadRoom3()
{
	var data=[[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0]];//ajax请求
	$('.container').empty();
	$('.compass').css('position','fixed');
	AddTpl(data);
}
function AddTpl(data)
{
	var str = "";
	for(key in data)
	{
		var node = seatTpl;
		node = node.replace(/\{\$status1\}/gi,data[key][0])
					.replace(/\{\$status2\}/gi,data[key][1])
					.replace(/\{\$status3\}/gi,data[key][2])
					.replace(/\{\$status4\}/gi,data[key][3]);
		str += node;
	}
	$('.container').html(str);
}
