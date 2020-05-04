let input;
let inputNum;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число');
  inputNum = Number(input);

  if (Number.isNaN(inputNum)) {
    console.log('Было введено не число, попробуйте еще раз');
  } else if (input !== null) {
    numbers.push(inputNum);
  }
} while (input !== null);

if (numbers.length > 0) {
  for (const element of numbers) {
    total += element;
  }
  console.log(`Общая сумма чисел равна ${total}`);
}
