var move = 20; 
$(document).ready(function(){
    $("#side").click(function(){
		var about = document.getElementById("about");
		if (move===-20)
		{
			$(this).animate({left:'20%'});
			document.getElementById("logo").style.marginLeft="40%";
			//$("logo").animate({marginLeft:'40%'});
			$("#sidemain").slideToggle();
			move*=-1; 
			document.getElementById("side").style.transform="rotate(180deg)";
			$(about).animate({left:'25%'});
			about.style.width="70%";
			$("#para2").css({fontSize:'125%'});
			$(".h1s").css({fontSize:'200%'});
			$("#uls").css({fontSize:'125%'});
			$(".vars").css({fontSize:'65%'});
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
			$(about).animate({left:'5%'});
			about.style.width="91%";
			$("#para2").css({fontSize:'150%'});
			$(".h1s").css({fontSize:'225%'});
			$("#uls").css({fontSize:'150%'});
			$(".vars").css({fontSize:'75%'});
			return;
		}
    });
});
