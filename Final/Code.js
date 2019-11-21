  function load()
  {
    document.getElementById("input1").innerHTML = localStorage.input1;
    document.getElementById("input2").innerHTML = localStorage.input2;
    document.getElementById("input3").innerHTML = localStorage.input3;
    document.getElementById("input4").innerHTML = localStorage.input4;
    document.getElementById("input5").innerHTML = localStorage.input5;
    document.getElementById("input6").innerHTML = localStorage.input6;
    document.getElementById("input").innerHTML = localStorage.input;
	var i=0;
	var x=$(".texts"); 
	for(i=0;i<x.length;i++)
	{
		var name=("Height"+i); 
		$(x[i]).css({height:localStorage.getItem(name)});
		var name2=("Width"+i); 
		$(x[i]).css({width:localStorage.getItem(name2)});
	}
  }
  function reset()
  {
    localStorage.input1 = document.getElementById("input1").value;
    document.getElementById("input1").value = localStorage.input1;

    localStorage.input2 = document.getElementById("input2").value;
    document.getElementById("input2").value = localStorage.input2;

    localStorage.input3 = document.getElementById("input3").value;
    document.getElementById("input3").value = localStorage.input3;

    localStorage.input4 = document.getElementById("input4").value;
    document.getElementById("input4").value = localStorage.input4;

    localStorage.input5 = document.getElementById("input5").value;
    document.getElementById("input5").value = localStorage.input5;

    localStorage.input6 = document.getElementById("input6").value;
    document.getElementById("input6").value = localStorage.input6;

    localStorage.input = document.getElementById("input").value;
    document.getElementById("input").value = localStorage.input;

	var i=0;
	var x1=$(".texts"); 
	for(i=0;i<x1.length;i++)
	{
		var y = $(x1[i]).height();
		var y2= $(x1[i]).width(); 
		var name=("Height"+i); 
		var name2=("Width"+i);
		localStorage.setItem(name,y); 
		localStorage.setItem(name2,y2); 
		//console.log(localStorage.getItem(name)); 
	}
  }