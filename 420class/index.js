let input = document.getElementById("inputText");
let container = document.getElementById("container");

let tasks = [];
let filter = "";

function mybutton() {
  if (input.value.trim() === "") return;
  tasks.push({ tasklist: input.value, isComplete: false });
  input.value = "";
  renderTasks();
}

function renderTasks() {
  container.innerHTML = "";

  if (tasks.length === 0) {
    container.innerText = "No tasks yet. Add one above!";
    return;
  }

  for (let i = 0; i < tasks.length; i++) {
    if (filter === "active" && tasks[i].isComplete === true) continue;
    if (filter === "completed" && tasks[i].isComplete === false) continue;

    let task = tasks[i];

    let item = document.createElement("div");
    item.className = "taskItem";

    let itemStyle = document.createElement("div");
    itemStyle.className = "itemStyle";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.isComplete;
    // checkbox.addEventListener("click", function () {});

    checkbox.onchange = () => {
      task.isComplete = checkbox.checked;

      renderTasks();
    };

    let taskName = document.createElement("p");
    taskName.textContent = task.tasklist;

    let remove = document.createElement("button");
    remove.textContent = "Delete";

    remove.onclick = function () {
      tasks.splice(i, 1);
      renderTasks();
    };

    itemStyle.appendChild(checkbox);
    itemStyle.appendChild(taskName);
    item.appendChild(itemStyle);
    item.appendChild(remove);

    container.appendChild(item);
  }
}

//ungu oruulah heseg
let tab1 = document.getElementsByClassName("tab1")[0];
let tab2 = document.getElementsByClassName("tab2")[0];
let tab3 = document.getElementsByClassName("tab3")[0];

function showAll() {
  filter = "";
  renderTasks();
  tab1.style.backgroundColor = "#3c82f6";
  tab1.style.color = "white";
  tab2.style.backgroundColor = "white";
  tab2.style.color = "black";
  tab3.style.backgroundColor = "white";
  tab3.style.color = "black";
  currentFilter = "all";
}

function showActive() {
  filter = "active";
  renderTasks();
  tab2.style.backgroundColor = "#3c82f6";
  tab2.style.color = "white";
  tab1.style.backgroundColor = "white";
  tab1.style.color = "black";
  tab3.style.backgroundColor = "white";
  tab3.style.color = "black";
  currentFilter = "active";
}

function showCompleted() {
  filter = "completed";
  renderTasks();
  tab3.style.backgroundColor = "#3c82f6";
  tab3.style.color = "white";
  tab1.style.backgroundColor = "white";
  tab1.style.color = "black";
  tab2.style.backgroundColor = "white";
  tab2.style.color = "black";
  currentFilter = "completed";
}

// let me = {
//   firstName: "Batbayar",
//   LastName: "Halo",
//   age: "50",
//   hobby: []
// };

// console.log(me.LastName);

// let persona = [
//   {
//     age: 13,
//     name: "btoa",
//     phoneNumber: 88839483,
//     gender: "male",
//   },
//   {
//     age: 42,
//     name: "Lisa",
//     phoneNumber: 53635465346,
//     gender: "female",
//   },
//   {
//     age: 45,
//     name: "btoa",
//     phoneNumber: 67365365436,
//     gender: "male",
//   },
//   {
//     age: 325325,
//     name: "Tina",
//     phoneNumber: 768548546,
//     gender: "female",
//   },
//   {
//     age: 32,
//     name: "Modun",
//     phoneNumber: 875648765,
//     gender: "male",
//   },
// ];

// for (let i = 0; i < persona.length; i++) {
//   if (persona[i].gender === "male") {
//     console.log(persona[i]);
//   let y =
// for(let j = 0; j<)}

// }
