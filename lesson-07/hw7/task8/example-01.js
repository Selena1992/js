const input = document.querySelector('input[type="number"]');
const boxes = document.getElementById('boxes');
const buttonCreate = document.querySelector('button[data-action="render"]');
const buttonClear = document.querySelector('button[data-action="destroy"]');
let inputValue = 0;

function createBoxes(amount) {
  for (let i = 0; i < [...Array(amount).keys()].length; i += 1) {
    boxes.innerHTML += `<div ></div>`;
    if (boxes.children.length === 1) {
      boxes.lastElementChild.setAttribute(
        'style',
        `height: 30px; width: 30px;
        background-color:#${Math.floor(Math.random() * 16777215).toString(16)}`,
      );
    } else {
      boxes.lastElementChild.setAttribute(
        'style',
        `height: ${(boxes.children.length - 1) * 10 + 30}px; 
        width: ${(boxes.children.length - 1) * 10 + 30}px;
        background-color:#${Math.floor(Math.random() * 16777215).toString(16)}`,
      );
    }
  }
}

function destroyBoxes() {
  [...boxes.children].forEach(i => boxes.removeChild(i));
}

input.addEventListener('blur', function(e) {
  inputValue = Number(e.target.value);
});
buttonCreate.addEventListener('click', function() {
  createBoxes(inputValue);
});
buttonClear.addEventListener('click', destroyBoxes);
