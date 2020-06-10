'use sctrict';

// ========================================
// Всплытие событий
// ========================================
// const menu = document.querySelector('ul.menu');

// menu.addEventListener('click', e => {
//   if (e.target === e.currentTarget) {
//     return;
//   }

//   console.log('click target:', e.target);
//   console.log('click currenttarget:', e.currentTarget);
// });

// ========================================
// example
// ========================================
// const menu = document.querySelector('ul.menu');

// const handleMenuClick = e => {
//   if (e.target === e.currentTarget) {
//     return;
//   }

//   const prewActive = document.querySelector('li.active');

//   if (prewActive) {
//     prewActive.classList.remove('active');
//   }
//   e.target.classList.add('active');
// };

// menu.addEventListener('click', handleMenuClick);

// ========================================
// preventDefault
// ========================================
// ex.1
// const form = document.getElementById('form');

// form.addEventListener('submit', e => {
//   e.preventDefault();

//   console.log(e.target);
// });

// // ex.2
// const link = document.getElementById('link');

// link.addEventListener('click', e => {
//   e.preventDefault();

//   window.location.replace('http://www.w3schools.com');
//   console.log(e.target);
// });

// ========================================
// Debounce & Throttle
// ========================================
// const wrapper = document.querySelector('.sections');
// const title = document.querySelector('.title');

// const handleScroll = e => {
//   title.textContent = e.target.scrollTop;
// };

// // wrapper.addEventListener('scroll', _.debounce(handleScroll, 300));
// wrapper.addEventListener('scroll', _.throttle(handleScroll, 300));

// ========================================
// Throttle
// ========================================
// const refs = {
//   wrapper: document.querySelector('.sections'),
//   title: document.querySelector('.title'),
// };

// const handleScroll = e => {
//   refs.title.textContent = e.target.scrollTop;
// };

// function throttle(callback, delay) {
//   let timeout; // id

//   return function() {
//     if (timeout) {
//       console.log('throttle');
//       return;
//     }

//     timeout = setTimeout(() => {
//       callback(...arguments);
//       timeout = null;
//     }, delay);
//   };
// }

// function debounce(callback, delay) {
//   let timeout; // id

//   return function() {
//     if (timeout) {
//       console.log('debounce');
//       clearTimeout(timeout);
//     }

//     timeout = setTimeout(() => {
//       callback(...arguments);
//       timeout = null;
//     }, delay);
//   };
// }

// // wrapper.addEventListener('scroll', throttle(handleScroll, 500));
// refs.wrapper.addEventListener('scroll', debounce(handleScroll, 500));

