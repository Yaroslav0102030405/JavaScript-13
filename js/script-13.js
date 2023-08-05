//* Зеленый комментарий
//? Синий комментарий
// ! Красный комментарий
// TODO Оранжевый комментарий

/*
* - Обьекты window и doceument
* - Поиск DOM-узлов с querySelector и querySelectorAll
* - Свойство textContent
* - Свойства "навигации" по DOM-узлам
* - Работа с classList и атрибутами
* - Создание узлов
* - Вставка узлов: appendChild, insertBefore, append, prepend
* - Парс строки: innerHTML и inertAjacantHTML
*/

// ? DOM - Объектная модель документа (Document Object Model) - это интерфейс для работы с HTML-документом.
// ? Содержит набор свойств и методов позволяющих 
// ? искать, 
// ? создавать 
// ? и удалять элементы, реагировать на действия пользователя и многое другое


// ! - document.querySelector(selector)
// !- document.quertSelectorAll(selector)
/*
 * Получить доступ к html-елементу (получить доступ к ссылке)
 *
 * document.querySelector(selector) и document.quertSelectorAll(selector)
 * selector - любой валидный CSS-селектор тег селектор
 */

// Правильное название пеерменной
// Когда вы видете Ref или EL - то это нужно понимать что это ссылка на дом элемент
const navrRef = 10 // Ref - означает ссылка
const naviEl = 5 // El - означает элемент

//Нужно выбрать только один тогда используешь document.querySelector
// получаем доступ (ссылку) на элемент и возвращает первый найденный элемент если ничего не нашел возвращает null
const navigEl = document.querySelector("li");
console.log(navigEl);

// Если нужно выбрать все элементы тогда подойдет document.querySelectorAll
//возвращает все link или если не нашло ничего то пустой массив []
const navLinksEl = document.querySelectorAll("li");
console.log(navLinksEl);

// ! Присвоить элементу что-то другое imageEl.srs = "новую картинку"
// ! imageEl.removeAttribute('src') - удалить атрибут
// ! imageEl.hasAttribute('src') - проверить или есть такой атрибут и если есть то вернеться true // false
// ! Свойства textContent - для изменения текстового контента (заголовки параграф описание)
// ! heroTitleEl.textContent = "новый текст"

// Пример 1
// Например у меня есть секция hero заголовок картинка и я хочу получить доступ к элементам и что-то с ними сделать
// какие-то свойства по изменять (заменить изображение и заменить название изображения)

// мы получили доступ к кнопке (чтобы ее изменить)
const magicBtn = document.querySelector('.button');
// получили доступ к заголовку (для изменения на новый заголовок)
const heroTitleEl = document.querySelector('.hero-title');

// создали функцию которая заменяет старую фоторгафию на новую которая пришла с бекенда
// добавили слушателя событий чтобы при клике выполнилась эта функция замены фотографии
magicBtn.addEventListener('click', () => {
  // получили доступ к замене фоторгафии на другую которую прислали с бекенда
  const imageEl = document.querySelector('.hero__image');
  // console.log(imageEl);
  // console.log(imageEl.src);
  // console.log(imageEl.src);
  // получили доступ к пути адресса и установили новую фоторгафию
  imageEl.src =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0FQ8R0kjGVr1rqYBFplyCNnRHD4B-pN47pleRJvHawQ3TIY5BJHi8rdQ-hVmmxMOazc8&usqp=CAU';
  // установили новое описание
  imageEl.alt = 'Новый заголовок';

  console.log(heroTitleEl.textContent);
  // перезаписали новый заголовок
  heroTitleEl.textContent = 'Я сладкий пирожочек';

  // // удалить атрибут
  // imageEl.removeAttribute('src')
});

// ! action - это классы оформления для CSS и они могу поменяться по этому вы даете классы js
//! js-action - это клас для работы с помощью javascript с этим элементом (не для верстки а для js не трогать)

//! Дата-атрибуты
//! data-action = "add" // добавить
//! data action = "remove" // удалить
//! data action = "edit" // редактировать
// 


// Пример 2
// добавили ссылку
const currentPageUrl = '/portfolio';

const linkEl = document.querySelector(`.site-nav__link[href="${currentPageUrl}"]`)

linkEl.classList.add('site-nav__link--current')

/*
 * Data-атрибуты используються для добавления функционала ане для того чтобы css селекторы пиилить туда
 */
const actions = document.querySelectorAll(".js-actions button");
console.log(actions[2].dataset.action);

/*
 * Интерфейс classList (как добавить стили и как работаь с классами)
 * - add(класс)
 * - remove(класс)
 * - toggle(класс)
 * - replacel(старыйКласс новыйКласс)
 * - contains(класс)
 */

// ! classList.add() - создать класс
//! classList.remove() - удалить клас
//! classlist.toggle()
//! classList.replace() - заменить класс 
//! cklassList.contains() - проверить или там есть такой класс если да тогда вернтет true // false

// const navEl = document.querySelector('.site-nav')
// console.log(navEl.classList)
// // добавить новый класс и через запятую вы добавляете скольок угодно классов. И это работает только с классами
// navEl.classList.add('super-cool', 'bnmkkl')
// // класс который нужно удалить
// navEl.classList.remove('super-cool')


