
const menuNames = document.querySelectorAll('#index, #projects, #contact');

const footer = document.querySelector("#footer");

var color = "red";
var color1 = "tomato";
var color2 = "#dba767";
var color3 = "#6e511e";

const allElements = document.querySelectorAll('*');

var currentPageName = window.location.href.split("/").pop().slice(0, -5);
console.log(currentPageName)
menuNames.forEach(function(menuNameElement) {
    if(menuNameElement.id==currentPageName) {
        menuNameElement.style.color = color2;
    }else{
        menuNameElement.style.color = color1;
        menuNameElement.onmouseover=function(){
            menuNameElement.style.color=color2;
        }
        menuNameElement.onmouseout=function(){
            menuNameElement.style.color=color1;   
        }
    }

});

allElements.forEach(function(element) {
    element.onclick=function(){
        if(color=="red"){
            color="pink";
            color1 = "#f9858b";
            color2 = "#ed335f";
            color3 = "#851d36";
            console.log("pink")
            
        }
        else if(color=="pink"){
            color="green";
            color1 = "#47b543";
            color2 = "#9dff9c";
            color3 = "#2C5F2D";
            console.log("green")
        }
        else if(color=="green"){
            color="blue"
            color1 = "#4B878BFF";
            color2 = "#D01C1FFF";
            color3 = "rgb(33, 58, 59)";
            console.log("blue")
        }
        else {
            color="red";
            color1 = "tomato";
            color2 = "#dba767";
            color3 = "#6e511e";
            console.log("red")
        }

        var currentPageName = window.location.href.split("/").pop().slice(0, -5);
        menuNames.forEach(function(menuNameElement) {
            if(menuNameElement.id==currentPageName) {
                menuNameElement.style.color = color2;
            }else{
                menuNameElement.style.color = color1;
                menuNameElement.onmouseover=function(){
                    menuNameElement.style.color=color2;
                }
                menuNameElement.onmouseout=function(){
                    menuNameElement.style.color=color1;   
                }
            }

        });
    
        footer.style.backgroundColor = color3;
    
    }
  });

