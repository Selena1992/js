const input = document.querySelector('input#font-size-control');
const text = document.querySelector('span#text');

input.addEventListener('input', function(e) {
  text.style.fontSize = `${e.target.value}px`;
});
