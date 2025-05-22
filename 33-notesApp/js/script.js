const addBtn = document.getElementById("add");

const notes = JSON.parse(localStorage.getItem("notes"));

// if theres notes in local storage, then loop and add new note to DOM
if (notes) {
  notes.forEach((note) => addNewNote(note));
}

// run addNeNote function on click on button
addBtn.addEventListener("click", () => addNewNote());

// create HTML for Note
// takes in optional Text argument, empty by default
// "If there's text, have no class, otherwise have hidden class"
function addNewNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `;

  const editBtn = note.querySelector(".edit");
  const deleteBtn = note.querySelector(".delete");
  const main = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  // text area has a value because it's text.
  // main is a div so it has innerHTML
  textArea.value = text;
  main.innerHTML = marked(text);

  // remove note from DOM on click
  deleteBtn.addEventListener("click", () => {
    note.remove();

    updateLS();
  });

  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  // listen for input on text area
  // use destructuring to pull out value from e.target
  textArea.addEventListener("input", (e) => {
    const { value } = e.target;

    main.innerHTML = marked(value);

    updateLS();
  });

  document.body.appendChild(note);
}

//update local storage function
function updateLS() {
  const notesText = document.querySelectorAll("textarea");

  const notes = [];

  // for each note, add the value to the array
  notesText.forEach((note) => notes.push(note.value));

  localStorage.setItem("notes", JSON.stringify(notes));
}
