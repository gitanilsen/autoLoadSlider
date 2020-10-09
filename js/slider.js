// Preloader
let preloader = document.querySelector(".preloader");
function loading() {
  preloader.style.display = "none";
}

var slider = document.querySelector(".slider");
var sliderCon = document.querySelector(".slider-container");
var slides = document.querySelectorAll(".slides");
slides = Array.from(slides);
var currentSlide = 0;
console.log(slides.length);
setTimeout(()=>{

    setInterval(()=>{
        if(currentSlide == slides.length-1){
            slides[currentSlide].style.display = "none";    
            currentSlide = 0;
            slides[currentSlide].style.display = "block";
        }
        else{
        slides[currentSlide].style.display = "none";
        currentSlide++;
        console.log(currentSlide);
        slides[currentSlide].style.display = "block";
        }
    
    },2000)
    

},3000)
