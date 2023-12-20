let cursor = document.querySelector(".cursor");
let links2 = document.querySelectorAll(' a');

window.addEventListener("mousemove",cursorFunction);

function cursorFunction(e){
 
  cursor.style.top = e.pageY + 'px';
  cursor.style.left = e.pageX + "px";
}

links2.forEach(link =>{
link.addEventListener('mouseleave', () => {
  cursor.classList.remove("linkGrow");
 
  
});
link.addEventListener('mouseover', () => {
  cursor.classList.add("linkGrow")
  cursor.style.border = "3px solid white"
});
});