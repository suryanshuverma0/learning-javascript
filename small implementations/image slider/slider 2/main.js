const images = document.querySelectorAll(".slider img");
const dots = document.querySelectorAll(".dot");
let index = 0;
let interval = 3000;

function changeSlider(n) {
  for (let i = 0; i < images.length; i++) {
    images[i].style.opacity = 0;
    dots[i].classList.remove("active");
  }
  index = n;
  images[index].style.opacity = 1;
  dots[index].classList.add("active");
}

function nextSlider() {
  index = index + 1;
  if (index >= images.length) {
    index = 0;
  }
  changeSlider(index);
}

var timer = setInterval(nextSlider,interval);
