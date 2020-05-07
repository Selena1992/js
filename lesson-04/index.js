'use strict';

// =========================================
// callback
// =========================================
// function fn(callback) {
//   console.log('fn');

//   callback();
// }

// const sayHello = () => {
//   console.log('Hello');
// };

// fn(sayHello);

// =========================================
// Абстрагирование повторения
// =========================================
// function repeat(count, callback) {
//   for (let i = 0; i < count; i += 1) {
//     callback();
//   }
// }

// function sayHello() {
//   console.log('Hello');
// }
// function sayBye() {
//   console.log('Bye');
// }

// repeat(5, sayHello);
// repeat(3, sayBye);

// =========================================
// Фильтрация массива
// =========================================
// function filter(arr, callback) {
//   const result = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     if (callback(arr[i])) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }

// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(filter(numbers, x => x < 4));
// console.log(filter(numbers, x => x > 4));
// console.log(filter(numbers, x => x < 2 || x > 4));

// const persons = [
//   {
//     name: 'Bobby',
//     age: 15,
//   },
//   {
//     name: 'Peter',
//     age: 20,
//   },
//   {
//     name: 'Chris',
//     age: 25,
//   },
// ];
// console.log(filter(persons, ({ age }) => age > 15));

// =========================================
// Стек
// =========================================
// const globalA = 1;

// function fn1() {
//   const fn1A = 11;

//   console.log('fn1');
// }

// function fn2() {
//   const fn2A = 22;

//   console.log('fn2');

//   fn1();
// }

// function fn3() {
//   const fn3A = 33;

//   console.log('fn3');

//   fn2();
// }

// fn3();

// =========================================
// Замыкания
// =========================================
// function counter(name, x = 0) {
//   return function() {
//     console.log(`${name}: ${(x += 1)}`);
//   };
// }

// const counter1 = counter('counter 1', 10);
// const counter2 = counter('counter 2', 20);

// counter1();
// counter1();

// counter2();
// counter2();
// counter2();
// counter2();

// counter1();

// =========================================
// this
// =========================================
// example 1
// function sayName() {
//   console.log(this);
//   // console.log(`Hello, my name is ${this.name}`);
// }

// const obj1 = {
//   name: 'Bobby',
//   age: 15,
// };

// const obj2 = {
//   name: 'Peter',
//   age: 20,
// };

// obj1.sayName = sayName;
// obj2.sayName = sayName;

// obj1.sayName();
// obj2.sayName();

// example 2
// const obj1 = {
//   name: 'Bobby',
//   age: 15,

//   sayName() {
//     console.log(this);
//   },
// };

// obj1.sayName();

// const hello = obj1.sayName;
// hello(); // undefined

// const obj2 = {
//   name: 'Peter',
//   age: 20,
// };

// obj2.sayName = hello;
// obj2.sayName();

// example 3
// const obj1 = {
//   name: 'Bobby',
//   age: 15,

//   sayName() {
//     console.log(this);
//   },
// };

// function fn(callback) {
//   callback();
// }

// fn(obj1.sayName);

// =========================================
// call, apply
// =========================================
// example 1
// function sayName() {
//   console.log(this);
//   console.log(`Hello, my name is ${this.name}`);
// }

// const obj1 = {
//   name: 'Bobby',
//   age: 15,
// };

// const obj2 = {
//   name: 'Peter',
//   age: 20,
// };

// sayName.call(obj1);
// sayName.apply(obj2);

// =========================================
// bind
// =========================================
// function sayName() {
//   console.log(this);
//   console.log(`Hello, my name is ${this.name}`);
// }

// const obj1 = {
//   name: 'Bobby',
//   age: 15,
// };

// const hello = sayName.bind(obj1); // return function() {...}
// hello();

// fn(hello);

// function fn(callback) {
//   callback();
// }

// // setTimeout(sayName.bind(obj1), 2000);

// =========================================
// bind - own bind
// =========================================
// function sayName() {
//   console.log(this);
// }

// const obj1 = {
//   name: 'Bobby',
//   age: 15,
// };

// function myBind(callback, scope) {
//   return function() {
//     callback.call(scope);
//   };
// }

// const myHello = myBind(sayName, obj1); // function() { ... }
// myHello();

// =========================================
// this в стрелочных функциях
// =========================================
// const obj = {
//   name: 'Bobby',

//   fn() {
//     const innerArrowFn = () => {
//       console.log(this);
//     };

//     return innerArrowFn;
//   },
// };

// const hello = obj.fn(); // function() { ... }
// hello();

// fn2(hello);

// function fn2(callback) {
//   callback();
// }

// =========================================
// проверка ключей об
// =========================================
// const obj = {
//   name: 'Bobby',
//   age: 15,
// };

// for (const key in obj) {
//   console.log(key);
// }

// console.log(obj.hasOwnProperty('name'));

