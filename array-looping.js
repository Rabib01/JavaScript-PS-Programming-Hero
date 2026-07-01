/*
const fruits = ['apple', 'bananas', 'watermelon', 'papaya', 'orange'];

// fruits.forEach((element, i) => {
    // console.log(`The element at array position ${i+1} is ${element}`);
// })

// Reverse an array
const reverseArray = [1, 2, 3, 4, 5];
const reversed = reverseArray.toReversed();
console.log(reversed);
console.log(reverseArray);

// sorting in ascending order

// Random practise

const sortArray = [24, 23, 29, 35, 26, 25, 26, 27];
sortArray.sort((a, b) => {
  return a - b;
});
console.log(sortArray);
const employees = [
  { designation: "Content-writer", salary: 18000 },
  { name: "Rabib", designation: "Software Developer", salary: 25000 },
  { name: "Habib", designation: "Digital Marketer", salary: 21000 },
];

// console.log(employees);
// const [{ name = "BKCD" }, , { name: name1 }] = employees;
// console.log(name, name1);

let employeeNameArray = [];

// keep the salaries of each employees in a single array
employees.forEach((employee) => {
  const name = employee.name ? employee.name : "Rakib";
  employeeNameArray.push(name);
});

console.log(employeeNameArray);
*/ const init = function () {
  const colors = ["red", "blue", "green", "yellow", "orange"];
  const reversed = colors.toReversed();
  console.log(reversed);

  // Get even numbers
  const numbers = [12, 98, 5, 41, 23, 78, 46];
  let evenNumbers = [];
  numbers.forEach((element) => {
    if (element % 2 == 0) {
      evenNumbers.push(element);
    }
  });
  evenNumbers.sort((a, b) => a - b);
  console.log(evenNumbers);

  // evenNumbers.sort((a, b) => { Conscise body vs block body implementation
  //  a - b;                      With braces we have to explicitly state return
  // });                          Without braces we can be flexible

  // ["Tom", "Tim", "Tin", "Tik"] -> ['TomTimTinTik']
  var names = ["Tom", "Tim", "Tin", "Tik"];
  console.log("".concat(...names));
  let result = "";

  // let concatedNameString = [];
  for (const name of names) {
    result += name;
  }
  // console.log(concatedNameString);
  console.log([result]);

  const statement = "I am a hard working person";
  const stringS = statement.split(" ").toReversed().join(" ");
  // const arrayS = stringS.join(" ");
  // console.log(arrayS);

  console.log(stringS);
  console.log("");

  const array1 = [1, 2, 3];
  let copyArray1 = [...array1]; // mmethod-1
  let copyArray1Method2 = Array.from(array1);
  copyArray1Method2[2] = 20;
  copyArray1[2] = 5;
  console.log(array1);
  console.log(copyArray1);
  console.log(copyArray1Method2);
  console.log("");

  const arrayOfObjects = [
    { name: "John", marks: 85 },
    { name: "Alice", marks: 90 },
  ];

  arrayOfObjects.forEach((element) => {
    console.log(`${element.name} scored ${element.marks}`);
  });
  const [{ name, marks }, { name: name1, marks: marks1 }] = arrayOfObjects;

  console.log("");
  console.log(`${name} scored ${marks}`);
  console.log(`${name1} scored ${marks1}`);

  //-End
};

init();
