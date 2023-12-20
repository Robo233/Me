const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

const aboutus = document.querySelector(".close-about-us");
const menu = document.querySelector(".close-menu");
const contact = document.querySelector(".close-contact");
const gallery = document.querySelector(".close-gallery");

toggleBtn.addEventListener("click", function () {
 
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

aboutus.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

menu.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

contact.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

gallery.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});


