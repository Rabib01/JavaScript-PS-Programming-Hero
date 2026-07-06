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
  // Module 19
  
  const addNumbers = function (...numbers) {
    let result = 0;
    numbers.forEach((number) => {
      result += number;
    });
    console.log(`${result}`);
  };

  addNumbers(1, 2, 3, 4, 5);

  // Function Tasls:https://github.com/ProgrammingHero1/js-function-practice-tasks
  // Multiply four numbers and then return the result
  const multiplyNumbers = function (...numbers) {
    let result = 1;
    numbers.forEach((number) => {
      result *= number;
    });
    console.log(`${result}`);
  };
  // Taake a nnumber.if odd multiply by 2. if even dividde by 2
  
  const takeNumberFunction = function (number) {
    const result = number % 2 === 0 ? number / 2 : number * 2;
    console.log(result);
  };
  console.log("");

  // Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
  const make_avg = function (numbers, size) {
    let sum = 0;
    numbers.forEach((number) => (sum += number));
    const avg = sum / size;
    console.log(avg);
  };
  const toAverage = [21, 22, 23, 24, 25];
  const toAverage1 = [22, 2222, 2323, 2234, 25];
  const toAverage2 = [21, 222, 223323, 22234, 223235];
  const toAverage3 = [21, 222, 223, 242, 25];
  make_avg(toAverage, toAverage.length);
  make_avg(toAverage2, toAverage.length);
  make_avg(toAverage3, toAverage.length);
  make_avg(toAverage1, toAverage.length);
  console.log("");

  console.log("");
  console.log("");
  multiplyNumbers(2, 2, 2, 2);
  takeNumberFunction(2);
  takeNumberFunction(5);
  takeNumberFunction(0);
  takeNumberFunction(1);
  
  // ..Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string./
  
  console.log("");
  console.log("");
  
  const takeBinaryToCountZeroes = function (binaryString) {
    let counter = 0;
    const numberOfZeroes = binaryString
    .split("") // array of chars
    .map((number) => +number) // type coersion to a single array with nubers
    .forEach((number) => {
      // count the number of zeroes
      if (number === 0) {
        counter++;
      }
    });
    console.log(counter);
  };
  takeBinaryToCountZeroes("1000101000101");
  console.log("");
  console.log("");

  // Module 20 Starts here 
  console.log("");
  console.log("module - 21");
  console.log("");
  console.log("");
  
  // convert inch to feet and miles to kilometer
  const inch2Feet = function (number) {
    const remainderInch = number % 12;
    const feet = Math.floor(number / 12);
    console.log(`${feet} feet ${remainderInch} inches`);
  };
  inch2Feet(70);
  
  //miles to kilometer
  const miles2Kilometer = function (number) {
    const kilometers = (number * 1.60934).toFixed(2);
    return kilometers;
  };

  console.log(`${miles2Kilometer(25)} kilometers`);

  // leap year
  
   //Those years that are !divisible by 100, if the year is divisible by 4
   //Years that are both divisble by 100 and 400
  //
  
 const leapYear = function (year) {
   if (year % 4 === 0 && year % 100 !== 0) {
     return true;
    }
    if (year % 100 === 0 && year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  };

  // average of oddnumbers in an array
  const array = [42, 13, 58, 65, 81];
  
  const averageOddNumbers = function (number) {
    let counter = 0;
    let sum = 0;
    array.map((element) => {
      if (element % 2 === 1) {
        sum += element;
        counter++;
      }
    });
    console.log(`The sum is ${sum} and average is ${sum / counter}`);
  };
  
  averageOddNumbers([42, 13, 58, 65, 81]);

  const removeDuplicate = function (array) {
    const uniqueArray = [...new Set(array)];
    console.log(uniqueArray);
    // doing `${uniqueArray}` converts the entire thing into a string
  };
  
  removeDuplicate([1, 2, 3, 3, 4, 4, 4, 5]);
  
  const bestRandomNumberGenerator = function (min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNumber);
  };
  bestRandomNumberGenerator(30, 32);
  
  // swapping without temporary variables
  let x = 5,
  y = 7;
  [x, y] = [y, x];
  console.log(x, y);
  //  Module 20 ends here 
  */ const init = function () {
  // Module 21 starts here

  const maxNumberFunction = function (...numbers) {
    // using math.max
    const maximum = Math.max(...numbers);
    // console.log(maximum);

    // deep copy of array
    const arrayDeepCopy = JSON.parse(JSON.stringify(numbers));
    // console.log(arrayDeepCopy);

    // using ascending sort
    const sort = numbers.sort((a, b) => a - b).pop();
    console.log(sort);

    //using stupid logic -1 [10,2,30,5] compares10 with 9
    // let maxNumber = 0;
    // arrayDeepCopy.forEach((element, i, arr) => {
    //   if (arr[i] > arr[i] - 1) {
    //     maxNumber = element;
    //   }
    // });

    // // using stupid logic 2 again compares 10 with 9
    // arrayDeepCopy.forEach((element, i, arr) => {
    //   if (element > element - 1) {
    //     maxNumber = element;
    //   }
    // });

    // // using stupid logic-3 compares 10[0] with 2[1] which is stupidest of all
    // arrayDeepCopy.forEach((element, i, arr) => {
    //   if (element[i] > element[i] - 1) {
    //     maxNumber = element;
    //   }
    // });

    // using advanced stupid logic. comparing the next element with the previousone [10, 8, 5] would give 8 as answer
    // arrayDeepCopy.forEach((element, i, arr) => {
    //   maxNumber = arr[i];
    //   if (arr[i + 1] > arr[i]) {
    //     maxNumber = arr[i + 1];
    //   }
    // });

    // advanced stupid logic 2 : [1,2,3,4] gives undefined as last element is compared with arr.length, and 1 > 2 , 2 > 3, 3> 4
    // will try to solve this later
    maxNumber = arrayDeepCopy[0];
    arrayDeepCopy.forEach((element, i, arr) => {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        maxNumber = arr[i + 1];
      } else {
        if (arr[i + 1] > arr[i]) {
          let temp = arr[i];
          arr[i + 1] = arr[i];
          arr[i] = temp;
          maxNumber = arr[i + 1];
        }
      }
    });

    console.log(maxNumber);

    // if I wanted the sorted array
    // const sort = numbers.sort((a, b) => a - b);
  };

  // maxNumberFunction(56, 22, 21, 23, 29, 32, 22, 24, 55, 52, 57, 53);
  // console.log("");
  // console.log("");
  // maxNumberFunction(1, 2, 3, 4);
  // const array1 = [22, 23, 24];
  // console.log(array1[-1]);

  const phones = [
    { brand: "samsung", price: 21000, color: "black", quantity: 5 },
    { brand: "xiaomi", price: 12000, color: "black", quantity: 3 },
    { brand: "iPhone", price: 210000, color: "black", quantity: 4 },
    { brand: "pixel", price: 34000, color: "black", quantity: 2 },
    { brand: "nothing", price: 32000, color: "black", quantity: 1 },
  ];

  const findTheCheapestPhoneFunction = function (array) {
    let lowestPrice = array[0].price;
    let brand = array[0].brand;
    // console.log(lowestPrice);

    array.forEach((element, i, arr) => {
      // console.log(element, i, arr);
      if (arr[i].price < array[0].price) {
        lowestPrice = arr[i].price;
        brand = arr[i].brand;
      }
    });
    console.log(
      `The cheapest phone is ${lowestPrice} and the brand is ${brand}`,
    );
  };
  const findTheExpensicePhoneFunction = function (array) {
    let highestPrice = array[0].price;
    let brand = array[0].brand;
    // console.log(highestPrice);

    array.forEach((element, i, arr) => {
      // console.log(element, i, arr);
      if (arr[i].price > array[0].price) {
        highestPrice = arr[i].price;
        brand = arr[i].brand;
      }
    });
    console.log(
      `The cheapest phone is ${highestPrice} and the brand is ${brand}`,
    );
  };

  const findTheTotalInCart = function (array) {
    let sum = 0;
    console.log(array, sum);
    array.forEach((element, i, arr) => {
      console.log(element, i, arr);
      sum += arr[i].price * arr[i].quantity;
    });
    console.log(`The total expense for this shopping cart is : ${sum}`);
  };

  findTheCheapestPhoneFunction(phones);
  findTheExpensicePhoneFunction(phones);
  findTheTotalInCart(phones);

  // Problem tasks:
  //https://github.com/ProgrammingHero1/js-problems-part2-practice-tasks

  //Find the lowest number in the array below.
  const heights2 = [167, 190, 20, 165, 137];
  const lowestHeightDetector = function (array) {
    let lowestHeight = array[0];
    heights2.forEach((element, i, arr) => {
      if (arr[i] < lowestHeight) {
        lowestHeight = arr[i];
      }
    });
    console.log(`lowest height is ${lowestHeight}`);
  };
  lowestHeightDetector(heights2);

  // Find the friend with the smallest name.

  // Module 21 ends here

  // end

  //-End
};

init();
