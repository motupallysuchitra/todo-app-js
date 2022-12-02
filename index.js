let input = document.querySelector("#box");
let addTaskButton = document.getElementById("add-btn");
let addPriorityButton = document.querySelector("#add-priority-btn");
let deleteAllButton = document.getElementById("delete-all-btn");
let listItems = document.getElementById("lists");

addTaskButton.addEventListener("click", (event) => {
  if (input.value.trim() != "") {
    listItems.append(createItem());
  } else {
    alert("please add the tasks to the item");
  }
});

addPriorityButton.addEventListener("click", (event) => {
  if (input.value.trim() != "") {
    listItems.prepend(createItem());
  } else {
    alert("please add the tasks to the item");
  }
});

deleteAllButton.onclick = function () {
  var items = listItems.querySelectorAll(".todo");
  items.forEach((item) => {
    item.remove();
  });
};

let createItem = () => {
  let div = document.createElement("div");
  div.classList.add("todo");
  let li = document.createElement("li");
  li.classList.add("todo-item");
  li.appendChild(document.createTextNode(input.value));
  let completeButton = document.createElement("button");
  completeButton.appendChild(document.createTextNode("Completed"));
  completeButton.classList.add("complete-btn");
  let deleteButton = document.createElement("button");
  deleteButton.appendChild(document.createTextNode("Delete"));
  deleteButton.classList.add("delete-btn");
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  input.value = "";
  completeButton.onclick = function () {
    this.parentElement.style.opacity = "0.3";
  };
  deleteButton.onclick = function () {
    this.parentElement.remove();
  };
  return div;
};