let country = prompt('Введите имя страны');

if (country !== null) {
  country = country.toLowerCase();
}

switch (country) {
  case 'китай':
    console.log(`Доставка в ${country} будет стоить 100 кредитов`);
    break;
  case 'чили':
    console.log(`Доставка в ${country} будет стоить 250 кредитов`);
    break;
  case 'австралия':
    console.log(`Доставка в ${country} будет стоить 170 кредитов`);
    break;
  case 'индия':
    console.log(`Доставка в ${country} будет стоить 80 кредитов`);
    break;
  case 'ямайка':
    console.log(`Доставка в ${country} будет стоить 120 кредитов`);
    break;
  default:
    alert('В вашей стране доставка не доступна');
}
