const greenButton = document.querySelector(".greenButton");
const blueButton = document.querySelector(".blueButton");

greenButton.onclick=function(){
    document.body.style.backgroundImage = " linear-gradient(120deg,rgb(12, 99, 10),rgb(121, 217, 119)) ";
    
}
blueButton.onclick=function(){
    document.body.style.backgroundImage = " linear-gradient(120deg,rgb(43, 120, 214),rgb(84, 255, 184)) ";
    
}


