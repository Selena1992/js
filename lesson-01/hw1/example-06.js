let input;
let inputNum;
let total = 0;

do {
  input = prompt('Введите число');
  inputNum = Number(input);

  if (Number.isNaN(inputNum)) {
    console.log('Было введено не число, попробуйте еще раз');
  } else {
    total += Number(inputNum);
  }
} while (input !== null);

alert(`Общая сумма чисел равна ${total}`);
