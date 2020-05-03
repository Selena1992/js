const formatString = function(string) {
  let res;
  if (string.length <= 40) {
    res = string;
  } else {
    const CUTSTRING = string.slice(0, 40);
    res = `${CUTSTRING}...`;
    console.log(CUTSTRING.length);
  }
  return res;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка
