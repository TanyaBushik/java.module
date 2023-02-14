// const numbers = [5, 10, 15, 20, 25];

// for (let i = 0; i < numbers.length; i += 1) {
//     console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }

// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// // Анонімна стрілочна функція
// numbers.forEach((number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// });


const doMath = function (a, b, callback) {
    const result = callback(a, b);

    console.log(result);
}

doMath(2, 3, function (x, y) {
    return x + y;
});
doMath(10, 8, function (x, y) {
  return x - y;
});

