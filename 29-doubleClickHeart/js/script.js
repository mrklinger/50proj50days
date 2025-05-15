const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let clickTime = 0;
let timesClicked = 0;

// creating our own double click event instead of using "dblclick"
loveMe.addEventListener("click", (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

const createHeart = (e) => {
  // can create any kind of element here -- creating an "i" element
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  const x = e.clientX; // gives X and Y position of click
  const y = e.clientY;

  // getting offset from image to get position within the image
  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  // X and Y positions within the image
  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);

  times.innerHTML = ++timesClicked;

  // removing hearts from console after 1s so they don't stay in program
  setTimeout(() => heart.remove(), 1000);
};
