const imageGalleryX = document.getElementById("galleryContainerX");
const galleryContainerBackground = document.querySelector(".galleryContainerBackground");
const desktopGames = document.querySelector(".desktopGames");
const mobileGames = document.querySelector(".mobileGames");
const list1 = Array.from(desktopGames.querySelectorAll('#project')); 
const list2 = Array.from(mobileGames.querySelectorAll('#project')); 

const nonWebProjects = Array.from(list1.concat(list2));
const galleryContainer = document.querySelector('.galleryContainer');

let previousImagesContainer=null;
let currentImagesContainer=null;

let slideIndex = 0; /*Itt lehet beallitani hogy melyik keptol kezdodjon az animacio*/



nonWebProjects.forEach(project => {

    project.onclick=function(){
        galleryContainerBackground.style.display = "block";
        if(previousImagesContainer){
            previousImagesContainer.style.display = "none";
        }
        currentImagesContainer = document.getElementById(project.querySelector("#projectTitle").innerHTML);
        currentImagesContainer.style.display = "block";
        previousImagesContainer = currentImagesContainer;
         
        if(desktopGames.style.display == "block"){
            if(screen.width>1000){
                if(screen.height>500){
                    galleryContainer.style.width = "1000px";
                    galleryContainer.style.height = "500px";
                }else{
                    galleryContainer.style.width = screen.height*2 + "px";
                    galleryContainer.style.height = screen.height + "px";
                }
                
            }else{
                galleryContainer.style.width = screen.width + "px";
                galleryContainer.style.height = screen.width/2 + "px";
            }
            
            
        }else{
            console.log(screen.height)
            galleryContainer.style.width = "320px";
            if(screen.width>480 && screen.height>855){
                galleryContainer.style.width = "392px";
                galleryContainer.style.height = "682.6592px";
            }
            else if(screen.height>750){
                galleryContainer.style.height = 320*16/9 + "px"
            }else {
                galleryContainer.style.height = screen.height +"px";
                if(screen.height<320*16/9){
                    galleryContainer.style.width = screen.height*9/16 + "px";
                }
            }
            
        }
        
        initGallery();
    }
});

imageGalleryX.onclick=function(){
 
    galleryContainerBackground.style.display = "none";
    slides[slideIndex].style.display = "block";
    for (i = 0; i < slides.length; i++) {
        slides[i].className = "imageHolder";
       // slides[i].style.opacity=0;
     
    }
    
}

function initGallery(){
    slideIndex = 0;
    slides=currentImagesContainer.getElementsByClassName("imageHolder");
    if (slides.length > 0) {
        slides[0].style.display = "block";
        slides[0].style.opacity = "1";
        for(let i=1; i<slides.length; i++){
            slides[i].style.display = "none";
            
        }
        
      }

    if(slides.length<2){
        var nextPrevBtns=document.querySelector(".leftArrow,.rightArrow");
        nextPrevBtns.style.display="none";
        for (i = 0; i < nextPrevBtn.length; i++) {
            nextPrevBtn[i].style.display="none";
        }
    }

}

function plusSlides(n) {
    moveSlide(slideIndex+n);
}
function moveSlide(n){



    var i;
    var current,next;
    var moveSlideAnimClass={
          forCurrent:"",
          forNext:""
    };
    var slideTextAnimClass;
    if(n>slideIndex) {
        if(n >= slides.length){n=0;}
        moveSlideAnimClass.forCurrent="moveLeftCurrentSlide";
        moveSlideAnimClass.forNext="moveLeftNextSlide";
        slideTextAnimClass="slideTextFromTop";
    }else if(n<slideIndex){
        if(n<0){n=slides.length-1;}
        moveSlideAnimClass.forCurrent="moveRightCurrentSlide";
        moveSlideAnimClass.forNext="moveRightPrevSlide";
        slideTextAnimClass="slideTextFromBottom";
    }

    if(n!=slideIndex){
        next = slides[n];
        current=slides[slideIndex];
        for (i = 0; i < slides.length; i++) {
            slides[i].className = "imageHolder";
            slides[i].style.opacity=0;
         
        }
        current.classList.add(moveSlideAnimClass.forCurrent);
        next.classList.add(moveSlideAnimClass.forNext);
        slideIndex=n;
        if (slides.length > 0) {
            
            for(let i=0; i<slides.length; i++){
          
                    slides[i].style.display = "block";
                 
                
            }
            
            
          }
    }

}
