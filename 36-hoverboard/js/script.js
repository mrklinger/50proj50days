const container = document.getElementById("container");
// creating array of colors
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
//variable for the amount of squares we want
const SQUARES = 500;

// creating squares
for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));

  square.addEventListener("mouseout", () => removeColor(square));

  //insert div element with square class into the container
  container.appendChild(square);
}

// square is getting passed in as the element
function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}

// get random index of color
// Math.floor rounds down
// multiply by length of array to get value between 0-4
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