// // можно сделать токл переключение. Если класс есть тогда не добавит а если нет тогда добавит
// navEl.classList.toggle('super-cool')
// // заменили класс super-cool на qazxsw
// navEl.classList.replace('super-cool', 'qazxsw')
// // проверить или есть там такой класс и нам вернте если есть true
// navEl.classList.contains('qazxsw')


/*
 * Свойства Навигации по DOM-узлам
 */

//! navEl.firstElementChild - первый элемент
//! navEl.lastElementChild - последний элемент
//! navEl.children[1] - выбрать элемент по индексу

// Иерархия очень простая. Предки-родители а потомки-дети соседи.

// const navEl = document.querySelector('.site-nav')

// Первый элемент
// const firstNavItemEl = navEl.firstElementChild
// console.log(firstNavItemEl)
// // Последний элемент
// console.log(navEl.lastElementChild)
// console.log(navEl.children);
// // получить доступ к элементу по индексу
// console.log(navEl.children[1]);


/*
 * Создание элементов
 * - Вставка узлов: appendChild(elem), insertBefore(elem, nextSibling), append(...elems), prepend(...elems)
 */

/*
 * Создаем заголовок
 */

//! const titleEl = document.createElement("h1") // сюду нужно написать валидный тег
// тег создаться в памяти и его не будет видно  чтобы он появилься нужно повесит ь его на body


// //создали тег h1
const titleEl = document.createElement("h1");

// создали класс для тега h1
titleEl.classList.add("page-title");

// создали контент внутри тега h1
titleEl.textContent = "Это заголовок страницы";

console.log(titleEl);

// const navsEl = document.querySelector('.site-nav')

/*
 * Создаем изображение
 * https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoLk8GJRa_9ZgeJf-RTZu0mBAeRimUim6ZUQ&usqp=CAU
 * - сначала вы сохдаете элементы в памяти а потом будет добавлять в документ html
 */
const imageEl = document.createElement('img');
imageEl.src =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoLk8GJRa_9ZgeJf-RTZu0mBAeRimUim6ZUQ&usqp=CAU';
imageEl.alt = 'road';
imageEl.width = '640';
// console.log(imageEl);

// document.body.appendChild(imageEl);
const heroEl = document.querySelector('.hero');
heroEl.appendChild(titleEl)
// за первую операцию мы поставили заголовок
// heroEl.appendChild(imageEl)
// за вторую операцию мы поставили картинку

// heroEl.append(titleEl, imageEl)
// за одну операцию добавить любое количество элементов. Порядок важен сначала заголовок потом картинка а не наоборот
// это современный метод для вставки больше чем одного элемента
/*
 * Создаем и добавляем новый пункт в меню
 */
const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.textContent = 'Личный кабинет';
navLinkEl.href = '/profile';



const navEl = document.querySelector(".site-nav");

// вставить первым и по индексу
// navEl.insertBefore(navLinkEl, navEl.children[0]);

// поставить перед последним элементом
navEl.insertBefore(navLinkEl, navEl.lastElementChild);

// поставить последним элементом
// navEl.appendChild(navLinkEl);
console.log(navItemEl);

// получаем ссылку на ul
// const navEl = document.querySelector('.site-nav')
// navEl.appendChild(navItemEl)
// // это поставить последним элементом
// navEl.insertBefore(navItemEl, navEl.firstElementChild);
// // поставить первым
// navEl.insertBefore(navItemEl, navEl.lastElementChild);
// // поставить последним
// navEl.insertBefore(navItemEl, navEl.children[0]);
// //поставить по индексу

/*
 * Создаем и добавляем коллекцию
 */

// const colorPickerOptions = [
//   { label: 'red', color: '#f44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigp', color: '#3f51B5' },
// ];

// const colorPickerContainerEl = document.querySelector('.js-color-picker');

// /*
//  * Пишем функцию для создания разметки колорпикера
//  */
// const makeColorPickerOptions = options => {
//   return options.map(options => {
//     const buttonEl = document.createElement('button');
//     buttonEl.type = 'button';
//     buttonEl.classList.add('color-picker__options');
//     buttonEl.textContent = options.label;
//     buttonEl.style.backgroundColor = options.color;

//     return buttonEl;
//   });
// };

// const elements = makeColorPickerOptions(colorPickerOptions);
// colorPickerContainerEl.append(...elements);

// мы мепнули массив обьектов и получили массив элементов и потом этот элемент массивов уже запентели уже в существующую разметку
// все коллекции в JS делаються вот так

/*
 * Создаем карточку продукта
 * - В классе продукт может быть product--on-sale product--not-available
 */

// export - открыть import - забрать

// Смотреть видео

/*
 * Парс строк
 * Свойство innerHTML
 * - чтение
 * - запись
 */
// const titleEl = document.querySelector('.title');
// console.log(titleEl.textContent)
// console.log(titleEl.innerHTML)
// titleEl.innerHTML = '<a href="">Это ссылка</a>';
// titleEl.innerHTML = ''
// тут мы очитстили контент который находился в теге h2
// Парсит когда видит теги он сам будет их создавать

// А как добавить что-то в строку?
/*
 * Вставка разметки с insertAdjacentHTML
 */

titleEl.insertAdjacentHTML(
  'beforeend',
  '<a href="" class="title-link">Это ссылка</a >',
);

/*
 * Мастерская таблица транзакций
 */

// смотреть видео
