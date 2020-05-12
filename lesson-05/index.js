'use strict';

// =========================================
// Конструкторы ES5
// =========================================
// function Human(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const bobby = new Human('Bobby', 15);
// console.dir(bobby);

// const peter = new Human('Peter', 20);
// console.dir(peter);

// =========================================
// Прототипы
// =========================================
// exmaple 1
// function Human(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Human.prototype.sayHello = function() {
//   console.log(`Hello, I'm ${this.name}`);
// };

// const bobby = new Human('Bobby', 15);
// bobby.sayHello();

// const peter = new Human('Peter', 20);
// peter.sayHello();

// console.dir(bobby);
// console.dir(peter);

// exmaple 2
// ===== Human =====
// function Human(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Human.prototype.sayHello = function() {
//   console.log(`Hello, I'm ${this.name}`);
// };

// // ===== Doctor =====
// function Doctor(name, age) {
//   Human.call(this, name, age);
// }

// Doctor.prototype = Object(Human.prototype);
// Doctor.prototype.constructor = Doctor;

// Doctor.prototype.heal = function() {
//   console.log("I'm healing");
// };

// const drHouse = new Doctor('Gregory House', 55);
// console.log(drHouse);
// drHouse.heal();
// drHouse.sayHello();

// =========================================
// Object.create
// =========================================
// const human = {
//   legs: 2,
// };

// const bobby = Object.create(human);
// bobby.name = 'Bobby';

// console.log(human);
// console.log(bobby);

// =========================================
// hasOwnProperty
// =========================================
// const human = {
//   legs: 2,
// };

// const bobby = Object.create(human);
// bobby.name = 'Bobby';

// console.log(human);
// console.log(bobby);

// for (const key in bobby) {
//   console.log(key);
// }

// console.log(bobby.hasOwnProperty('name'));
// console.log(bobby.hasOwnProperty('legs'));

// console.log(Object.keys(bobby));
// console.log(bobby.legs || 5);

// =========================================
// ES6 классы
// =========================================
// import Human from './human.js';

// class Doctor extends Human {
//   constructor(name, age, working) {
//     super(name, age);

//     this.working = working;
//   }

//   sayHello() {
//     Human.prototype.sayHello.call(this);
//     console.log(`Hello, I'm dr.${this.name}`);
//   }
// }

// const bobby = new Human('Bobby', 15);
// console.log(bobby);

// const doctor = new Doctor('House', 55, 20);
// console.log(doctor);
// doctor.sayHello();

// =========================================
// get, set
// =========================================
// class Human {
//   constructor(name, age) {
//     this._name = name;
//     this._age = age;
//   }

//   get name() {
//     return this._name;
//   }

//   get age() {
//     return this._age;
//   }

//   set age(age) {
//     this._age = age;
//   }

//   setAge(age) {
//     this._age = age;
//   }
// }

// const bobby = new Human('Bobby', 15);
// console.log(bobby);

// console.log(bobby.name);
// console.log(bobby.age);

// =========================================
// static
// =========================================
// class Human {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   static sayHello() {
//     console.log('Hello!');
//   }
// }

// const bobby = new Human('Bobby', 15);
// console.log(bobby);

// Human.sayHello();

// =========================================
// Приватные поля классов
// =========================================
// class IncreasingCounter {
//   #count = 0;

//   get value() {
//     console.log('Getting the current value!');
//     return this.#count;
//   }

//   increment() {
//     this.#count++;
//   }
// }

// const counter = new IncreasingCounter();
// counter.increment();
// counter.increment();

// const counter2 = new IncreasingCounter();
// counter2.increment();

// console.log(counter.value);
// console.log(counter2.value);

// =========================================
// *****************
// =========================================
// function fn(name, age) {
//   if (age) {
//     console.log(`Hello ${name}`, age);
//   } else {
//     console.log(`Hello ${name}`);
//   }
// }

// fn('Bobby');
// fn('Bobby', 15);

// =========================================
// Array.sort
// =========================================
const numberSorter = (a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};
const objectSorter = ({ age: a }, { age: b }) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};

const arr = [2, 4, 1, 10, 5];
const objs = [
  {
    name: 'Peter',
    age: 20,
  },
  {
    name: 'Bobby',
    age: 15,
  },
];

console.log(arr);
arr.sort(numberSorter);
console.log(arr);

console.log(objs);
objs.sort(objectSorter);
console.log(objs);
