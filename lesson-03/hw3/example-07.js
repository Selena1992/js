/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    return { amount, type };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    const obj = this.createTransaction(amount, 'deposit');
    obj.id = this.transactions.length + 1;
    this.transactions.push(obj);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Снятие такой суммы не возможно, недостаточно средств');
    } else {
      this.balance -= amount;
      const obj = this.createTransaction(amount, 'withdraw');
      obj.id = this.transactions.length + 1;
      this.transactions.push(obj);
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let res = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        res += transaction.amount;
      }
    }
    return res;
  },
};

account.deposit(1000);
console.log(account.getBalance());
account.getTransactionTotal('deposit');
account.withdraw(500);
console.log(account.getBalance());
account.getTransactionTotal('withdraw');
account.withdraw(700);
console.log(account.getBalance());
account.getTransactionTotal('withdraw');
console.log(account.getTransactionDetails(1));
console.log(account.getTransactionDetails(2));
console.log(account.getTransactionDetails(3));
