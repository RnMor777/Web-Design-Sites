  function load()
  {
    document.getElementById("input1").value = localStorage.input1;
    document.getElementById("input2").value = localStorage.input2;
    document.getElementById("input3").value = localStorage.input3;
    document.getElementById("input4").value = localStorage.input4;
    document.getElementById("input5").value = localStorage.input5;
    document.getElementById("input").value = localStorage.input;
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

    localStorage.input = document.getElementById("input").value;
    document.getElementById("input").value = localStorage.input;
  }