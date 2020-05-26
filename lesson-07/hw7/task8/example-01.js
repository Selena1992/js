const input = document.querySelector('input[type="number"]');
const div = document.querySelector('div#boxes');
const buttonCreate = document.querySelector('button[data-action="render"]');
const buttonClear = document.querySelector('button[data-action="destroy"]');
let inputValue;

function createBoxes(amount) {
  if (amount) {
    [...Array(amount).keys()].forEach(i => {
      div.innerHTML += `<div ></div>`;
      if (div.children.length === 1) {
        div.lastElementChild.setAttribute(
          'style',
          `height: 30px; width: 30px;
          background-color:#${Math.floor(Math.random() * 16777215).toString(
            16,
          )}`,
        );
      } else {
        div.lastElementChild.setAttribute(
          'style',
          `height: ${(div.children.length - 1) * 10 + 30}px; 
          width: ${(div.children.length - 1) * 10 + 30}px;
          background-color:#${Math.floor(Math.random() * 16777215).toString(
            16,
          )}`,
        );
      }
    });
  }
}

function destroyBoxes() {
  [...div.children].forEach(i => div.removeChild(i));
}

input.addEventListener('blur', function(e) {
  inputValue = e.target.valueAsNumber;
});
buttonCreate.addEventListener('click', function() {
  createBoxes(inputValue);
});
buttonClear.addEventListener('click', destroyBoxes);
