$(document).ready(function()
{
	var height2 = $("#hometable").height();
	height2+=562;
	height2+="px"; 
	console.log(height2);
	$("#countdowndiv").css({top:height2});
	$(document).mousemove(function()
	{
		var height2 = $("#hometable").height();
		height2+=562;
		height3=height2-250;
		height2+="px"; 
		height3+="px";
		console.log(height2);
		$("#countdowndiv").css({top:height2});
		$("#sideleft").css({height:height3});
		$("#sideright").css({height:height3});
		$("#main").css({height:height3});
	});
});