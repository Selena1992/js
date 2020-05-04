// var a = 4;
// let b = 5;
// const c = 6;

// =========================================
// example 1
// =========================================
// var a = 3.14;
// console.log(a);

// var a = 'sdfg';
// console.log(a);

// =========================================
// example 2
// =========================================
// let b = 5;
// console.log(b);

// b = 6;
// console.log(b);

// =========================================
// example 3
// =========================================
// const c = 6;
// console.log(c);

// =========================================
// example 4
// =========================================
// const a = 1;
// const b = 3.14;
// const c = 'stringsdf';
// const d = true;
// const e = [];
// const f = {};
// let g;

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e, e.constructor == Array);
// console.log(typeof f);
// console.log(typeof g);
// console.log(typeof null);

// =========================================
// example 4
// =========================================
// const a = 1;

// function func() {
//   // const a = 4;
//   console.log(a);

//   const b = 2;
// }

// func();
// // console.log(b);

// =========================================
// example 5
// =========================================
// const response = prompt();
// console.log(response);

// // const num = Number(response);
// // const num = parseInt(response);
// const num = parseFloat(response);
// console.log(num);

// if (num === 5) {
//   console.log('Bingo');
// }

// =========================================
// example 6
// =========================================
// const str = 'JavaScript';
// console.log(str[0]);

// =========================================
// example 7
// =========================================
// const str = 'Java' + 'Script';
// console.log(str);

// const name = 'Geri';
// const markup = `
// <div>
//   <h3>Hello</h3>
//   <p>lorem ipsum</p>
//   <p>My name is ${name}</p>
// </div>
// `;

// console.log(markup);

// document.querySelector('body').insertAdjacentHTML('beforeend', markup);

// =========================================
// example 8
// =========================================
// const a = 5;

// // if (a === 5) {
// //   console.log('Ok');
// // } else {
// //   console.log('Not Ok');
// // }

// console.log(a === 5 ? 'Ok' : 'Not Ok');

// =========================================
// example 9
// =========================================
const resp = prompt('How old are you');

switch (resp) {
  case '1':
    console.log('One');
    break;
  case '2':
    console.log('Two');
    break;
  case '3':
    console.log('Three');
    break;
  default:
    console.log('unknown');
}
