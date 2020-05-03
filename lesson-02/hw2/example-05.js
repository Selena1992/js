const checkForSpam = function(message) {
  let res = false;
  const MSGARR = message.split(' ');
  if (MSGARR.includes('spam') || MSGARR.includes('sale')) {
    res = true;
  }
  return res;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
