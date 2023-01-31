// const logins = ['mango5478965', 'kiwi554445', 'poly565556545', 'ajex47kjfjf']
// const loginToFind = 'poly565556545';
// let message = `Пользователь ${loginToFind} не найден`;

// for (let i = 0; i < logins.length; i += 1){
//     const login = logins[i];

//     console.log('Login:', login);
//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден`;
//         break;
//     }
// }
// console.log(message);

// for (const login of logins) {
//     console.log("Login:", login);
//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден`;
//         break;
//     }
// }

// console.log(message);

// const message = logins.includes(loginToFind)
//   ? `Пользователь ${loginToFind} найден`
//   : `Пользователь ${loginToFind} не найден`;

// console.log(message);


//  написать скрипт выбора самого маленького числа
// const numbers = [51, 25, 89, 68, 14, 36, 7, 58, 15]
// let smallestNumber = numbers[0];

// for (const number of numbers) {
 
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }
//  console.log('Smallest Number: ', smallestNumber);

// написать скрипт выбора самого big числа
// const numbers = [51, 25, 89, 68, 14, 36, 7, 58, 15]
// let biggestNumber = numbers[0];

// for (const number of numbers) {
    
//     if (number > biggestNumber) {
//       biggestNumber = number;
//     }
// }
// console.log(biggestNumber);


// сшить массив в строку

// const friends = ['Mango', 'Poly', 'Kiwi', 'Alex']

// const string = friends.join(',');
// console.log(string);

// строку "JavaScript" сделать "jAVAsCRIPT"

// const string = "JavaScript";
// const letters = string.split('');
// let invertedString = '';

// for (const letter of letters) {

    // if (letter === letter.toLowerCase()){
    // invertedString += letter.toUpperCase();

    // } else {
    // invertedString += letter.toLowerCase();
    // }

//     invertedString +=
//         letter === letter.toLowerCase()
//             ? letter.toUpperCase()
//             : letter.toLowerCase();
// }

// console.log(invertedString);


// разделить  строку дефисами
//     const title = 'Top 10 benefits of React framewor';

//     const normalizedTitle = title.toLowerCase();

//     const words = normalizedTitle.split(' ');
//     // console.log(words);

// const slug = words.join('-');

// // console.log(slug);

// const slug1 = title.toLowerCase().split(" ").join("-");
// console.log(slug1);

// сшить 2 массива
// const line1 = [1, 3, 5, 9, 15];
// const line2 = [3, 8, 6, 9, 17, 25, 65];
// let total = 0;

// const numbers = line1.concat(line2);
// for (const number of numbers) {
//     // total = total + number;
//     total += number;
// }
// console.log(total);


function slugify(title) {
  // Change code below this line

    const normalizedTitle = title.toLowerCase();
    console.log(normalizedTitle);
    const words = normalizedTitle.split(" ");
     console.log(words);
    const slugify = words.join("-");
    console.log(slugify);

  // Change code above this line
}
console.log(slugify("Arrays for begginers"));