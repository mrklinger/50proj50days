const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");

listItems.forEach((item, idx) => {
  item.addEventListener("click", () => {
    hideAllContents();
    hideAllItems();

    // image and active class is added for selected item
    item.classList.add("active");
    contents[idx].classList.add("show");
  });
});

// hide img and remove active class from nav item on click.
function hideAllContents() {
  contents.forEach((content) => content.classList.remove("show"));
}

function hideAllItems() {
  listItems.forEach((item) => item.classList.remove("active"));
}
