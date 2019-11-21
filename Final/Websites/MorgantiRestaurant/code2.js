var move = 20; 
$(document).ready(function(){
	var map=document.getElementById("maps");
	var cw = $('#maps').width();
	$('#maps').css({'height':cw+'px'});
	$(window).resize(function(){
		var cw2 = $('#maps').width(); 
		$('#maps').css({'height':cw2+'px'});
	});
    $("#side").click(function(){
		if (move===-20)
		{
			$(this).animate({left:'20%'});
			document.getElementById("logo").style.marginLeft="40%";
			//$("logo").animate({marginLeft:'40%'});
			$("#sidemain").slideToggle();
			move*=-1; 
			document.getElementById("side").style.transform="rotate(180deg)";
			$(map).animate({left:'25%'});
			map.style.width="70%";
			return;
		}
		if (move===20)
		{
			$(this).animate({left:'10px'});
			//$("logo").animate({marginLeft:'auto'});
			document.getElementById("logo").style.marginLeft="auto";
			$("#sidemain").slideToggle();
			move*=-1; 
			document.getElementById("side").style.transform="rotate(360deg)";
			$(map).animate({left:'5%'});
			map.style.width="91%";
			return;
		}
    });
});
