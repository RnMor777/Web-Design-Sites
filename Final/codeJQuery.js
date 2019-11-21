var degree=0;
var degree2=270;
var degree3=90;
var stop=1; 
var isLeft=1; 
$(document).ready(function()
{
	$(document).scroll(function()
	{
	if($(window).width()>1115)
	{
    		if($(window).scrollTop() >= 300) 
		{
			if(stop===1)
			{
				down();
				stop=0; 
			} 
    		}
    		else if($(window).scrollTop()>=200)
		{
			down2();
			stop=1; 
		}
		else
		{
			up(); 
			stop=1; 
		}
	}
	else
	{
		$("#fix").removeClass(); 
		$("#fix").css({position:'absolute',top:'200px',left:'46.2%',width:'7.6%', '-webkit-transform': 'rotate(0deg)', 'transform': 'rotate(0deg)'});  
	}
	});
	$("#fix").click(function()
	{
		if($(window).scrollTop()>=300)
		{
		if(isLeft===1)
		{
			$("#fix").animate({left:'90%'},1000);
			$("#fix").removeClass("triMovesBan");
			$("#fix").removeClass("triMovesBanUpR"); 
			$("#fix").removeClass("triMovesBanUpL"); 
			$("#fix").removeClass("triMovesNo");	
			$("#fix").addClass("triMoves");			
			$("#nav2").removeClass("antiMove"); 
			$("#nav2").addClass("moving");
			$("#nav2").css({opacity:'1',left:'0px'}); 
			isLeft=0; 
			return;
		}
		if(isLeft===0)
		{
			$("#fix").animate({left:'-.5%'},1000);
			$("#fix").addClass("triMovesNo");	
			$("#fix").removeClass("triMoves");
			$("#fix").removeClass("triMovesBanUpR"); 
			$("#fix").removeClass("triMovesBanUpL"); 	
			$("#nav2").removeClass("moving");
			$("#nav2").addClass("antiMove");
			$("#nav2").css({opacity:'0',left:'-90%'}); 
			isLeft=1;
			return; 
		}
		}
	});
	function down2()
	{
		console.log(stop); 
		$("#fix").animate({'left':'46.2%'},{queue:false, duration:600, easing: 'linear'});
		if(stop!==1 && isLeft===1)
		{
			$("#fix").removeClass("triMovesBanUpL"); 
			$("#fix").removeClass("triMovesBan"); 
			$("#fix").addClass("triMovesBanUpR"); 
		}
		$("#fix").css
		({                    
			position:'fixed',
			top:'0px', 
		});
		if(isLeft===0)
		{
			$("#fix").removeClass("triMovesBanUpR"); 
			$("#fix").removeClass("triMoves");	
			$("#fix").removeClass("triMovesBan"); 
			$("#fix").addClass("triMovesBanUpL"); 
			$("#nav2").removeClass("moving");
			$("#nav2").addClass("antiMove");
			$("#nav2").css({opacity:'0',left:'-90%'});
		} 
	}
	function down()
	{
		$("#fix").removeClass("triMovesBanUpR");
		$("#fix").removeClass("triMovesBanUpL");  
		$("#fix").addClass("triMovesBan");
		$("#fix").animate({'left':'-.5%'},{queue:false, duration:600, easing: 'linear'});
	}
	function up()
	{
		$("#fix").css
		({
			position:'absolute',
			top:'200px',
		});
		$("#fix").animate({'left':'46.2%'},{queue:false, duration:600, easing: 'linear'}); 
	}
}); 