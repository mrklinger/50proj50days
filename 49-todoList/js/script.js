const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

// need to JSON.parse back as an array/object - the info is stored as a string
const todos = JSON.parse(localStorage.getItem("todos"));

// if there are todos in local storage...loop through each one
if (todos) {
  todos.forEach((todo) => addTodo(todo));
}

// event on form submit (hitting enter)
form.addEventListener("submit", (e) => {
  // prevent form from having default behavior
  e.preventDefault();

  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;

  // if todo is passed in to the input, store in todoText
  if (todo) {
    todoText = todo.text;
  }

  // creat li if input is passed in
  if (todoText) {
    const todoEl = document.createElement("li");
    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }

    todoEl.innerText = todoText;

    // toggle completed class on click
    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed");
      updateLS();
    });

    //contextmenu is a right-click
    todoEl.addEventListener("contextmenu", (e) => {
      //default behavior is bringing up menu options
      e.preventDefault();

      // remove element from the DOM
      todoEl.remove();
      updateLS();
    });

    // add li to to the todos ul in the html
    todosUL.appendChild(todoEl);

    // clear input after submitting a ToDo
    input.value = "";

    updateLS();
  }
}

// running update Local Store whenever you add, complete, or remove a ToDo
function updateLS() {
  todosEl = document.querySelectorAll("li");

  const todos = [];

  // push on an object with each ToDo to the array
  todosEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains("completed"),
    });
  });

  // need to JSON to convert todos object or array to string
  localStorage.setItem("todos", JSON.stringify(todos));
}
