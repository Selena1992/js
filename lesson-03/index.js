'use strict';

// =========================================
// Создание объекта
// =========================================
// const human = {
//   name: 'Bobby',
//   age: 15,
// };

// console.log(human);

// =========================================
// Доступ к свойствам
// =========================================
// const human = {
//   name: 'Bobby',
//   age: 15,
// };

// human.age = 20;

// const key = 'name';
// console.log(human[key]);
// console.log(human['age']); // eslint-disable-line

// const obj = { a: 1 };
// human[obj] = 5;

// const obj2 = { a: 3 };
// human[obj2] = 55;

// console.log(human);

// console.log(human.dgdg);
// human.dgdg = 345;
// console.log(human.dgdg);

// =========================================
// Удаление свойств
// =========================================
// const human = {
//   name: 'Bobby',
//   age: 15,
// };
// console.log(human);

// delete human.age;
// console.log(human);

// =========================================
// Отсутствующие свойства
// =========================================
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   guests: ['mango', 'poly', 'ajax'],
// };

// console.log(hotel.stars); // 5
// console.log(hotel.pool); // undefined

// =========================================
// Короткие свойства
// =========================================
// const getHuman = (name, age) => ({
//   age, // age: age
//   name, // name: name
// });

// console.log(getHuman('Bobby', 15));

// =========================================
// Вычисляемые свойства
// =========================================
// const human = {
//   name: 'Bobby',
// };

// const key = 'abrakadabra';
// human[key] = 123;

// console.log(human);

// =========================================
// Методы объекта
// =========================================
// const human = {
//   name: 'Bobby',

//   // eslint-disable-next-line
//   sayHello: function() {
//     console.log(`Hello, my name is ${this.name}`);
//     // console.log('Hello!');
//   },

//   sayBye() {
//     console.log('Bye!');
//   },

//   inner: {
//     someKey: 456,

//     innerHello() {
//       console.log(this);
//     },
//   },
// };

// human.sayHello();
// // human.sayBye();

// console.log(human.inner.innerHello());

// =========================================
// Цикл for...in
// =========================================
// const human = {
//   name: 'Bobby',
//   age: 15,
// };
// console.log(human);

// eslint-disable-next-line
// for (const key in human) {
//   console.log(key);
//   console.log(human[key]);
// }

// =========================================
// Object.keys()
// =========================================
// const human = {
//   name: 'Bobby',
//   age: 15,
// };

// const getAge = (obj, key) => {
//   const result = [];

//   Object.keys(obj).forEach(item => {
//     if (item === key) {
//       // result = obj[key];
//       result.push(obj[key]);
//     }
//   });

//   return result;
// };

// console.log(getAge(human, 'age'));

// =========================================
// Object.values()
// =========================================
// const human = {
//   name: 'Bobby',
//   age: 15,
// };

// console.log(Object.values(human));

// =========================================
// Object.entries()
// =========================================
// const human = {
//   name: 'Bobby',
//   age: 15,
// };

// console.log(Object.entries(human));

// =========================================
// spread
// =========================================
// example 1
// const arr = [1, 2, 3, 4, 5, 6];
// console.log(arr);
// console.log(...arr);

// console.log('min:', Math.min(...arr));
// console.log('max:', Math.max(...arr));

// example 2
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, -10, ...arr2, ...[7, 8, 9]];

// console.log(arr3);

// example 3
// const obj1 = {
//   name: 'Bobby',
//   sex: 'male',
//   age: 10,
// };
// const obj2 = {
//   age: 15,
// };
// const human = {
//   age: 20, // 20
//   ...obj2, // 15
//   ...obj1, // 10
// };

// console.log(human);

// =========================================
// rest
// =========================================
// const fn = (a, b, c, ...rest) => {
//   console.log(rest);

//   return a + b + c;
// };

// console.log(fn(1, 4, 456, 55, 77, () => {}, {}, null));

// =========================================
// Деструктуризация объектов
// =========================================
// const sayHello = ({ name = 'Nemo', years: age = 0 } = {}) => {
//   console.log(`Hello, my name is ${name}, I'm ${age} years old.`);
// };

// const human = {
//   name: 'Bobby',
//   years: 15,
// };

// const { years, name } = human;
// console.log(years, name);

// sayHello(human);
// sayHello();

// =========================================
// Деструктуризация массивов
// =========================================
// example 1
// const arr = ['Bobby', 'Peter'];
// console.log(arr);

// const [a, b] = arr;
// console.log(a, b);

// example 2
// const human = {
//   name: 'Bobby',
//   years: 15,
// };

// Object.entries(human).forEach(([key, value]) =>
//   console.log(`Key: ${key}, value: ${value}`),
// );

// example 3.1
// let a = 1; // a = b
// let b = 2; // b = a
// const c = a;
// console.log(a, b);

// a = b;
// b = c;
// console.log(a, b);

// example 3.2
// let a = 1; // a = b
// let b = 2; // b = a
// console.log(a, b);

// [b, a] = [a, b];
// console.log(a, b);

// example 4
const arr = [3, 5, 1, 7, -10, 4];

for (let i = 0; i < arr.length; i += 1) {
  for (let j = i + 1; j < arr.length; j += 1) {
    if (arr[j] < arr[i]) {
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
  }
}

console.log(arr);
