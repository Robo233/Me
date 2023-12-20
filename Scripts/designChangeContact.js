const body = document.body;

const aboutMenuContact = document.getElementById("aboutMenuContact");
const projectsMenuContact = document.getElementById("projectsMenuContact");
const contactMenuContact = document.getElementById("contactMenuContact");

const contactTitle = document.querySelector("#contactTitle");
const email = document.querySelector("#email");
const emailValue = document.querySelector("#emailValue");
const linkedIn = document.querySelector("#LinkedIn");
const linkedInValue = document.querySelector("#LinkedInValue");
const phone = document.querySelector("#Phone");
const phoneNumber = document.querySelector("#phoneNumber");

let aboutMenuContactHovering = false;
let projectsMenuContactHovering = false;
let contactTitleHovering = false;
let emailHovering = false;
let emailValueHovering = false;
let linkedInHovering = false;
let linkedInValueHovering = false;
let phoneHovering = false;
let phoneNumberHovering = false;

var color = "red";
var color1 = "tomato";
var color2 = "#dba767";
var color3 = "#e68c3e";

changeColorsContact();

let intervalIdChangeColorsContact = setInterval(changeColorsContact, 5000);

body.onclick=function(){
    changeColorsContact()
    clearInterval(intervalIdChangeColorsContact);
    intervalIdChangeColorsContact = setInterval(changeColorsContact, 5000);
}
    

function changeColorsContact(){
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

    if(aboutMenuContactHovering){
        aboutMenuContact.style.color = color2;
        
    }else{
        aboutMenuContact.style.color = color1;
        
    }

    aboutMenuContact.onmouseover=function(){
        aboutMenuContact.style.color=color2;
        aboutMenuContactHovering = true;

    }
    aboutMenuContact.onmouseout=function(){
        aboutMenuContact.style.color=color1; 
        aboutMenuContactHovering = false;

    }

    if(projectsMenuContactHovering){
        projectsMenuContact.style.color = color2;
    }else{
        projectsMenuContact.style.color = color1;
    }
    projectsMenuContact.onmouseover=function(){
        projectsMenuContact.style.color=color2;
        projectsMenuContactHovering = true;
    }
    projectsMenuContact.onmouseout=function(){
        projectsMenuContact.style.color=color1; 
        projectsMenuContactHovering = false;
    }
    
    contactMenuContact.style.color = color2;

    if(contactTitleHovering){
        contactTitle.style.color = color2;
        contactTitle.style.textShadow = "0 0 20px " + color2;
    }else{
        contactTitle.style.color = color1;
        contactTitle.style.textShadow = "0 0 20px " + color1;
    }
    contactTitle.onmouseover=function(){
        contactTitle.style.color=color2;
        contactTitle.style.textShadow = "0 0 20px " + color2;
        contactTitleHovering = true;
    }
    contactTitle.onmouseout=function(){
        contactTitle.style.color=color1; 
        contactTitle.style.textShadow = "0 0 20px " + color1;
        contactTitleHovering = false;
    }

    if(emailHovering){
        email.style.color = color2;
        email.style.textShadow = "0 0 20px " + color2;
    }else{
        email.style.color = color1;
        email.style.textShadow = "0 0 20px " + color1;
    }
    email.onmouseover=function(){
        email.style.color=color2;
        email.style.textShadow = "0 0 20px " + color2;
        emailHovering = true;
    }
    email.onmouseout=function(){
        email.style.color=color1; 
        email.style.textShadow = "0 0 20px " + color1;
        emailHovering = false;
    }

    if(emailValueHovering){
        emailValue.style.color = color2;
        emailValue.style.textShadow = "0 0 20px " + color2;
    }else{
        emailValue.style.color = color1;
        emailValue.style.textShadow = "0 0 20px " + color1;
    }
    emailValue.onmouseover=function(){
        emailValue.style.color=color2;
        emailValue.style.textShadow = "0 0 20px " + color2;
        emailValueHovering = true;
    }
    emailValue.onmouseout=function(){
        emailValue.style.color=color1; 
        emailValue.style.textShadow = "0 0 20px " + color1;
        emailValueHovering = false;
    }

    if(linkedInHovering){
        linkedIn.style.color = color2;
        linkedIn.style.textShadow = "0 0 20px " + color2;
    }else{
        linkedIn.style.color = color1;
        linkedIn.style.textShadow = "0 0 20px " + color1;
    }
    linkedIn.onmouseover=function(){
        linkedIn.style.color=color2;
        linkedIn.style.textShadow = "0 0 20px " + color2;
        linkedInHovering = true;
    }
    linkedIn.onmouseout=function(){
        linkedIn.style.color=color1; 
        linkedIn.style.textShadow = "0 0 20px " + color1;
        linkedInHovering = false;
    }

    if(linkedInValueHovering){
        linkedInValue.style.color = color2;
        linkedInValue.style.textShadow = "0 0 20px " + color2;
    }else{
        linkedInValue.style.color = color1;
        linkedInValue.style.textShadow = "0 0 20px " + color1;
    }
    linkedInValue.onmouseover=function(){
        linkedInValue.style.color=color2;
        linkedInValue.style.textShadow = "0 0 20px " + color2;
        linkedInValueHovering = true;
    }
    linkedInValue.onmouseout=function(){
        linkedInValue.style.color=color1; 
        linkedInValue.style.textShadow = "0 0 20px " + color1;
        linkedInValueHovering = false;
    }

    if(phoneHovering){
        phone.style.color = color2;
        phone.style.textShadow = "0 0 20px " + color2;
    }else{
        phone.style.color = color1;
        phone.style.textShadow = "0 0 20px " + color1;
    }
    phone.onmouseover=function(){
        phone.style.color=color2;
        phone.style.textShadow = "0 0 20px " + color2;
        phoneHovering = true;
    }
    phone.onmouseout=function(){
        phone.style.color=color1; 
        phone.style.textShadow = "0 0 20px " + color1;
        phoneHovering = false;
    }

    if(phoneNumberHovering){
        phoneNumber.style.color = color2;
        phphoneNumberone.style.textShadow = "0 0 20px " + color2;
    }else{
        phoneNumber.style.color = color1;
        phoneNumber.style.textShadow = "0 0 20px " + color1;
    }
    phoneNumber.onmouseover=function(){
        phoneNumber.style.color=color2;
        phoneNumber.style.textShadow = "0 0 20px " + color2;
        phoneNumberHovering = true;
    }
    phoneNumber.onmouseout=function(){
        phoneNumber.style.color=color1; 
        phoneNumber.style.textShadow = "0 0 20px " + color1;
        phoneNumberHovering = false;
    }
  
    footer.style.backgroundColor = color3;

}