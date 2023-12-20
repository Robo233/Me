const navToggle = document.querySelector(".navToggle");
const nav = document.querySelector(".navCenter");
const navHeader = document.querySelector(".navHeader");
const links = document.querySelector(".links");
const easterEgg = document.querySelector(".easterEgg");
const me = document.querySelector(".copyright");
Boolean; isPressed = false;

navToggle.addEventListener("click", function () {

  links.classList.toggle("showLinks");
  if(isPressed == false){
 // nav.style.backgroundColor = "#852d21";
 // navHeader.style.backgroundColor = "black";
  easterEgg.style.display = "none";
  isPressed = true;
  me.style.display = "none";
  disableScroll()
  document.body.style.overflow = "hidden";
  }
  else{
    enableScroll()
    document.body.style.overflow = "visible";
    isPressed = false;
  //  nav.style.backgroundColor = "transparent";
  //  navHeader.style.backgroundColor = "transparent";
    easterEgg.style.display = "block";
    me.style.display = "block";
  }
});

function disableScroll() {
  // Get the current page scroll position
  scrollTop = 
    window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = 
    window.pageXOffset || document.documentElement.scrollLeft,

      // if any scroll is attempted,
      // set this to the previous value
      window.onscroll = function() {
          window.scrollTo(scrollLeft, scrollTop);
      };
}

function enableScroll() {
  window.onscroll = function() {};
}