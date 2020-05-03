const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const PSWD = prompt('Введите пароль');
console.log(PSWD);

switch (PSWD) {
  case null:
    message = 'Отменено пользователем!';
    break;
  case ADMIN_PASSWORD:
    message = 'Добро пожаловать!';
    break;
  default:
    message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
