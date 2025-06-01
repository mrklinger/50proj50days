const screens = document.querySelectorAll(".screen");
const choose_insect_btns = document.querySelectorAll(".choose-insect-btn");
const start_btn = document.getElementById("start-btn");
const game_container = document.getElementById("game-container");
const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");
const message = document.getElementById("message");
let seconds = 0;
let score = 0;
// this will be object with img source and alt
let selected_insect = {};

////// SCREEN 1 //////

// change screen by clicking Start button
start_btn.addEventListener("click", () => screens[0].classList.add("up"));

////// SCREEN 2 //////

// loop through Choose Insect Buttons
choose_insect_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // getting img and attributes of selected insect
    const img = btn.querySelector("img");
    const src = img.getAttribute("src");
    const alt = img.getAttribute("alt");
    // set selected insect with info selected
    selected_insect = { src, alt };
    // change to screen 3
    screens[1].classList.add("up");
    // create insect and put on random place on screen
    setTimeout(createInsect, 1000);
    startGame();
  });
});

// game timer
// m = minutes, s = seconds
// functions are styling the m and s with ":05" etc.
function startGame() {
  setInterval(increaseTime, 1000);
}

function increaseTime() {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  timeEl.innerHTML = `Time: ${m}:${s}`;
  seconds++;
}

// Creating and inserting insect into DOM
function createInsect() {
  const insect = document.createElement("div");
  insect.classList.add("insect");
  // randomize location to place insect - destructure to get value of X and Y from getRandomLocation function
  const { x, y } = getRandomLocation();
  insect.style.top = `${y}px`;
  insect.style.left = `${x}px`;
  // adding img and alt info to div element (creating insect)
  // setting a random rotation to each new insect with inline style
  insect.innerHTML = `<img src="${selected_insect.src}" alt="${
    selected_insect.alt
  }" style="transform: rotate(${Math.random() * 360}deg)" />`;

  insect.addEventListener("click", catchInsect);

  game_container.appendChild(insect);
}

function getRandomLocation() {
  // window width and height
  const width = window.innerWidth;
  const height = window.innerHeight;
  // making sure insect will be fully visible within the screen
  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;
  return { x, y };
}

// removes insect from DOM once clicked
// this. adds class to selected insect
// need to include remove() to remove element from DOM instead of just disappear off screen
function catchInsect() {
  increaseScore();
  this.classList.add("caught");
  setTimeout(() => this.remove(), 2000);
  addInsects();
}

// adds 2 two insects after insect is clicked
function addInsects() {
  setTimeout(createInsect, 1000);
  setTimeout(createInsect, 1500);
}

// increasing Score and adding annoying message
function increaseScore() {
  score++;
  if (score > 19) {
    message.classList.add("visible");
  }
  scoreEl.innerHTML = `Score: ${score}`;
}
