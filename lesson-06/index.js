'use strict';

// =========================================
// Constructor & Prototyp - ES6
// =========================================
// class Human {
//   constructor(params) {
//     const { name, age } = params;

//     this._name = name;
//     this._age = age;
//   }

//   get age() {
//     return this._age;
//   }

//   set age(value) {
//     this._age = value;
//   }
// }

// const bobby = new Human({ name: 'Bobby', age: 15 });
// console.log(bobby);

// bobby.age = 16;
// console.log(bobby.age);

// =========================================
// Чистые функции
// =========================================
// // exmaple 1
// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(1, 1));
// console.log(sum(2, 3));

// // exmaple 2
// function pureSort(items) {
//   const newItems = [...items];

//   newItems.sort();
//   return newItems;
// }

// const arr = [2, 1, 5, 3, 4];
// console.log(arr);

// console.log(pureSort(arr));
// console.log(arr);

// =========================================
// Array.prototype.forEach
// =========================================
// const arr = ['Bobby', 'Peter', 'Chris'];

// arr.forEach(item => {
//   console.log(item);
// });

// console.log(arr);

// =========================================
// Array.prototype.map
// =========================================
// exmaple 1
// const arr = ['Bobby', 'Peter', 'Chris'];

// const newArray = arr.map(item => `<li>${item}</li>`);
// console.log(newArray);

// exmaple 2
// const arr = [
//   { name: 'Bobby', age: 15 },
//   { name: 'Peter', age: 20 },
//   { name: 'Chris', age: 25 },
// ];

// const names = arr.map(({ name }) => name);
// console.log(names);

// =========================================
// Array.prototype.filter
// =========================================
// const arr = [
//   { name: 'Bobby', age: 15 },
//   { name: 'Peter', age: 20 },
//   { name: 'Chris', age: 25 },
// ];

// const newArray = arr.filter(item => item.age > 15 && item.age < 25);
// console.log(newArray);

// =========================================
// Array.prototype.find
// =========================================
// const arr = [
//   { name: 'Peter', age: 20 },
//   { name: 'Bobby', age: 15 },
//   { name: 'Chris', age: 25 },
// ];

// const bobby = arr.find(item => item.name === 'Bobby');
// console.log(bobby);

// =========================================
// Array.prototype.every
// =========================================
// const arr = [2, 4, 6];

// const allEven = arr.every(item => item % 2 === 0);
// console.log(allEven);

// =========================================
// Array.prototype.some
// =========================================
// const arr = [1, 2, 3, 4, 5, 6];

// const someEven = arr.some(item => item % 2 === 0);
// console.log(someEven);

// =========================================
// Array.prototype.reduce
// =========================================
// const arr = [3, 4, 5, 6, 1, 2];

// const sum = arr.reduce((acc, item) => acc + item, 0);
// const min = arr.reduce((acc, item) => {
//   if (item < acc) {
//     return item;
//   }
//   return acc;
// });
// const max = arr.reduce((acc, item) => {
//   if (item > acc) {
//     return item;
//   }
//   return acc;
// });

// console.log(sum);
// console.log(min);
// console.log(max);

// =========================================
// Array.prototype.sort
// =========================================
// exmaple 1
// const arr = [3, 4, 10, 5, 1000, 6, 1, 2];
// arr.sort((a, b) => b - a);

// console.log(arr);

// exmaple 1
// const arr = [
//   { name: 'Peter', age: 20 },
//   { name: 'Bobby', age: 15 },
//   { name: 'Chris', age: 25 },
// ];

// arr.sort(({ age: a }, { age: b }) => {
//   if (a > b) {
//     return -1;
//   }
//   if (a < b) {
//     return 1;
//   }
//   return 0;
// });
// console.log(arr);

// =========================================
// Цепочки методов массива
// =========================================
// 1. > 18
// 2. age only
// 3. reverse
// 4. sum
// const arr = [
//   { name: 'Chris', age: 25 },
//   { name: 'Peter', age: 20 },
//   { name: 'Bobby', age: 15 },
// ];

// const newArr = arr
//   .filter(({ age }) => age > 18)
//   .map(({ age }) => age)
//   .reverse()
//   .reduce((a, b) => a + b);

// console.log(newArr);

// =========================================
// Defang IP Address
// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// =========================================
// const address = '1.1.1.1';
// const result = address.replace(/\./g, '[.]');

// console.log(result);

// =========================================
// Import
// =========================================
import users from './users.js';

console.log(users);
