// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значення властивості з таким ключем
//   console.log(book[key]);
// }

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смішної людини",
//     author: "Федір Достоєвський",
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
  // Об'єкт книги
//   console.log(book);
  // Назва
//   console.log(book.title);
  // Автор
//   console.log(book.author);
  // Рейтинг
//   console.log(book.rating);
// }


// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3,
// };

// let totalFeedback = 0;

// const keys = Object.keys(feedback);
// console.log(keys);

// for (key of keys) {
//     console.log(key);
//     console.log(feedback[key]);

//     totalFeedback += feedback[key];
// }
// console.log("Total Feedback: ", totalFeedback);


// const values = Object.values(feedback);
// console.log(values);

// for (const value of values) {
//     console.log(value);

//      totalFeedback += value;
// }
// console.log("Total Feedback: ", totalFeedback);


// const friends = [
//     { name: "Mango", online: false },
//     { name: "Kiwi", online: true },
//     { name: "Poly", online: true },
//     { name: "Ajax", online: false},
// ]

// console.table(friends);
// // ищем друга по имени

const findFriendByName = function (allFriends, friendName) { 

    for (const friend of allFriends) {
        console.log(friend.name);
        
        if (friend.name === friendName) {
            return "Found!"
        }
    }
    return "Not Found!"
};

// console.log(findFriendByName(friends, "Poly"));
// console.log(findFriendByName(friends, "Chelsy"));

const getAllNames = function (allFriends) {

    const names = [];

    for (const friend of allFriends) {
        names.push(friend.name);
    }
    return names;
}
// console.log(getAllNames(friends));



const getOnlineFriends = function (allFriends) {

    const onlineFriends = [];

    for (const friend of allFriends) {
        console.log(friend);
        console.log(friend.online);

        if (friend.online) {
            onlineFriends.push(friend);
        }
    }
    return onlineFriends;
}

// console.log(getOnlineFriends(friends));

const getOfflineFriends = function (allFriends) {
    
    const offlineFriends = [];

    for (const friend of allFriends) {
        if (!friend.online) {
            offlineFriends.push(friend);
        }    
    }
    return offlineFriends;
};
// console.log(getOfflineFriends(friends));

const getFriendsByStatus = function (allFriends) {
    const friendsByStatus = {
        online: [],
        offline: [],
    };

    for (const friend of allFriends) {
        if (friend.online) {
           friendsByStatus.online.push(friend);
            continue;
        }

        friendsByStatus.offline.push(friend);
    }

    return friendsByStatus;
}
// console.log(getFriendsByStatus(friends));


// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
    //   descr: "Spacious apartment in the city center",
    //   rating: 4.7,
    //   price: 5000,
    //   tags: ["premium", "promoted", "top", "trusted"],
    //   owner: {
    //     name: "Henry Sibola",
    //     phone: "982-126-1588",
    //     email: "henry.carter@aptmail.com",
    //   },
    // };

    // apartment.area = 60;
    // apartment.rooms = 3;
    // apartment.location = {
    //     country: "Jamaica",
    //     city: "Kingston",
    // };

    // console.log(apartment);

    //     const apartment = {
    //         descr: "Spacious apartment in the city center",
    //         rating: 4,
    //         price: 2153,
  
    //   };
    //     const keys = [];
    //     const values = [];


    //     for(const key in apartment) {
        
    //         keys.push(key);
    //         values.push(apartment[key]);

    //         }
    
    //   console.log(apartment);
    

//     function countProps(object) {
    
//         let propCount = 0;
//   // Change code below this line

// propCount = Object.keys(object).length;
//   // Change code above this line
//   return propCount;
// }

// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
//      values.push(apartment[key]);
// };
// console.log(apartment);


// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   propCount = Object.keys(object).length;
 
//   return propCount;
//   // Change code above this line
// }
// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(apartment);



// function countTotalSalary(salaries) {
//   let totalSalary = 0;

//   for (const salary of Object.values(salaries)) {
//     totalSalary += salary;
//   }
//   return totalSalary;
// }
// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));


// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//     hexColors.push(color.hex);
//    rgbColors.push(color.rgb);
// }


// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: 'html',
//     premium: false,
// }

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium;

// const keys = Object.keys(user);

// for (const key of keys) {
//     console.log(`${key}: ${user[key]}`);
//         }


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
  
//     let price = null;

//     for (const product of products) {

//         if (product.name === productName) {
//             price = product.price;
//             break;
//         }
//     }
//     return price;
// }
// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
  
//     let productName = [];

//     for (const product of products) {
//         const keys = Object.keys(product);

//         if (keys.includes(propName)) {
//           productName.push(product[propName]);
//         }
//   }
// return productName;
// }

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     // Change code below this line
//     let total = 0;

//     for (const product of products) {
//         if ((product.name === productName)) {
//             total += product.price * product.quantity;
//         }
//     }
//      return total;
// }
// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));


// const temps = [14, -4, 25, 8, 11];
// console.log(Math.max(...temps));

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); 



// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };//{propC: 50, propD: 20, propA: 5, propB: 10}
// console.log(fourth);



// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }


const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line

const {
  high: highToday,
  low: lowToday,
  icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  tomorrow: {
    low: lowTomorrow,
    high: highTomorrow,
    icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
  },
} = forecast;

console.log(forecast);