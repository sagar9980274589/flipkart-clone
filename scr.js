<script>
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide() {
    // for (currentSlide; currentSlide <= slides.length-1; currentSlide++) 
 slides.forEach((slide, index ,slides) => {
   if (index === currentSlide) {
  
     slide[currentSlide].style.transform= `translateX( -100 * ${currentSlide}%)`;
    
        } else {
     slide.style.display = 'none';
   }
 });
}

function nextSlide() {
    currentSlide = (currentSlide + 1 ) % (slides.length);
    
   
 showSlide();

 
}
setInterval(nextSlide, 2000);
</script> 
