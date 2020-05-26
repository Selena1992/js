const input = document.querySelector('input#validation-input');

function validateInputValue() {
  if (input.getAttribute('data-length') === input.value.length.toString()) {
    input.classList.add('valid');
  } else {
    input.classList.add('invalid');
  }
}

input.addEventListener('focus', () => {
  if (input.classList.contains('valid')) {
    input.classList.remove('valid');
  } else if (input.classList.contains('invalid')) {
    input.classList.remove('invalid');
  }
});
input.addEventListener('blur', validateInputValue);
