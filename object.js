//Object

const todo = [
  {
    id: 2,
    text: "Dentist App",
    isCompleted: false,
  },
  {
    id: 1,
    text: "Meeting ",
    isCompleted: false,
  },
];

// todo.sort((a, b) => {
//   return a.text < b.text ? -1 : a.text > b.text ? 1 : 0;
// });

// console.log(todo);

// const newArray = todo
//   .filter((d) => {
//     if (d.id === 2) return d;
//   })
//   .map((d) => {
//     return d.text;
//   });
// console.log(newArray);

// const newArray = todo.map((d) => {
//   return d.text;
// });
// console.log(newArray);

// const test = {
//   id: 2,
//   text: "Meeting ",
//   isCompleted: false,
// };

// for (const key in test) {
//   console.log(key, test[key]);
// }

// for (const iterator of todo) {
//   console.log(iterator);
// }

// let index = 0;
// do {
//   console.log(todo[index].text);
//   index++;
// } while (index < todo.length);

// let index = 0;
// while (index < todo.length) {
//   console.log(todo[index].text);
//   index++;
// }

// todo.forEach((element, index) => {
//   console.log(element.text, index);
// });

// for (let index = 0; index < todo.length; index++) {
//   const element = todo[index];
//   console.log(element.text);
// }
