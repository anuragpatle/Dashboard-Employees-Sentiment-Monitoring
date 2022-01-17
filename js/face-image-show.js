var slideIndex = 0;
showSlides();

async function showSlides() {
//   console.log("function start");
  var i;
  var slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  slides[slideIndex - 1].style.display = "block";
  //   await sleep(3000);

  //   console.log("function end");

  setTimeout(showSlides, getRandomNumberBetween(4, 8) * 1000); // Change image every 2 seconds
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}