var a=1;
  document.getElementById("cont1").style.display="block";
  document.getElementById("cont2").style.display="none";
  document.getElementById("cont3").style.display="none";
  document.getElementById("cont4").style.display="none";

  document.getElementById("bar1").style.fontWeight="bold";
  document.getElementById("bar1").style.textDecoration="underline";
  document.getElementById("bar2").style.fontWeight="normal";
  document.getElementById("bar2").style.textDecoration="none";
  document.getElementById("bar3").style.fontWeight="normal";
  document.getElementById("bar3").style.textDecoration="none";
  document.getElementById("bar4").style.fontWeight="normal";
  document.getElementById("bar4").style.textDecoration="none";
  function change(x)
  { 
    a=x;
    var side1 = document.getElementById("bar1");
    var side2 = document.getElementById("bar2");
    var side3 = document.getElementById("bar3");
    var side4 = document.getElementById("bar4");

    var cont1 = document.getElementById("cont1");
    var cont2 = document.getElementById("cont2");
    var cont3 = document.getElementById("cont3");
    var cont4 = document.getElementById("cont4");

    if(a==1)
    {
      cont1.style.display="block";
      cont2.style.display="none";
      cont3.style.display="none";
      cont4.style.display="none";

      side1.style.fontWeight="bold";
      side1.style.textDecoration="underline";

      side2.style.fontWeight="normal";
      side2.style.textDecoration="none";

      side3.style.fontWeight="normal";
      side3.style.textDecoration="none";

      side4.style.fontWeight="normal";
      side4.style.textDecoration="none";
    }

    if(a==2)
    {
      cont2.style.display="block";
      cont1.style.display="none";
      cont3.style.display="none";
      cont4.style.display="none";

      side1.style.fontWeight="normal";
      side1.style.textDecoration="none";

      side2.style.fontWeight="bold";
      side2.style.textDecoration="underline";

      side3.style.fontWeight="normal";
      side3.style.textDecoration="none";

      side4.style.fontWeight="normal";
      side4.style.textDecoration="none";
    }

    if(a==3)
    {
      cont3.style.display="block";
      cont1.style.display="none";
      cont2.style.display="none";
      cont4.style.display="none";

      side1.style.fontWeight="normal";
      side1.style.textDecoration="none";

      side2.style.fontWeight="normal";
      side2.style.textDecoration="none";

      side3.style.fontWeight="bold";
      side3.style.textDecoration="underline";

      side4.style.fontWeight="normal";
      side4.style.textDecoration="none";
    }


    if(a==4)
    {
      cont4.style.display="block";
      cont1.style.display="none";
      cont2.style.display="none";
      cont3.style.display="none";

      side1.style.fontWeight="normal";
      side1.style.textDecoration="none";

      side2.style.fontWeight="normal";
      side2.style.textDecoration="none";

      side3.style.fontWeight="normal";
      side3.style.textDecoration="none";

      side4.style.fontWeight="bold";
      side4.style.textDecoration="underline";
    }


  }