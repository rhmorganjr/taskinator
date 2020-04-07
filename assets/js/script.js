let formE1 = document.querySelector("#task-form");
let tasksToDoE1 = document.querySelector("#tasks-to-do");


let createTaskHandler = function(event) {

  event.preventDefault();

  let listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
};

formE1.addEventListener("submit", createTaskHandler);