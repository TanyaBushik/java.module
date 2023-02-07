// function makeArray(firstArray, secondArray, maxLength) {

//     const newArray = firstArray.concat(secondArray);
    

//   if (newArray.length > maxLength) {
//    return newArray.slice(0, maxLength);
//     }
//     return newArray;
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));


// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }

// const logins = ['4mango44dff', 'kif5wivdsds4', 'polydfg5555', 'ajaxfgg544']

// const findLogin = function (allLogins, loginToFind) {
    // for (const login of allLogins) {
    //     if (login === loginToFind) {
    //         return `Пользователь ${loginToFind} найден.`
    //     }
    // }
    // return `Пользователь ${loginToFind} не найден.`;

//     const findLogin = function (allLogins, loginToFind) {
//       return allLogins.includes(loginToFind)
//         ? `Пользователь ${loginToFind} найден.`
//         : `Пользователь ${loginToFind} не найден.`;
//     };

// console.log(findLogin(logins, "avocod365o"));
// console.log(findLogin(logins, "kif5wivdsds4"));
// console.log(findLogin(logins, "jamdlo586"));
// console.log(findLogin(logins, "polydfg5555"));

// function calculateTotal(number) {
//   // Change code below this line

//   let sum = 0;

//   for (let i = 0; i <= number; i += 1){
//      sum += i;
//   }
//   return sum;
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));
// console.log(calculateTotal());


// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i +=1 ) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

// function calculateTotalPrice(order) {

//   let total = 0;

//   for (let i = 0; i < order.length; i += 1){
//     console.log(order[i]);
//     total += order[i];
//   }
 
//   return  total;
  
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));


// function findLongestWord(string) {
 
//   const arraySplit = string.split(" ");
//   let longestWord = " ";

//   for (const word of arraySplit) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));
// console.log(findLongestWord());


// function findLongestWord(string) {

// return string.split(' ').reduce((a, b) => (b.length > a.length) ? b : a);
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));


// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i++) {
//    numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));


// function filterArray(numbers, value) {

//  const valueNumbers = [];

//   for (let number of numbers) {

//     if (number > value) {
//      valueNumbers.push(number);
//    }
//   }
//   return valueNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// function checkFruit(fruit) {

//   const fruits = ["apple", "plum", "pear", "orange"];

//     return fruits.includes(fruit);
// }
// console.log(checkFruit("plum"));
// console.log(checkFruit("mandarin"));
// console.log(checkFruit("pear"));


// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let commonArray = [];

//   for (const array of array1) {

//     if (array2.includes(array)) {
//       commonArray.push(array);
//     }
//   }
//  return commonArray;
//   // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));


// function calculateTotalPrice(order) {
//   let total = 0;
  
//   for (const number of order) {
//   total += number;
//   }

//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));


// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const number of numbers) {

//   if (number > value) {
//         filteredNumbers.push(number);
//       }
//     }

//   return filteredNumbers;
//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));


// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;

// function getEvenNumbers(start, end) {

//   const evenNumbers =[];

//   for (let i = start; i <= end; i++) {
     
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }
// return evenNumbers;
// }
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));


// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = 10;
//     break;
//   }
// }

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }

//   return number;
//   // Change code above this line
// }
// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));
// console.log(findNumber(16, 35, 7));


// function includes(array, value) {

//   for (const number of array) {
//     if (number === value) {
//        return true;
//     }
//   }
//   return false;
// }
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(
//   includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")
// );
// console.log(
//   includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")
// );
// console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));