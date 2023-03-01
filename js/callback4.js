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

// const doMath = function (a, b, callback) {
//     const result = callback(a, b);

//     console.log(result);
// }

// doMath(2, 3, function (x, y) {
//     return x + y;
// });
// doMath(10, 8, function (x, y) {
//   return x - y;
// });

// const filter = function (array, test) {
//   const filteredArray = [];

//   for (const el of array) {
//     console.log(el);
//     const passed = test(el);

//     if (passed) {
//       filteredArray.push(el);
//     }
//   }
//   return filteredArray;
// };

// const fruits = [
//   { name: "apple", quantity: 200, isFresh: true },
//   { name: "grapes", quantity: 150, isFresh: false },
//   { name: "bananas", quantity: 100, isFresh: true },
// ];

// const getFruitsWithQuantity = function (fruit) {
//   return fruit.quantity >= 120;
// }

// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3);

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }

// const result = makePizza();
// const pointer = makePizza;

// console.log(result);
// console.log(pointer);

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Change code below this line
// function makeMessage(pizzaName, callback) {
//      return callback(pizzaName);
//   }

// console.log(makeMessage("Royal Grand", makePizza));

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {

//     if (this.pizzas.includes(pizzaName)) {
//       return makePizza(pizzaName);
//     }
//     return onOrderError(
//       `There is no pizza with a name ${pizzaName} in the assortment.`
//     );
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function(number) {
//     totalPrice += number;
//   });

//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach(function(number) {
//     if (secondArray.includes(number)) {
//       commonElements.push(number);
//     }
//   });

//   return commonElements;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newEven = [];

//   numbers.forEach(element => {
//     if (element % 2 === 0) {
//       element += value;
//     }
//     newEven.push(element);
//   });
// return newEven;
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map((planet) => planet.length);

// console.log(planetsLengths);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];

// const genres = books.flatMap((book) => book.genres);

// const getUserNames = (users) => {
//   const names = users.map((user) => user.name);
//   return names;
// };

// // верхняя и нижняя функции одинаковые , запись разная

// const getUserEmails = (users) => users.map((user) => user.email);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap((book) => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genre, index, array) => array.indexOf(genre) === index
// );

// const getFriends = (users) => {
//   const allFriends = users.flatMap((user) => user.friends);

//   const uniqueFriends = allFriends.filter(
//     (friend, index, array) => array.indexOf(friend) === index
//   );

//   return uniqueFriends;
// };

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// console.log(tags);

// const getTags = (tweets) =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// console.log(getTags(tweets));

// const getTags = (tweets) =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);

// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// const countTags = (tags) => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   return total + player.playtime / player.gamesPlayed;
// }, 0);
// //  одинаковые, просто с {} and return
// const totalAveragePlaytimePerGame = players.reduce(
//   (total, player) => total + player.playtime / player.gamesPlayed, 0);

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];
// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// console.log(tags);

// const getTags = (tweets) =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// console.log(getTags(tweets));

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: 'Chelsy', timePlayed: 80, points:48, online: true },
// ];

// const playerNames = players.map((player) => player.name);
// console.log("playerNames :", playerNames);

// const playerId = players.map((player) => player.id);
// console.log("playerId :", playerId);

// const result = players.map(player => {
//   return {
//     name: player.name,
//     online: player.online,
//   };
// });
// console.log("result :", result);

// const playerIdToUpdate = "player-3";

// const updatedPlayer = players.map(player => playerIdToUpdate === player.id
// ? { ...player, timePlayed: player.timePlayed + 100 }
//   : player,
// );
// console.log(updatedPlayer);

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 80,
// };
// const totalSalary = Object.values(salary).reduce(
//   (total, value) => total + value,
//   0
// );
// console.log(totalSalary);

//  const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: 'Chelsy', timePlayed: 80, points:48, online: true },
// ];

// const totalTimePlayed = players.reduce(
//   (total, player) => total + player.timePlayed,
//   0,
// );
// console.log(totalTimePlayed);

