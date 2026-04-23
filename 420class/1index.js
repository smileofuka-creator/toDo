//4 sarin 22 nii udur davtalt bodloguud

// let info = [
//   {
//     firstName: "Tom",
//     lastName: "Eric",
//     age: 26,
//     city: "Ulaanbaatar",
//   },
//   {
//     firstName: "Mandah",
//     lastName: "Duulian",
//     age: 35,
//     city: "LA",
//   },
//   {
//     firstName: "Lisa",
//     lastName: "Bat",
//     age: 54,
//     city: "Beijing",
//   },
// ];

// console.log(info);

// for (let i = 0; i < info.length; i++) {
//   console.log(info[i].firstName, info[i].city);
// }

// info.city = "";
// info.email = "test@gmail.com";

// let student = {
//   name: "Saraa",
//   age: 15,
//   grades: {
//     math: 95,
//     science: 63,
//     history: 90,
//   },
//   address: {
//     street: "3 gol office",
//     city: "Ulaanbaatar",
//     zip: 12342,
//   },
// };

// console.log(Object.keys(student));
// console.log(Object.values(student));

// student.email = "saraa@gmail.com";

// console.log(student);

// delete student.address.zip;
// console.log(student);

let todos = [
  {
    title: "hello world",
    isDone: false,
  },
  {
    title: "hool hiih",
    isDone: false,
  },
  {
    title: "hool hiih 2",
    isDone: false,
  },
  {
    title: "hool hiih 3",
    isDone: false,
  },
  {
    title: "hool hiih 4",
    isDone: false,
  },
  {
    title: "hool hiih 5",
    isDone: false,
  },
];

todos[1].isDone = true;

function changeIsDone(index) {
  todos[index].isDone = true;
}

function createTodo(title) {
  todos.push({ title: title, isDone: false });
}

function removeTodo(index) {
  let newArray = [];
  for (let i = 0; i < todos.length; i++) {
    if (i === index) {
      console.log("skipped");
    } else {
      newArray.push(todos[i]);
    }
  }
  todos = newArray;
}

function filterByIsDone() {
  let done = [];
  let incomplete = [];
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].isDone === true) {
      done.push(todos[i]);
    } else {
      incomplete.push(todos[i]);
    }
  }
  console.log(done, incomplete);
  console.log("done tasks : ", done.length);
  console.log("incomplete tasks : ", incomplete.length);
}

changeIsDone(3);
createTodo("hicheel orno");
changeIsDone(todos.length - 1);
removeTodo(todos.length - 3);
filterByIsDone();
console.log(todos);
