// class StringBuilder {
//   constructor (initialValue) {
//     this.value = initialValue;
//     }
    
// getValue() {
//   return this.value;
//     }
    
//   padEnd(str) {
//     this.value = this.value + str;
//     }
    
// padStart(str) {
//    this.value = str + this.value;
//     }
    
// padBoth(str) {
//     this.value = str + this.value + str;
//     }
    
// }


// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// class Car {

//   static MAX_PRICE = {
//     price: "50000",
//   };

//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.MAX_PRICE.price) {
//       this.#price = newPrice;
//     }
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// !!!!!!!!!!!!!!!!!!!!!!!!!!!

// class Hero {
//   constructor(name = 'hero', xp = 0) {
//     this.name = name;
//     this.xp = xp;
//   }
  
//   gainXp(amount) {
//     console.log(`${this.name} gets ${amount} experience`)
//     this.xp += amount;
//   }
// }

// class Warrior extends Hero {
//   constructor(name, xp, weapon) {
//     super(name, xp);

//     this.weapon = weapon;
//   }
// }

// const mango = new Warrior('mango', 1000, 'арбалет');

// console.log(mango);

// mango.gainXp(1000)

// !!!!!!!!!!!!!!!!!!!!!!!!!!!

//* Example 1 - Майстерня коштовностей
// Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і
// розраховує та повертає загальну вартість каменів з таким ім'ям, ціною
// та кількістю з властивості stones.

// const chopShop = {
//     stones: [
//         { name: "Emerald", price: 1300, quantity: 4 },
//         { name: "Diamond", price: 2700, quantity: 3 },
//         { name: "Sapphire", price: 1400, quantity: 7 },
//         { name: "Ruby", price: 800, quantity: 2 },
//     ],

//     calcTotalPrice(stoneName) {
//         const currentStones = this.stones.find(
//             ({name}) => stoneName === name
//         );
//         return currentStones.price * currentStones.quantity;
//     },
// };

// console.log(chopShop.calcTotalPrice("Emerald")); // 5200
// console.log(chopShop.calcTotalPrice("Diamond")); // 8100
// console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
// console.log(chopShop.calcTotalPrice("Ruby")); // 1600

//! при передачі ф-ції в якості колбеку, її контекст не зберігається
//! для привʼязки контексту використувуються методи call, apply і bind
//! сall/apply - викликають ф-цію на місці і вказують їй контекст (1 аргумент)


// call, apply - викликають ф-цію на місці
// bind - робить копію ф-ції

// !!!!!!!!!!!!!!!!!!!!!!!!!!!


const person = { name: "Mango" };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 18));
console.log(sayHi.bind(person, 18)); 