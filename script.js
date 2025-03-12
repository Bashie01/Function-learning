// function greet(person, personTwo) {
//   console.log(`Hi ${person} and ${personTwo}`);
// }

// for (let i = 0; i <= 10; i++) {
//   greet("Aaron", "Lewis");
// }

// function repeat(str, numTime) {
//   let result = "";
//   for (let i = 0; i < numTime; i++) {
//     result += str;
//   }
//   console.log(result);
// }

// function sumFun(...num) {
//   let total = 0;
//   for (let i = 0; i < num.length; i++) {
//     total += num[i];
//   }
//   return total;
// }

// const numbers = [1, 2, 3, 4, 5];
// console.log(sumFun(numbers));

// function rollTwice(func) {
//   func();
//   func();
//   func();
//   func();
// }

// function tenTimes(f) {
//   for (let i = 0; i < 10; i++) {
//     f();
//   }
// }

// function rolleDie() {
//   const roll = Math.floor(Math.random() * 6) + 1;
//   console.log(roll);
// }

// rollTwice(rolleDie);

// function mysteryFunc() {
//   const rand = Math.random();
//   if (rand > 0.5) {
//     return function () {
//       console.log("i AM A GOOD FUNCTION CONGRATS");
//     };
//   } else {
//     return function () {
//       alert("Unluckyu");
//       alert("Unluckyu");
//     };
//   }
// }

// const myMath = {
//   PI: 3.14159,
//   square: function (num) {
//     return num * num;
//   },
//   cube: function (num) {
//     return num ** 3;
//   },
// };

// const cat = {
//   name: "Oliver",
//   color: "White with black spots",
//   breed: "Unknown",
//   meow() {
//     console.log(`${this.name} says MEOWWW`);
//     console.log(`Oliver is a ${this.color} cat`);
//   },
// };

// const hen = {
//   name: "Helen",
//   eggCount: 0,
//   layAnEgg(egg) {
//     console.log('EGG')
//     this.eggcount++;
//     return eggcount;
//   },
// };

// try {
//   hello.toUpperCase();
// } catch {
//   console.log("ERROR");
// }

const numbers = [2, 4, 6, 8];

// numbers.forEach(function (el) {
//   if (el % 2 === 0) {
//     console.log(el);
//   }
// });

// for (let el of numbers) {
//   console.log(el);
// }

const movies = [
  { title: "The Godfather", metascore: 95 },
  { title: "The Dark Knight", metascore: 98 },
  { title: "Schindler's List", metascore: 100 },
  { title: "Pulp Fiction", metascore: 97 },
  { title: "Inception", metascore: 96 },
];

// // movies.forEach(function (movie) {
// //   console.log(`${movie.title} with a score ${movie.metascore}/100`);
// // });

// // for (let movie of movies) {
// //   console.log(`${movie.title} with a score ${movie.metascore}/100`);
// // }

// // const double = numbers.map(function (num) {
// //   return num * 2;
// // });

// // const newMovies = movies.map(
// //   (movies) => `${movies.title} - ${movies.metascore}`
// // );

// movies.forEach((movie) => {
//   console.log(`${movie.title} is scored ${movie.metascore}, insane`);
// });

// movies.forEach((movie) => {
//   console.log(movie.title);
//   console.log(movie.metascore);
// });

// console.log(movies[0].title);

// setTimeout(() => {
//   console.log("Are you there?");
// }, 3000);

// // const id = setInterval(() => {
// //   console.log(Math.random());
// // }, 2000);

// const usernames = [
// //   "markeynark",
// //   "stacey123456",
// //   "jen",
// //   "david10",
// //   "thomas2019",
// // ];

// // // const randTen = (usernames) => usernames.filter((usr) => usr.length >= 10);

// // // console.log(randTen(usernames));

// // const rand = (usernames) => usernames.every((usr) => usr.length >= 10);

// // console.log(rand(usernames));

// // reduce

// const prices = [9.99, 1.5, 8.45, 9.2, 45.45, 30.5, 20.91];

// let total = 0;
// for (let price of prices) {
//   total += price;
// }
// console.log(total);

// // const total = prices.reduce((total, price) => {
// //   return (total += price);
// // });

// const minPrice = prices.reduce((min, price) => {
//   if (price < min) {
//     return price;
//   }
//   return min;
// });

// const favMovie = movies.reduce((bestMovie, currMovie) => {
//   if (currMovie.metascore > bestMovie.metascore) {
//     return currMovie;
//   }
//   return bestMovie;
// });

// const short = numbers.reduce((sum, num) => sum + num, 60);

// const person = {
//   firstName: "aaron",
//   lastName: "jeffries",
//   fullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   shoutName: function () {
//     setTimeout(() => {
//       console.log(this.fullName());
//     }, 3000);
//   },
// };

function rollDie(numSide = 6) {
  return Math.floor(Math.random() * numside) + 1;
}

function greet(name, msg = "Hey there") {
  console.log(`${msg}, ${name}`);
}

const arrOne = ["hawk", "parrot", "penguin"];
const bugs = ["butterfly", "fly", "beetle"];

console.log(...arrOne, ...bugs);

function spread() {
  console.log(..."hello");
}
