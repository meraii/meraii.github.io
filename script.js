const slide = document.querySelector("#slide");
let slideNum = 1;

//calculates where the next slide movement will be for a left click
function slideLeft() {
  slideNum--;
  if (slideNum < 1) slideNum = 3;
  updateSlide();
}
//calculates where the next slide movement will be for a right click
function slideRight() {
  slideNum++;
  if (slideNum > 3) slideNum = 1;
  updateSlide();
}
// Updates slide based on what slide you are on
function updateSlide() {
  if (slideNum === 1) {
    slide.style.backgroundImage = "url(images/slide1.png)";
  }
  if (slideNum === 2) {
    slide.style.backgroundImage = "url(images/slide2.png)";
  }
  if (slideNum === 3) {
    slide.style.backgroundImage = "url(images/slide3.png)";
  }
}
