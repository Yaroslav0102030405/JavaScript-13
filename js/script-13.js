// import players from './script-12.js'
// console.log(players)
/*
 * Поиск элементов (анучились выберать элементы)
 */

/*
 * Получить ссылку на какой-то определенный элемент в коде можно с помощью следующих двух методов
 *
 * document.querySelector(selector) и document.quertSelectorAll(selector)
 * selector - любой валидный CSS-селектор
 */

// Нужно выбрать только один тогда используешь document.querySelector
// const navEl = document.querySelector(".site-nav");
// console.log(navEl);
// // возвращает первый найденный элемент или если не нашло ничего то значение null

// // Нужно выбрать все тогда тебе подойдет document.querySelectorAll
// const navLinksEl = document.querySelectorAll(".site-nav_link");
// console.log(navLinksEl);
// возвращает все link или если не нашло ничего то пустой массив []

// Второй вариант можно выполнить прямо на элементе document.querySelectorAll

/*
 * Document.querySelectorAll и Element.querySelectorAll
 */

/*
 * Свойства элемента (hero)
 * Изображение
 * Текст и textContent
 */
// Например у меня есть секция hero заголовок картинка и я хочу получить доступ к элементам и что-то с ними сделать
// какие-то свойства по изменять (заменить изображение и заменить название изображения)

const magicBtn = document.querySelector(".button");
const heroTitleEl = document.querySelector(".hero-title");

magicBtn.addEventListener("click", () => {
  const imageEl = document.querySelector(".hero__image");
  console.log(imageEl);
  console.log(imageEl.src);
  // мы получим ссылку на картинку
  console.log(imageEl.src);
  imageEl.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0FQ8R0kjGVr1rqYBFplyCNnRHD4B-pN47pleRJvHawQ3TIY5BJHi8rdQ-hVmmxMOazc8&usqp=CAU";
  // мы записали и присвоили новую фотку
  imageEl.alt = "Новый заголовок";

  console.log(heroTitleEl.textContent);
  // это свойство которое хранит весь тествоый контент между открывающим и закрывающим тегом
  // Вы используете в том случае когда нужно подминить текствоый контент (перезаписать свойство)
  heroTitleEl.textContent = "Я сладкий пирожочек";
});

// Дальше интерфейс атрибутов - это набор методов для работы с атрибутами

/*
 * Атрибуты (методы)
 * - get(имя-атрибута) почти не используется
 * - set(имя-атрибута) почти не используется
 * - remove(имя-атрибута) удалить атрибут Применяеться на элементе
 * - has(имя-атрибута) проверить или есть атрибут (вернет true или false) Применяется на элементе
 */

// const imageEl = document.querySelector(".hero__image");
// // Если вы хотите удалить атрибут
// // imageEl.removeAttribute("src");

// // Проверить или есть такой артрибут
// console.log(imageEl.hasAttribute("src"));

/*
 * Data-атрибуты
 */
// это кастомный атрбибут где ты можешь на элемент дать произвольный атрибут с произвольным именнем и произвольным значением
// который не являеться стандартным в html
// const actions = document.querySelectorAll(".js-actions button");
// console.log(actions[2].dataset.action);

/*
 * Интерфейс classList (как добавить стили и как работаь с классами)
 * - add(класс)
 * - remove(класс)
 * - toggle(класс)
 * - replacel(старыйКласс новыйКласс)
 * - contains(класс)
 */

// const navEl = document.querySelector('.site-nav')
// console.log(navEl.classList)
// navEl.classList.add('super-cool', 'bnmkkl')
// // через запятую вы добавляете классы. И это работает только с классами
// navEl.classList.remove('super-cool')
// класс который нужно удалить
// у каждого элемента есть специальный интерфейс называеться classlist

// можно сделать токл переключение. Если класс есть тогда не добавит а если нет тогда добавит
// navEl.classList.toggle('super-cool')
// navEl.classList.replace('super-cool', 'qazxsw')
// // заменили класс super-cool на qazxsw
// navEl.classList.contains('qazxsw')
// проверить или есть там такой класс и нам вернте если есть true

// С помощью classlist мы можем на какие-то элементы добавлять штуки рахные. Тут нужно смотреть видео

