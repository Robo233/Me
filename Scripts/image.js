const aboutImage = document.querySelector("#aboutImage");
const aboutImageBig = document.querySelector(".aboutImageBig");
const nav2 = document.querySelector("nav");
const aboutTitle = document.querySelector("#aboutTitle");
const aboutText = document.querySelector("#aboutText");
const footer2 = document.querySelector("#footer");
const body2 = document.body;
const x = document.querySelector("#x");
const deviceWidth = $(window).width(); // jQuery
let isAnimationEnabled = false;
let originalBigImageLeft = 0;

aboutImage.onclick=function(){
    aboutImageBig.style.display = "block";
    originalBigImageLeft = aboutImageBig.getBoundingClientRect().left;
    isAnimationEnabled = true;
    myMove();
    x.style.display = "block";
    nav2.style.display = "none";
    aboutTitle.style.display = "none";
    aboutText.style.display = "none";
    footer2.style.display = "none";
    aboutImage.style.display = "none";
    body2.style.backgroundColor = color3;
    
}


x.onclick=function(){
    isAnimationEnabled = false;
    aboutImageBig.style.display = "none";
    x.style.display = "none";
    nav2.style.display = "block";
    aboutTitle.style.display = "block";
    aboutText.style.display = "block";
    footer2.style.display = "block";
    aboutImage.style.display = "block";
    body2.style.backgroundColor = "#212121";
    aboutImageBig.style.left = originalBigImageLeft + "px";
}


function myMove() {

    var elem = document.querySelector(".aboutImageBig");
    pos = elem.getBoundingClientRect().left;
    var id = setInterval(frame, 1); 
    function frame() {
      if(elem.getBoundingClientRect().left>=(window.screen.width-elem.clientWidth)/2 || !isAnimationEnabled){ 
        clearInterval(id);
      } else {
        pos+=1; 
        elem.style.left = pos + 'px';  
        
      }
    }
  }

  function remove_last_n_characters(str,n){
    return str.slice(0, -n);
}

function removeCustomShapeFill() {
  var elements = document.querySelectorAll('.customShapeDividerTop-1625675696 .shape-fill');
  elements.forEach(function(element) {
      element.style.fill = "";
  });
}

window.onload = function() {
  // Set a timeout to delay the execution
  setTimeout(removeCustomShapeFill, 2000); // Delays for 2000 milliseconds (2 seconds)
};
