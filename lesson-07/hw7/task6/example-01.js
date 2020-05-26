const input = document.querySelector('input#validation-input');
let currentStyle;

function validateInputValue() {
  if (Boolean(currentStyle) === true) {
    input.classList.remove(currentStyle);
  }

  if (input.getAttribute('data-length') === input.value.length.toString()) {
    input.classList.add('valid');
    currentStyle = 'valid';
  } else {
    input.classList.add('invalid');
    currentStyle = 'invalid';
  }
}

input.addEventListener('change', validateInputValue);
