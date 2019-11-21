var move = 20; 
$(document).ready(function(){
	var menu = document.getElementById("menus"); 
    $("#side").click(function(){
		if (move===-20)
		{
			$(this).animate({left:'20%'});
			document.getElementById("logo").style.marginLeft="40%";
			//$("logo").animate({marginLeft:'40%'});
			$("#sidemain").slideToggle();
			move*=-1; 
			document.getElementById("side").style.transform="rotate(180deg)";
			$(menu).animate({left:'25%'});
			menu.style.width="70%";
			$("#para").css({fontSize:'100%', lineHeight:'25px'});
			$("#para var").css({fontSize:'25px'});
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
			$(menu).animate({left:'5%'});
			menu.style.width="91%";
			$("#para").css({fontSize:'150%', lineHeight:'30px'});
			$("#para var").css({fontSize:'30px'});
			return;
		}
    });
});
