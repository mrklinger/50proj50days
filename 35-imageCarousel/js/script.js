const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

// getting indivdual images. this will be a node list which you can grab index of image
const img = document.querySelectorAll("#imgs img");

let idx = 0;

// runs function "run" every 2 secs
let interval = setInterval(run, 2000);

// increases index by 1 and runs "change Image" function
function run() {
  idx++;
  changeImage();
}

// check if we are at beginning or end to reset index
// slide image over 500px
// use negative value so it slides correct direction
function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

//reset the automatic carousel change interval
function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

// creating event listeners and functionality for buttons
// reset 2 second interval on click so you don't disturb the carousel animation
rightBtn.addEventListener("click", () => {
  idx++;
  changeImage();
  resetInterval();
});

leftBtn.addEventListener("click", () => {
  idx--;
  changeImage();
  resetInterval();
});
