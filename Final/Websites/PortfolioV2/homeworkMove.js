var divs = document.getElementById("homework"); 
var table = document.querySelectorAll(".texts"); 
var footer = document.getElementById("footer");
document.getElementById("hometable").addEventListener("mousemove", moving);

function moving()
{
   var i=0; 
   var initial = 4150;  
   var initial2 = 800; 
   for(i=0;i<table.length;i++)
   {
     var name = table[i].clientHeight;
     if(name != 19)
     {
	initial+=(name);
	initial2+=name;
     } 
   }
initial+="px";
initial2+="px";
footer.style.top=initial; 
divs.style.height=initial2;
}
