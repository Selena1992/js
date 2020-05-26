const input = document.querySelector('input#name-input');
const span = document.querySelector('span#name-output');

function setInputValueToSpan() {
  span.textContent = input.value ? input.value : 'незнакомец';
}

input.addEventListener('input', setInputValueToSpan);
