const body = document.body;

const aboutMenuProjects = document.getElementById("aboutMenuProjects");
const projectsMenuProjects = document.getElementById("projectsMenuProjects");
const contactMenuProjects= document.getElementById("contactMenuProjects");

const projects = document.querySelectorAll("#project");

var projectTypes = document.querySelectorAll("#projectTypeText");
var projectTypesArray = Array.from(projectTypes);
var projectContainers = document.getElementsByClassName("projectContainer");
var projectContainersArray = Array.from(projectContainers);

const imageSliderArrows = document.querySelectorAll(".leftArrow, .rightArrow");

const galleryContainerX = document.querySelector("#galleryContainerX");

var currentProjectType = projectTypes[0];
var currentProjectContainer = projectContainers[0];

var color = "red";
var color1 = "tomato";
var color2 = "#dba767";
var color3 = "#e68c3e";



let aboutMenuProjectsHovering = false;
let contactMenuProjectsHovering = false;
let leftArrowHovering = false;
let rightArrowHovering = false;
let galleryContainerXHovering = false;

changeColorsProjects();

for(let i=0;i<projectTypes.length;i++){
   
    projectTypes[i].addEventListener("click", function () {
        currentProjectContainer.style.display = "none";
        projectContainers[i].style.display = "block";
        currentProjectContainer = projectContainers[i];
        currentProjectType = projectTypesArray[i]
        
    });

    currentProjectType.style.color = color2;
    currentProjectType.style.textShadow = "0 0px 10px " + color2; 
    projectTypes[i].style.color = color1;
    projectTypes[i].style.textShadow = "0 0px 10px " + color1;  
  
}




let intervalIdChangeColorsProjects = setInterval(changeColorsProjects, 5000);

body.onclick=function(){
    changeColorsProjects();
    clearInterval(intervalIdChangeColorsProjects);
    intervalIdChangeColorsProjects = setInterval(changeColorsProjects, 5000);
}

function changeColorsProjects(){
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
        color1 = "#4B878BFF";
        color2 = "#D01C1FFF";
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

    if(aboutMenuProjectsHovering){
        aboutMenuProjects.style.color = color2;
    }else{
        aboutMenuProjects.style.color = color1;
    }
    

    aboutMenuProjects.onmouseover=function(){
        aboutMenuProjects.style.color=color2;
        aboutMenuProjectsHovering = true;
    }
    aboutMenuProjects.onmouseout=function(){
        aboutMenuProjects.style.color=color1; 
        aboutMenuProjectsHovering = false;
    }

    projectsMenuProjects.style.color = color2;


    if(contactMenuProjectsHovering){
        contactMenuProjects.style.color = color2;
    }else{
        contactMenuProjects.style.color = color1;
    }

    contactMenuProjects.onmouseover=function(){
        contactMenuProjects.style.color=color2;
        contactMenuProjectsHovering = true;
    }
    contactMenuProjects.onmouseout=function(){
        contactMenuProjects.style.color=color1; 
        contactMenuProjectsHovering = false;
    }

    

    projects.forEach(project => {
        if(project.classList.contains('hoveredProject')){
            project.style.backgroundColor = color2;
            project.style.boxShadow = "0 0 25px " + color2;
        }else{
            project.style.backgroundColor = color1;
            project.style.boxShadow = "0 0 25px " + color1;
        }
        
    project.onmouseover=function(){
        project.style.backgroundColor=color2;
        project.style.boxShadow = "0 0 25px " + color2;
        project.classList.add('hoveredProject');
    }
    project.onmouseout=function(){
        project.style.backgroundColor=color1; 
        project.style.boxShadow = "0 0 25px " + color1;
        project.classList.remove('hoveredProject');
    }
    });

    for(let i=0;i<projectTypes.length;i++){
        if(projectTypes[i]!=currentProjectType){
        currentProjectType.style.color = color2;
        currentProjectType.style.textShadow = "0 0px 10px " + color2; 
        projectTypes[i].style.color = color1;
        projectTypes[i].style.textShadow = "0 0px 10px " + color1;
        
          

        }
       
    }
    
    if(leftArrowHovering){
        imageSliderArrows[0].style.color = color2;
        imageSliderArrows[0].style.textShadow = "0 0 10px " + color2  + ", " + "0 0 10px " + color2;
    }else{
        imageSliderArrows[0].style.color = color1;
        imageSliderArrows[0].style.textShadow = "0 0 10px " + color1  + ", " + "0 0 10px " + color1;
    }
    

    if(rightArrowHovering){
        imageSliderArrows[1].style.color = color2;
        imageSliderArrows[1].style.textShadow = "0 0 10px " + color2  + ", " + "0 0 10px " + color2;
    }else{
        imageSliderArrows[1].style.color = color1;
        imageSliderArrows[1].style.textShadow = "0 0 10px " + color1  + ", " + "0 0 10px " + color1;
    }
    

    imageSliderArrows[0].onmouseover=function(){
        imageSliderArrows[0].style.color = color2;
        imageSliderArrows[0].style.textShadow = "0 0 10px " + color2  + ", " + "0 0 10px " + color2 ;
        leftArrowHovering = true;
    }
    imageSliderArrows[0].onmouseout=function(){
        imageSliderArrows[0].style.color = color1;
        imageSliderArrows[0].style.textShadow = "0 0 10px " + color1  + ", " + "0 0 10px " + color1 ;
        leftArrowHovering = false;
    }

    imageSliderArrows[1].onmouseover=function(){
        imageSliderArrows[1].style.color = color2;
        imageSliderArrows[1].style.textShadow = "0 0 10px " + color2  + ", " + "0 0 10px " + color2 ;
        rightArrowHovering = true;
    }
    imageSliderArrows[1].onmouseout=function(){
        imageSliderArrows[1].style.color = color1;
        imageSliderArrows[1].style.textShadow =  "0 0 10px " + color1  + ", " + "0 0 10px " + color1 ;
        rightArrowHovering = false;
    }
    if(galleryContainerXHovering){
        galleryContainerX.style.color = color2;
        galleryContainerX.style.textShadow = "0 0 20px " + color2 + ", 0 0 20px " + color2;
    }else{
        galleryContainerX.style.color = color1;
        galleryContainerX.style.textShadow = "0 0 20px " + color1 + ", 0 0 20px " + color1;
    }
    
    galleryContainerX.onmouseover=function(){
        galleryContainerX.style.color = color2;
        galleryContainerX.style.textShadow = "0 0 20px " + color2 + ", 0 0 20px " + color2;
        galleryContainerXHovering = true;
    }
    galleryContainerX.onmouseout=function(){
        galleryContainerX.style.color = color1;
        galleryContainerX.style.textShadow = "0 0 20px " + color1 + ", 0 0 20px " + color1;
        galleryContainerXHovering = false;
    }


    footer.style.backgroundColor = color3;
}