`use strict`;

// function multiplyBy5(num) {
//   return num * 5;
// }

// multiplyBy5.power = 2;
// multiplyBy5(25);
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

// function createUser(userName, score) {
//   this.userName = userName;
//   this.score = score;
// }

// createUser.prototype.increment = function () {
//   this.score++;
//   return this.score;
// };
// createUser.prototype.printMe = function () {
//   console.log(`Score is ${this.score}`);
// };

// const user1 = new createUser(`Arpit`, 100);
// const user2 = new createUser(`Rajesh`, 95);
// console.log(user1);
// console.log(user2);
// // console.log(user2.increment());
// user2.printMe();
// console.log(user1.increment());
// console.log(user1.score);

const myHeros = [`Iron Man`, `Spider Man`];

const heroPower = {
  thor: `Thor Power`,
  spidey: `Spider Man`,
  getSpiderPower: function () {
    console.log(`Spidey Power is ${this.spidey}`);
  },
};

Object.prototype.arpit = function () {
  console.log(`Arpit is present in the all objects`);
};

// heroPower.arpit();
// myHeros.arpit();

// create a method to count true length of a string
let myName = `Arpit Mishra     `;
// console.log(myName.length);

// Modern Syntax to set inheritance
// Object.setPrototypeOf(user1,user);

String.prototype.trueLength = function () {
  return this.trim().length;
};

console.log(myName.trueLength());
