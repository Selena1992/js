const findBestEmployee = function(employees) {
  const entries = Object.entries(employees);
  let maxTaskNum = 0;
  let name;
  for (const entry of entries) {
    const key = entry[0];
    const value = entry[1];
    if (value > maxTaskNum) {
      maxTaskNum = value;
      name = key;
    }
  }
  console.log(`${name}`);
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
