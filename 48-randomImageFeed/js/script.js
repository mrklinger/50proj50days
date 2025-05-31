const container = document.querySelector(".container");
// random unsplash URL no longer works
const unsplashURL = "https://source.unsplash.com/random/";
const rows = 5;

// multiply by 3 because we want 3 images per row
for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement("img");
  img.src = `${unsplashURL}${getRandomSize()}`;
  container.appendChild(img);
}

// gets random combinations of 302x306 and such
function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`;
}

// want number between 300-310
// round down => Math.floor
// Math.random gets random decimal
function getRandomNr() {
  return Math.floor(Math.random() * 10) + 300;
}
