'use strict';

window.onload = function() {
  console.log('document is loaded');
};

// const link = document.querySelector('a[href="https://google.com"]');

// if (link.textContent === 'Google') {
//   console.log('heureka');
// } else {
//   console.log(':(');
// }

// console.log(link.parentElement);

// document.querySelector('img').src =
//   'https://ichef.bbci.co.uk/news/1024/branded_news/12A9B/production/_111434467_gettyimages-1143489763.jpg';

// document.querySelector('h1').hidden = true;

// setTimeout(() => {
//   document.querySelector('h1').removeAttribute('hidden');
// }, 2000);

// document.querySelector('h1').style.color = '#a73bd9';
// document.querySelector('h1').style.fontSize = '50px';

// document.querySelector('h1').classList.add('link-1');
// document.querySelector('h1').classList.add('big-font');

// document.querySelector('h1').classList.remove('link-1');

// =========================================
// Работа с DOM-узлами
// =========================================
// const body = document.querySelector('body');

// const myImage = document.createElement('img');
// myImage.src =
//   'https://icdn.lenta.ru/images/2020/01/28/17/20200128170822958/square_1280_afbb21cfff8d776afb23c0d8d2a96a7c.jpg';
// myImage.style.width = '200px';
// body.appendChild(myImage);

// v.1
// const arr = [1, 2, 3, 4, 5];
// const elements = arr.map(item => {
//   const p = document.createElement('p');
//   p.textContent = item;

//   return p;
// });

// body.append(...elements);

// v.2
// const arr = [1, 2, 3, 4, 5];
// body.insertAdjacentHTML(
//   'afterbegin',
//   arr.map(item => `<p class="link-1">${item}</p>`).join(''),
// );

// =========================================
// События
// =========================================
// const button = document.querySelector('#my-button');
// const title = document.querySelector('h1');
// const input = document.querySelector('input');
// const form = document.querySelector('form');

// const handleClick = () => {
//   title.classList.toggle('link-1');
//   title.classList.toggle('big-font');
// };

// button.addEventListener('click', handleClick);
// input.addEventListener('input', e => {
//   title.textContent = e.target.value;
// });

// form.addEventListener('submit', e => {
//   e.preventDefault();

//   console.log(e.target.elements.myInput.value);
// });

// =========================================
// События клавиатуры
// =========================================
const input = document.querySelector('input');

// input.addEventListener('keydown', e => {
//   if (e.keyCode === 13) {
//     console.log(input.value);
//   }
// });

// input.addEventListener('keydown', () => console.log('keydown'));
// input.addEventListener('keyup', () => console.log('keyup'));
// input.addEventListener('keypress', () => console.log('keypress'));

// input.addEventListener('focusout', () => console.log('focusout'));
// input.addEventListener('focus', () => console.log('in focus'));
// input.addEventListener('blur', () => console.log('blur'));

input.addEventListener('change', e =>
  console.log('on change:', e.target.value),
);

input.addEventListener('input', e => console.log('on input:', e.target.value));
