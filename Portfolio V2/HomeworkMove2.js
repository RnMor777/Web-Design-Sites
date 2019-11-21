$(document).ready(function()
{
	$(".texts").onchange(function()
	{
		var height2 = $("#hometable").height();
		height2+=100;
		height2+="px" 
		console.log(height2);
		$("#countdowndiv").css({top:height2});
	});
});