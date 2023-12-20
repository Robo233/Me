var mainButton = document.getElementById("mainButton");
var mainbutton2 = document.getElementById(".mainbutton2");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");

mainButton.onclick=function(){
    button1.style.display="block"
    button2.style.display="block"
    button3.style.display="block"
    button4.style.display="block"
    mainButton.style.display="none"
    mainbutton2.style.display="block"
    
  }

  mainButton2.onclick=function(){
    button1.style.display="none"
    button2.style.display="none"
    button3.style.display="none"
    button4.style.display="none"
    mainButton.style.display="block"
    mainbutton2.style.display="none"
    
  }



