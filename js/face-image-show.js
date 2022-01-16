var slideIndex = 0;
showSlides();

async function showSlides() {
//   console.log("function start");
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  //   await sleep(3000);

  //   console.log("function end");

  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
