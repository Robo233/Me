const homeTitle = document.querySelector(".title");
const homeLogo = document.querySelector(".home-logo");
const aboutTitle = document.querySelector(".about-title");
const aboutText = document.querySelector(".about-text-container");
const readyText = document.querySelector(".ready-text");
const infoText = document.querySelector(".info-text-container");
const unity = document.querySelector(".unity");
const arrowRight = document.querySelector(".arrow-right");
const arrowLeft = document.querySelector(".arrow-left");
var Screenwidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var  homeTransformXValue = 0;
var  aboutTransformXValue = Screenwidth;
var  readyTextTransformXValue = 2*Screenwidth;
var  infoTextTransformXValue = 2*Screenwidth;
var  unityTransformXValue = 3*Screenwidth;

aboutTitle.style.transform = "translateX(" +  Screenwidth + "px)";
aboutText.style.transform = "translateX(" +  Screenwidth + "px)";

arrowLeft.onclick=function(){
  homeTransformXValue += Screenwidth
  homeTitle.style.transform = "translateX(" +  homeTransformXValue + "px)";
  homeLogo.style.transform = "translateX(" +  homeTransformXValue + "px)";
  aboutTransformXValue += Screenwidth
  aboutTitle.style.transform = "translateX(" +  aboutTransformXValue + "px)";
  aboutText.style.transform = "translateX(" +  aboutTransformXValue + "px)";
  readyTextTransformXValue += Screenwidth;
  infoText.style.transform = "translateX(" +  readyTextTransformXValue + "px)";
  readyText.style.transform = "translateX(" +  readyTextTransformXValue + "px)";
  unityTransformXValue += Screenwidth;
  unity.style.transform = "translateX(" +  unityTransformXValue + "px)";
  arrowRight.style.display = "block";
    if(homeTransformXValue==0){
      arrowLeft.style.display = "none";
    }
  
  
  }

arrowRight.onclick=function(){
  homeTransformXValue -= Screenwidth
  homeTitle.style.transform = "translateX(" +  homeTransformXValue + "px)";
  homeLogo.style.transform = "translateX(" +  homeTransformXValue + "px)";
  aboutTransformXValue -= Screenwidth
  aboutTitle.style.transform = "translateX(" +  aboutTransformXValue + "px)";
  aboutText.style.transform = "translateX(" +  aboutTransformXValue + "px)";
  readyTextTransformXValue -= Screenwidth;
  infoText.style.transform = "translateX(" +  readyTextTransformXValue + "px)";
  readyText.style.transform = "translateX(" +  readyTextTransformXValue + "px)";
  unityTransformXValue -= Screenwidth;
  unity.style.transform = "translateX(" +  unityTransformXValue + "px)";
  arrowLeft.style.display = "block";
  if(unityTransformXValue==0){
    arrowRight.style.display = "none";
  }
  }
 

  

    