var move = 20; 
var i=0; 
$(document).ready(function(){
	var foods = document.getElementsByClassName("foods");
	changeImages(); 
	$(window).resize(function(){changeImages();});
	function changeImages()
	{
		for(i=0;i<foods.length;i++)
		{
			$(foods[i]).height($(foods[i]).width());			
		}
		var next = $(foods[0]).height()+20;  
		next+="px"; 
		$(foods[1]).css({top:next});			
		$(foods[3]).css({top:next});	
		var next2 = next.replace("px",""); 
		next2*=2; 
		next2-=20;  
		next2+="px"; 
		$(foods[4]).css({top:next2});			
		$(foods[5]).css({top:next2});	
		$("#food").height(($(foods[0]).height()*3)+40);
	}  
	
	var foodLine = document.getElementById("food");
    $("#side").click(function(){
		if (move===-20)
		{
			$(this).animate({left:'20%'});
			document.getElementById("logo").style.marginLeft="40%";
			//$("logo").animate({marginLeft:'40%'});
			$("#sidemain").slideToggle();
			move*=-1; 
			document.getElementById("side").style.transform="rotate(180deg)";
			$(foodLine).animate({left:'25%'});
			foodLine.style.width="70%";
			changeImages(); 
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
			$(foodLine).animate({left:'5%'});
			foodLine.style.width="91%";
			changeImages(); 
			return;
		}
    });
});


