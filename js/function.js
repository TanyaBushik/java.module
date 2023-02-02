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

const logins = ['4mango44dff', 'kif5wivdsds4', 'polydfg5555', 'ajaxfgg544']

// const findLogin = function (allLogins, loginToFind) {
    // for (const login of allLogins) {
    //     if (login === loginToFind) {
    //         return `Пользователь ${loginToFind} найден.`
    //     }
    // }
    // return `Пользователь ${loginToFind} не найден.`;

    const findLogin = function (allLogins, loginToFind) {
      return allLogins.includes(loginToFind)
        ? `Пользователь ${loginToFind} найден.`   
        : `Пользователь ${loginToFind} не найден.`;
    };

console.log(findLogin(logins, "avocod365o"));
console.log(findLogin(logins, "kif5wivdsds4"));
console.log(findLogin(logins, "jamdlo586"));
console.log(findLogin(logins, "polydfg5555"));