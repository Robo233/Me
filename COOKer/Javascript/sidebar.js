const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {

  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const show = document.querySelector(".recipe-links");
const videos = document.querySelector(".videos");

plus.onclick=function(){
  plus.style.display="none"
  minus.style.display="block"
  show.style.display="block"
   
}

minus.onclick=function(){  
  plus.style.display="block"
  minus.style.display="none"
  show.style.display="none"
}


const aboutus = document.querySelector(".about-us");
const recipes = document.querySelector(".recipes");
const videossidebar = document.querySelector(".videos-sidebar");

aboutus.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

recipes.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

videossidebar.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});