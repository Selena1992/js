const CREADITS = 23580;
const PRICEPERDROID = 3000;
let totalPrice;

const DROIDNUMBER = prompt(
  'Количество дроидов которые пользователь хочет купить',
);

if (DROIDNUMBER === null) {
  console.log('Отменено пользователем!');
} else {
  const NUM = Number(DROIDNUMBER);
  totalPrice = NUM * PRICEPERDROID;
  if (totalPrice > CREADITS) {
    console.log('Недостаточно средств на счету!');
  } else {
    console.log(`
    Вы купили ${NUM} дроидов, на счету осталось ${CREADITS -
      totalPrice} кредитов.`);
  }
}