// const cart = [
//   { label: "Apples", price: 100, quantity: 2 },
//   { label: "Bananas", price: 120, quantity: 3 },
//   { label: "Lemons", price: 70, quantity: 4 },
// ];
// const totalAmount = cart.reduce(
//   (total, {price, quantity}) => total + price * quantity,
//   0
// );
// console.log(totalAmount);

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const stats = tweets
//   .flatMap(tweet => tweet.tags)
//   .reduce(
//     (acc, tag) => ({
//       ...acc,
//       [tag]: acc[tag] ? acc[tag] + 1 : 1,
//     }),
//     {}
//   );

// console.log(stats);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: [
//       "Jacklyn Lucas",
//       "Linda Chapman",
//       "Adrian Cross",
//       "Solomon Fokes",
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const getTotalBalanceByGender = (users, gender) =>
//   [...users]
//     .filter((user) => user.gender === gender)
//     .reduce((acc, user) => acc + user.balance, 0);

//     console.log(getTotalBalanceByGender);

// const arr = [5, 6, 7, 8, 9];
// const sum = 0;
// const totalArr = arr.forEach(elem)

// console.log(sum);

const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

// const getModels = cars => cars.map((car) => car.model);
// console.log(getModels(cars));

//? Example 2 - Метод map
// Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним значенням
//властивості price залежно від переданої знижки.

// const makeCarsWithDiscount = (cars, discount) =>
//   cars.map((car) => ({ ...car, price: car.price * (1 - discount) }));

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//? Example 5 - Метод filter
// Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається
// зі значенням параметра type.

// const getCarsWithType = (cars, type) => cars.filter(car => car.type === type);

// console.table(getCarsWithType(cars, "suv"));
// console.table(getCarsWithType(cars, "sedan"));

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//? Example 6 - Метод find

// const getCarByModel = (cars, model) => cars.find(car => car.model === model);

// console.table(getCarByModel(cars, "F-150"));
// console.table(getCarByModel(cars, "CX-9"));

//? Example 7 - Метод sort
// Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований за
// зростанням значення властивості amount.

// const sortByDescendingPrice = (cars) => [...cars].sort((a, b) => a.amount - b.amount);

//   console.table(sortByDescendingPrice(cars));

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//? Example 8 - Метод sort
// Нехай функція sortByDescendingPrice повертає новий масив автомобілів відсортований
// за зменшенням значення властивості price.

// const sortByDescendingPrice = cars => [...cars].sort((a, b) => b.price - a.price);

// console.table(sortByDescendingPrice(cars));

//? Example 9 - Метод sort
// Нехай функція sortByModel повертає новий масив автомобілів відсортований за
// назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від
// значення параметра order.

// const sortByModel = (cars, order) =>
//   [...cars].sort((a, b) => {
//     switch (order) {
//       case "asc":
//         return a.model.localeCompare(b.model);
//       case "desc":
//         return b.model.localeCompare(a.model);
//     }
//   });

// const sortByModel = (cars, order) =>
//   [...cars].sort((a, b) =>
//     order === "asc"
//       ? a.model.localeCompare(b.model)
//       : b.model.localeCompare(a.model)
//   );

// console.table(sortByModel(cars, "asc"));
// console.table(sortByModel(cars, "desc"));

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//? Example 10 - Метод reduce
// Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення
// властивостей amount).

// const getTotalAmount = (cars) => cars.reduce((acc, car) => acc + car.amount, 0);

// const getTotalAmount = (cars) => cars.reduce((acc, {amount}) => acc + amount, 0);

// console.log(getTotalAmount(cars));

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//? Example 11 - Ланцюжки методів
// Нехай функція getAvailableCarNames повертає масив моделей автомобілів, але тільки 
// тих, які зараз на розпродажі.

// const getModelsOnSale = (cars) => cars.filter(({onSale}) => onSale)
//   .map(({model}) => model);

// console.table(getModelsOnSale(cars));

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//? Example 12 - Ланцюжки методів
// Нехай функція getSortedCarsOnSale повертає масив автомобілів на розпродажі
// (Властивість onSale), відсортованих за зростанням ціни.

// const getSortedCarsOnSale = (cars) => cars.filter(({ onSale }) => onSale)
//   .sort((a, b) => a.price - b.price);

//   console.table(getSortedCarsOnSale(cars));