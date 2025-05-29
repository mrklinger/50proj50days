const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");
let selectedRating = "Satisfied";

// using Event bubbling instead of a "For Each"
// e.target shows the element that you are clicking (can console log this to see it)
ratingsContainer.addEventListener("click", (e) => {
  if (
    // if parent of the selected item has rating class (so the box of the smiley face)
    e.target.parentNode.classList.contains("rating") &&
    e.target.nextElementSibling
  ) {
    removeActive();
    // add active class to the parent node (the box)
    e.target.parentNode.classList.add("active");
    // save rating text of selected smiley - the "small" element is a sibling to the smiley image
    selectedRating = e.target.nextElementSibling.innerHTML;
  } else if (
    e.target.parentNode.classList.contains("rating") &&
    e.target.previousSibling &&
    e.target.previousElementSibling.nodeName === "IMG"
  ) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.innerHTML;
  }
});

// changes panel contents on the click of the button
sendBtn.addEventListener("click", (e) => {
  panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `;
});

// remove active class on all the smiley boxes
function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}
