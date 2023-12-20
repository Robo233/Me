var destopImagesArr = Array.prototype.slice.call( document.getElementsByClassName("desktopImage") );
var mobileImagesArr = Array.prototype.slice.call( document.getElementsByClassName("mobileImage") );


if(window.innerWidth >= 830){
  for(i=0;i<destopImagesArr.length;i++) {
   destopImagesArr[i].style.display = "block"
   mobileImagesArr[i].style.display = "none"
  }
   
}
else{
    for(i=0;i<destopImagesArr.length;i++) {
        destopImagesArr[i].style.display = "none"
        mobileImagesArr[i].style.display = "block"
       }
}