// импортировали из другого файла в этот фаил данные
import transactionHistory from './transactions.js';

// создали функцию которая возвращает одну строку разметки
const makeTransactionTableRowmarkup = transaction => {
  // сделали деструктуризацию
  const { id, amount, date, bisiness, name, type, account } = transaction;
  //   console.log(transaction);
  return `
    <tr>
    <th>${id}</th>
    <th>${amount}</th>
    <th>${date}</th>
    <th>${bisiness}</th>
    <th>${name}</th>
    <th>${type}</th>
    <th>${account}</th>
  </tr>
  `;
};

console.log(transactionHistory);
// console.log(makeTransactionTableRowmarkup(transactionHistory[2]));

// получили доступ к ссылке класса
const tableEl = document.querySelector('.js-transaction-table');

// перебрали массив и разделили его на строки
const makeTransactionTableRows = transactionHistory
  .map(makeTransactionTableRowmarkup)
  .join('');

// прицепили всю разметку внизу таблицы
tableEl.insertAdjacentHTML('beforeend', makeTransactionTableRows);
// console.log(makeTransactionTableRows)

const www = document.querySelector('.js-transaction-table-2');

www.insertAdjacentHTML('beforeend', makeTransactionTableRows);
