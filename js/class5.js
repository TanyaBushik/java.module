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