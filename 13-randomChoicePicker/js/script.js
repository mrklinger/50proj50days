const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
});

function createTags(input) {
  const tags = input
    .split(",") // splits elements into an array using the comma as a separator
    .filter((tag) => tag.trim() !== "") //  ignores empty strings
    .map((tag) => tag.trim()); // trims any white space on inputs

  tagsEl.innerHTML = ""; // clears tags off of page

  // creates a span element with class of tag using the text input array above
  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag; // creates text for each tag
    tagsEl.appendChild(tagEL);
  });
}
