const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingr = ingredients
  .map(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    return `<li>${li.textContent}</li>`;
  })
  .join('');

document.querySelector('#ingredients').insertAdjacentHTML('afterbegin', ingr);
