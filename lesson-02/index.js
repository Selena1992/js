'use strict';

// const arr = [
//   1,
//   3,
//   4,
//   'Bobby',
//   'Peter',
//   [5, 6, 7],
//   () => {},
//   { name: 'Bobby', age: 15 },
//   undefined,
//   NaN,
//   null,
// ];

// Example 1
// for (let i = 0; i < arr.length; i += 1) {
//   console.log(arr[i]);
// }

// Example 2
// for (const item of arr) {
//   console.log(item);
// }

// Example 3
// const myFunc = (item, index) => {
//   console.log(index, item);
// };

// arr.forEach(myFunc);

// =========================================
// Создание
// =========================================
// const arr = [];

// console.log(arr);

// =========================================
// Доступ к элементам
// =========================================
// const a = [1, 2, 3];
// const b = a;

// console.log(a);
// console.log(b);

// b[0] = 500;
// console.log(a);
// console.log(b);

// =========================================
// Инструкции break и continue
// =========================================
// const arr = [1, 2, 3, 4, 5, 6, 7];

// // eslint-disable-next-line
// for (const item of arr) {
//   if (item === 5) {
//     console.log('Ready', item);
//     break;
//   }
//   console.log(item);
// }

// =========================================
// Многомерные массивы
// =========================================
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// =========================================
// Push, pop, shift, unshift
// =========================================
// const arr = [1, 2, 3];
// console.log(arr);

// arr.push(4);
// console.log(arr);

// =========================================
// копия массива
// =========================================
// const arr = [1, 2, 3];
// const newArray = [...arr];
// const arr2 = arr.concat();

// newArray.push(4);
// console.log(arr);
// console.log(arr2);
// console.log(newArray);

// =========================================
// Методы split() и join()
// =========================================
// const a = 'Welcome to Bahamas!';

// const arr = a.split(' ');
// console.log(arr);

// console.log(arr.join(' '));

// =========================================
// indexOf, includes
// =========================================
// const arr = [1, 2, 3, 4, 'Bobby', 'Peter'];

// console.log(arr.includes(3));
// console.log(arr.indexOf('Bobby'));

// // const roles = ['Admin', 'Manager', 'User'];
// const privilegedRoles = ['Admin', 'Manager'];
// const userRole = 'Manager';

// // if (privilegedRoles.includes(userRole)) {
// if (privilegedRoles.indexOf(userRole) > -1) {
//   console.log('The user is privileged');
// }

// =========================================
// Методы push(), pop(), shift(), unshift()
// =========================================
// const arr = [1, 2, 3];
// console.log(arr);

// arr.push('Bobby');
// console.log(arr);

// const item = arr.pop();
// console.log(item);
// console.log(arr);

// =========================================
// slice
// =========================================
// const arr = [1, 2, 3, 4, 5, 6];
// const arr2 = arr.slice(2, 5);

// arr.push('Bobby');

// console.log(arr);
// console.log(arr2);

// =========================================
// splice
// =========================================
// const arr = [1, 2, 3, 4, 5, 6];
// console.log(arr);

// arr.splice(2, 0, 'Bobby', 'Peter');
// console.log(arr);

// =========================================
// Метод concat()
// =========================================
// const arr1 = [1, 2, 3, ['Bobby', 'Peter']];
// const arr2 = [4, 5, 6];
// // const arr3 = arr1.concat(arr2);

// // console.log(arr3);

// const arr4 = [...arr1, ...arr2];
// console.log(arr4);

// arr4[3][0] = 'Chris';
// console.log(arr4);
// console.log(arr1);

// =========================================
// функции 1
// =========================================
// function sum(a, b, c) {
//   return a + b + c;
// }

// console.log(sum(2, 10, 4));

// =========================================
// функции 2
// =========================================
// const sum = function(a = 0, b = 0, c = 0) {
//   return a + b + c;
// };

// console.log(sum(2, 6));

// =========================================
// функции 3
// =========================================
// const sum = (a, b) => a + b;

// console.log(sum(2, 16));

// =========================================
// функции 4
// =========================================
// function sum() {
//   console.log(Array.from(arguments));
// }

// const sumArrow = (...rest) => {
//   console.log(rest);
// };

// sum(1, 2, 3, 4);
// sumArrow(1, 2, 3, 4);

// =========================================
// функции 5
// =========================================
// sum(1, 2, 3);
// console.log(a); // undefined
// console.log(b); // error

// function sum() {
//   console.log(Array.from(arguments));
// }

// var a = 1;
// let b = 2; // eslint-disable-line

// =========================================
// функции 6
// =========================================
// const obj = {
//   0: 'Bobby',
//   1: 15,
//   length: 20,
// };

// console.log(Array.from(obj));

// =========================================
// функции 7
// =========================================
// const arr = [];
// console.log(arr);

// arr.length = 10;
// console.log(arr);

// arr.fill('dfgdg');
// console.log(arr);

// arr.length = 2;
// console.log(arr);

// =========================================
// функции 8
// =========================================
// const name = 'Bobby';

function sum(a = 0, b = 0, c = 0) {
  const name = 'Peter';

  console.log(Number(a) + b + Number(c));

  throw new Error('sdff');
  console.log(typeof name, `My name is "${name}"`);
}

sum(6);
sum('1', 2);
sum('1', 2, '7');
