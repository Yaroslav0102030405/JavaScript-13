/*
 * План занятия
 *
 * - Методы массивов:
 * - sort
 * - Чейниг методов
 * - [Библиотека lodash](https://github.com/lodash/lodash) - это библиотека методов
 */

/*
 * Array.prototype.soft(callback(currentEl, nextEl()))
 * - Сортирует и ИЗМЕНЯЕТ оригинальный массив
 * - По умолчинию:
 * - сортирует по возростанию
 * - приводит элементы к строке и сортирует по Unicode(https://unicode-table.com/en/)
 */

// const numbers = [1, 9, 6, 2, 3]
// numbers.sort()
// console.log(numbers)

const letters = ["b", "B", "a", "A"];
// letters.sort()
// console.log(letters)

// Мы работаем с массивом обьектов и sort без callback не очень полезный

/*
 * compareFunction - функция сравнения (callback)
 * Элементы массива сортируются в соответствии с ее возращаемым значением
 * - элементы compareFunction(A, B) меньше 0, сортировка поставит A перед B
 * - элементы compareFunction(A, B) больше 0, сортировка поставит B перед A
 * - элементы compareFunction(A, B) вернет 0, сортировка оставит A перед B на
 * неизменными по отношению друг к другу, но отсортирует их по отношению к ко всем другим элементам
 */

// Сортирует по возростанию
// numbers.sort((curEl, nextEl) => {
//   return curEl - nextEl;
// });

// console.log(numbers);

// А если нужно сзелать по убыванию?
// numbers.sort((curEl, nextEl) => {
//     return nextEl - curEl
// })

// console.log(numbers)
// Мы сортировали оригинальный массив

/*
 * Как сделать копию массива чтобы не сортировать оригинальный
 * Array.prototype.slice()
 * - Операция spread
 */

// const copy = [...numbers]
// copy.sort()
// console.log(copy)
// console.log(numbers)

// По убыванию
// const descSortedNumbers = [...numbers].sort((a, b) => b - a)
// console.log(descSortedNumbers)

// // Сортировка по возростанию
// const ascSortedNumbers = [...numbers].sort((a, b) => a - b);
// console.log(ascSortedNumbers);

// sort() - он сортирует он ничего не выкидывает он меняет положение элементов в массиве
// если тебе нужно отфильтровать и оставить только какие-то то для этого есть filter()

// Как сортировать сложные типы (обьекты)?

/*
 * Кастомная сортировка сложных типов
 */

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];

// По игровому времени
// const sorteByBestPlayers = [...players].sort(
//   (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed
// );
// console.table(sorteByBestPlayers);

// const sorteByWorstPlayers = [...players].sort(
//   (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed
// );
// console.table(sorteByWorstPlayers);

// Сортировка по именни первой буквы по алфавиту
// const byName = [...players].sort((a, b) => {
//   const result = a.name[0] > b.name[0];

//   if (result) {
//     return 1;
//   }

//   if (!result) {
//     return -1;
//   }
// });
// console.table(byName);

// в 99% случаев вам нужно будет сортировать по числам. У вас будет какой-то массив обьектов
// и в этих обьектах вам необходимо будет по какому-то свойству сортировать вниз или верх

/*
 * Новый метод Array.prototype.flat(depth)
 * - Разглаживает массив до указанной глубины
 * - По умолчанию глубина 1
 */

const array = [1, 2, [4, [5]], [6, [7, 7, [9]]]];
console.log(array.flat(3));
// (в скобочках пишем глубину вложености (1) (2) или (3))
// Метод flat() -  недеструктивный он не изменяет оригинал он возвращает новый массив уже разглаженный

/*
 * Array.prototype.flatMap()
 * - Комбинация map + flat
 */

/*
 * Собираем все теги из твитов
 */

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
// console.log(allTags);

const tags = tweets.flatMap((t) => t.tags);
console.log(tags);
// тут мы reduce заменили на метод flatMap()

/*
 * Цепочки вызовов - chaining
 */

// Сначала удвоить значения элементов этого массива
// потом получить только те которые будут больше 10
// и в конце отсортировать полученные по возростанию

const numbers = [1, 5, 2, 4, 3];

// const greaterThenTwo = numbers.filter(num => num > 2);
// console.log(greaterThenTwo);

// const multByThree = greaterThenTwo.map((num) => num * 3);
// console.log(multByThree)

// const sorted = multByThree.sort((a, b) => a - b)
// console.log(sorted)

// Цпепочка предыдущих трех
const sorted = numbers
  .filter((num) => num > 2)
  .map((num) => num * 3)
  .sort((a, b) => a - b);

console.log(sorted);

// Работает только потому что эти методы возвращают на свое место новый массив а на новом массиве ты вызываешь следующий метод

// Почему самый верхний вариант тяжелый а нижний короткий вариант лучше?
// тут слишком много шума много лишних перемен в которые нужно вчитываться
// а внижнем варианте сразу видно numbers и три операции

// Суперсложных операций не бывает цепочка обычно состоит из двух трех максимум из четырех методов

/*
 * Сортируем тех кто онлайн по рангу
 * - сначала фильтруем
 * - потом сортируем
 */

export default [
const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];
]
const onlineAndSorted = players
  .filter((player) => player.online)
  // метод filter возвращает новый массив отфильтрованных игроков у которых online: true
  .sort((playerA, playerB) => playerA.points - playerB.points);
// sort() - вызываеться на результате filter() на том массиве

console.table(onlineAndSorted);

// Оптимизация нужно думать исходя из задачи

/*
* Chaining в методах обьекта как jguery
*/

// jguery - это библиотека для работы с интерфейсами
// В jguery можно писать так точка что-то точка что-то и так до бесконечности
// вызывать методы элемента в цепочку

/*
* union()
*/
// Из 2 массивов сделать 1 массив в котором есть только уникальные элементы из двух
// Подключили скрипт в body lodash и в нем есть метод union для решения этой задачи
console.log(_.union([1, 2, 3], [3, 4, 5, 6]))

/*
* range()
*/
// создает массив от 1 до 5 с шагом 2
console.log(_.range(1, 6, 2))

/*
* sum() и sumBy()
*/

// Подсчитывает сумму всех чисел в массиве
console.log(_.sum([1, 2, 3, 4, 5]))