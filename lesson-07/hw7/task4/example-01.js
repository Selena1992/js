const counterValue = document.querySelector('#value');
const buttonIncr = document.querySelector('button[data-action="increment"]');
const buttonDecr = document.querySelector('button[data-action="decrement"]');

const increment = function() {
  const newVal = Number(counterValue.textContent) + 1;
  counterValue.textContent = newVal.toString();
};

const decrement = function() {
  const newVal = Number(counterValue.textContent) - 1;
  counterValue.textContent = newVal.toString();
};

buttonIncr.addEventListener('click', increment);
buttonDecr.addEventListener('click', decrement);
