// JavaScript to manage todos

// Function to add a new todo
function addTodo() {
  const input = document.getElementById("inp");
  const todoText = input.value.trim();

  if (todoText === "") {
    alert("Please enter a todo!");
    return;
  }

  const todosContainer = document.getElementById("todos");

  // Create a todo div
  const todoDiv = document.createElement("div");

  // Create a todo title
  const todoTitle = document.createElement("h2");
  todoTitle.textContent = todoText;
  todoDiv.appendChild(todoTitle);

  // Create an Edit button
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.onclick = function () {
    editTodo(todoDiv, todoTitle);
  };
  todoDiv.appendChild(editButton);

  // Create a Delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = function () {
    deleteTodo(todoDiv);
  };
  todoDiv.appendChild(deleteButton);

  todosContainer.appendChild(todoDiv);

  // Clear the input field
  input.value = "";
}

// Function to delete a todo
function deleteTodo(todoDiv) {
  const todosContainer = document.getElementById("todos");
  todosContainer.removeChild(todoDiv);
}

// Function to edit a todo
function editTodo(todoDiv, todoTitle) {
  const newText = prompt("Edit your todo:", todoTitle.textContent);

  if (newText !== null) {
    const trimmedText = newText.trim();
    if (trimmedText === "") {
      alert("Todo cannot be empty!");
    } else {
      todoTitle.textContent = trimmedText;
    }
  }
}