/*
 * Навигация по DOM
 */

// Иерархия очень простая. Предки-родители а потомки-дети соседи.

// const navEl = document.querySelector('.site-nav')

// // Первый элемент
// const firstNavItemEl = navEl.firstElementChild
// console.log(firstNavItemEl)
// // Последний элемент
// console.log(navEl.lastElementChild)
// console.log(navEl.children);
// // HTMLCollection(3) [li.site-nav__item, li.site-nav__item, li.site-nav__item]
// console.log(navEl.children[0]);

// Вам нужно помнить первый последний и дети

// мы научились получать ссылки на элементы научились читать свойства изменять эти свойства и работать с класс листом
// а теперь будем учиться создавать что-то новое

/*
 * Создание элементов
 * - Вставка узлов: appendChild(elem), insertBefore(elem, nextSibling), append(...elems), prepend(...elems)
 */

/*
 * Создаем заголовок
 */

// const titleEl = document.createElement("h1");
// // Мы создали теги <h1></h1>
// titleEl.classList.add("page-title");
// // создали класс на теги <h1 class="page-title"></h1>
// titleEl.textContent = "Это заголовк страницы";
/* <h1 class="page-title">Это заголовок страницы</h1> */
// console.log(titleEl);
// сейчас мы создали DOM элемент в памяти

/*
 * Создаем изображение
 * https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoLk8GJRa_9ZgeJf-RTZu0mBAeRimUim6ZUQ&usqp=CAU
 * - сначала вы сохдаете элементы в памяти а потом будет добавлять в документ html
 */
const imageEl = document.createElement("img");
imageEl.src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoLk8GJRa_9ZgeJf-RTZu0mBAeRimUim6ZUQ&usqp=CAU";
imageEl.alt = "road";
imageEl.width = "640";
// console.log(imageEl);

// document.body.appendChild(imageEl);
const heroEl = document.querySelector('.hero')
// heroEl.appendChild(titleEl)
// // за первую операцию мы поставили заголовок
// heroEl.appendChild(imageEl)
// за вторую операцию мы поставили картинку

// heroEl.append(titleEl, imageEl)
// за одну операцию добавить любое количество элементов. Порядок важен сначала заголовок потом картинка а не наоборот
// это современный метод для вставки больше чем одного элемента
/*
 * Создаем и добавляем новый пункт в меню
 */
const navItemEl = document.createElement("li");
navItemEl.classList.add("site-nav__item");

const navLinkEl = document.createElement("a");
navLinkEl.classList.add("site-nav__link");
navLinkEl.textContent = "Личный кабинет";
navLinkEl.href = "/profile";

// navLinkEl.appendChild(navLinkEl);

// const navEl = document.querySelector(".site-nav");

// navEl.insertBefore(navItemEl, navEl.children[1]);
navItemEl.appendChild(navLinkEl)
// мы сделали li вложили в а
console.log(navItemEl);

// получаем ссылку на ul
const navEl = document.querySelector('.site-nav')
// navEl.appendChild(navItemEl)
// это поставить последним элементом
// navEl.insertBefore(navItemEl, navEl.firstElementChild);
// поставить первым
// navEl.insertBefore(navItemEl, navEl.lastElementChild);
// поставить последним
navEl.insertBefore(navItemEl, navEl.children[0])
// поставить по индексу

/*
* Создаем и добавляем коллекцию
*/

const colorPickerOptions = [
  { label: "red", color: "#f44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigp", color: "#3f51B5" },
];

const colorPickerContainerEl = document.querySelector('.js-color-picker')

/*
* Пишем функцию для создания разметки колорпикера
*/
const makeColorPickerOptions = options => {
  return options.map(options => {
    const buttonEl = document.createElement('button')
    buttonEl.type = 'button'
    buttonEl.classList.add('color-picker__options')
    buttonEl.textContent = options.label
    buttonEl.style.backgroundColor = options.color

    return buttonEl
  })
}

const elements = makeColorPickerOptions(colorPickerOptions)
colorPickerContainerEl.append(...elements)

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
const titleEl = document.querySelector('.title')
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
  "beforeend",
  '<a href="" class="title-link">Это ссылка</a >'
);

/*
* Мастерская таблица транзакций
*/

// смотреть видео