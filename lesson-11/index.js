'use strict';

// ==================
// setTimeout
// ==================
// const id = setTimeout(() => console.log('hello'), 2000);
// console.log(id);

// clearTimeout(id);

// ==================
// setInterval
// ==================
// const refs = {
//   title: document.querySelector('h2'),
//   start: document.querySelector('#start'),
//   stop: document.querySelector('#stop'),
// };

// let timer = 0;
// let id = null;

// refs.start.addEventListener('click', handleStartClick);
// refs.stop.addEventListener('click', handleStopClick);

// function handleStartClick() {
//   if (id) {
//     return;
//   }

//   refs.start.setAttribute('disabled', true);
//   refs.stop.removeAttribute('disabled');

//   id = setInterval(() => {
//     timer += 1;
//     refs.title.textContent = timer;
//   }, 1000);
// }

// function handleStopClick() {
//   if (!id) {
//     return;
//   }

//   refs.start.removeAttribute('disabled');
//   refs.stop.setAttribute('disabled', true);

//   clearInterval(id);
//   id = null;
// }

// ==================
// this
// ==================
// const obj = {
//   name: 'Bobby',

//   sayHello() {
//     console.log(this);
//   },
// };

// obj.sayHello(); // {name: "Bobby", sayHello: ƒ}

// const fn = obj.sayHello; // window
// fn();

// console.log('start');
// setTimeout(obj.sayHello.bind(obj), 0);
// console.log('end');

// ==================
// Date
// ==================
// const date = new Date(2020, 5, 1, 16, 0);
// console.dir(`${date.getHours()}:${date.getMinutes()}:${date.getMonth()}`);
// console.log(date);

// ==================
// now
// ==================
// const start = new Date().getTime(); // Date.now();
// console.log(new Date().getTime()); // 1970.01.01

// for (let i = 0; i < 1000000; i += 1) {
//   // const date = new Date();
// }

// const end = Date.now(); // new Date().getTime()
// console.log(end - start);

// ==================
// callback hell
// ==================
// function fn1(callback) {
//   setTimeout(() => {
//     // ... my code
//     callback();
//   }, 11);
// }

// function fn2(callback) {
//   setTimeout(() => {
//     // ... my code
//     fn3();
//   }, 11);
// }

// function fn3() {
//   // setTimeout();
// }

// fn1(fn2);

// ==================
// Promise
// ==================
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // ... fetch do the server
//     const data = { name: 'Peter' };

//     resolve(data);
//     // reject('some error happened'); // eslint-disable-line
//   }, 2000);
// });

// console.log('start');

// // spinner turn on
// promise
//   .then(result => console.log(result))
//   .catch(error => console.log(error))
//   .finally(() => console.log('finish'));

// ==================
// Promise all, race
// ==================
function fn1() {
  return new Promise(resolve => {
    setTimeout(() => {
      // console.log('function 1');
      resolve('function 1');
    }, 1000);
  });
}

function fn2() {
  return new Promise(resolve => {
    setTimeout(() => {
      // console.log('function 2');
      resolve('function 2');
    }, 1000);
  });
}

function fn3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log('function 3');
      // resolve('function 3');
      reject('some error'); // eslint-disable-line
    }, 1000);
  });
}

// Promise.all([fn1(), fn2(), fn3()])
//   .then(results => console.log(results))
//   .catch(error => console.log(error));

const promise1 = fn1();
const promise2 = fn2();
const promise3 = fn3();

Promise.race([promise1, promise2, promise3])
  .then(results => console.log(results))
  .catch(error => console.log(error));
