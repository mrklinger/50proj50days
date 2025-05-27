const boxesContainer = document.getElementById("boxes");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => boxesContainer.classList.toggle("big"));

// creating 16 boxes with double For loop
function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      // remember to only use camel case
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      //insert the divs into the container
      boxesContainer.appendChild(box);
    }
  }
}

createBoxes();
