const body = document.documentElement;

const aboutMenuAbout = document.getElementById("aboutMenu");
const projectsMenuAbout = document.getElementById("projectsMenu");
const contactMenuAbout = document.getElementById("contactMenu");

const footer = document.querySelector("#footer");

let projectsMenuAboutHovering = false;
let contactMenuAboutHovering = false;
let aboutTitleHovering = false;
let aboutTextHovering = false;
let aboutImageHovering = false;
let aboutImageBigHovering = false;
let xHovering = false;

var color = "red";
var color1 = "tomato";
var color2 = "#dba767";
var color3 = "#6e511e";



changeColorsAbout()   

let intervalIdChangeColorsAbout = setInterval(changeColorsAbout, 5000);

    body.onclick=function(){
        changeColorsAbout()
        clearInterval(intervalIdChangeColorsAbout);
        intervalIdChangeColorsAbout = setInterval(changeColorsAbout, 5000);
    }

function changeColorsAbout(){
    var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
}
    if(color=="red"){
        color="pink";
        color1 = "#f9858b";
        color2 = "#ed335f";
        color3 = "#851d36";
        link.href = '../Images/Me logos/pink.png';
        
    }
    else if(color=="pink"){
        color="green";
        color1 = "#47b543";
        color2 = "#9dff9c";
        color3 = "#2C5F2D";
        link.href = '../Images/Me logos/green.png';
        
    }
    else if(color=="green"){
        color="blue"
        color1 = "#4B878B";
        color2 = "#D01C1F";
        color3 = "rgb(33, 58, 59)";
        link.href = '../Images/Me logos/blue.png';
        
    }
    else {
        color="red";
        color1 = "tomato";
        color2 = "#dba767";
        color3 = "#6e511e";
        link.href = '../Images/Me logos/red.png';

    }
        aboutMenuAbout.style.color = color2;
     

        if(projectsMenuAboutHovering){
            projectsMenuAbout.style.color = color2;
        }else{
            projectsMenuAbout.style.color = color1;
        }
        
        projectsMenuAbout.onmouseover=function(){
            projectsMenuAbout.style.color=color2;
            projectsMenuAboutHovering = true;
        }
        projectsMenuAbout.onmouseout=function(){
            projectsMenuAbout.style.color=color1; 
            projectsMenuAboutHovering = false;
            
        }
    
        if(contactMenuAboutHovering){
            contactMenuAbout.style.color = color2;
        }else{
            contactMenuAbout.style.color = color1;
        }
 
        contactMenuAbout.onmouseover=function(){
            contactMenuAbout.style.color=color2;
            contactMenuAboutHovering = true;
        }
        contactMenuAbout.onmouseout=function(){
            contactMenuAbout.style.color=color1; 
            contactMenuAboutHovering = false;
        }

        if(aboutTitleHovering){
            aboutTitle.style.color = color2;
            aboutTitle.style.textShadow = "0 0 20px " + color2;
        }else{
            aboutTitle.style.color = color1;
            aboutTitle.style.textShadow = "0 0 20px " + color1;
        }

        
        aboutTitle.onmouseover=function(){
            aboutTitle.style.color=color2;
            aboutTitle.style.textShadow = "0 0 20px " + color2;
            aboutTitleHovering = true;
        }
        aboutTitle.onmouseout=function(){
            aboutTitle.style.color=color1; 
            aboutTitle.style.textShadow = "0 0 20px " + color1;
            aboutTitleHovering = false;
        }    

        if(aboutTextHovering){
            aboutText.style.color = color2;
            aboutText.style.textShadow = "0 0 20px " + color2;
        }else{
            aboutText.style.color = color1;
            aboutText.style.textShadow = "0 0 20px " + color1;
        }
        aboutText.onmouseover=function(){
            aboutText.style.color=color2;
            aboutText.style.textShadow = "0 0 20px " + color2;
            aboutTextHovering = true;
        }
        aboutText.onmouseout=function(){
            aboutText.style.color=color1; 
            aboutText.style.textShadow = "0 0 20px " + color1;
            aboutTextHovering = false;
        }

        if(aboutImageHovering){
            aboutImage.style.boxShadow = "0 0 30px " + color2;
        }else{
            aboutImage.style.boxShadow = "0 0 20px " + color1;
        }
        aboutImage.onmouseover=function(){
            aboutImage.style.boxShadow = "0 0 30px " + color2;
            aboutImageHovering = true;
        }
        aboutImage.onmouseout=function(){ 
            aboutImage.style.boxShadow = "0 0 20px " + color1;
            aboutImageHovering = false;
        }  


        if(aboutImageBig.style.display == "block"){
            body2.style.backgroundColor = color3;
            if(aboutImageBigHovering){
                aboutImageBig.style.boxShadow = "0 0 40px " + color2;
            }else{
                aboutImageBig.style.boxShadow = "0 0 40px " + color1;
            }
            aboutImageBig.onmouseover=function(){
                aboutImageBig.style.boxShadow = "0 0 60px " + color2;
                aboutImageBigHovering = true;
            }
            aboutImageBig.onmouseout=function(){ 
                aboutImageBig.style.boxShadow = "0 0 40px " + color1;
                aboutImageBigHovering = false;
            }  
        }

        if(xHovering){
            x.style.color = color2;
            x.style.textShadow = "0 0 20px " + color2 + ", 0 0 20px " + color2;
        }else{
            x.style.color = color1;
            x.style.textShadow = "0 0 20px " + color1 + ", 0 0 20px " + color1;
        }
        

        x.onmouseover=function(){
            x.style.color=color2;
            x.style.textShadow = "0 0 20px " + color2 + ", 0 0 20px " + color2;
            xHovering = true;
        }
        x.onmouseout=function(){
            x.style.color=color1; 
            x.style.textShadow = "0 0 20px " + color1 + ", 0 0 20px " + color1;
            xHovering = false;
        }    

        footer.style.backgroundColor = color3;
}

