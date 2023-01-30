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

const imageEl = document.querySelector(".hero__image");
// Если вы хотите удалить атрибут
// imageEl.removeAttribute("src");

// Проверить или есть такой артрибут
console.log(imageEl.hasAttribute("src"));

/*
 * Data-атрибуты
 */
// это кастомный атрбибут где ты можешь на элемент дать произвольный атрибут с произвольным именнем и произвольным значением
// который не являеться стандартным в html
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

const navEl = document.querySelector('.site-nav')
console.log(navEl.classList)
navEl.classList.add('super-cool', 'bnmkkl')
// через запятую вы добавляете классы. И это работает только с классами
navEl.classList.remove('super-cool')
// класс который нужно удалить
// у каждого элемента есть специальный интерфейс называеться classlist

// можно сделать токл переключение. Если класс есть тогда не добавит а если нет тогда добавит
navEl.classList.toggle('super-cool')
navEl.classList.replace('super-cool', 'qazxsw')
// заменили класс super-cool на qazxsw
navEl.classList.contains('qazxsw')
// проверить или есть там такой класс и нам вернте если есть true

// С помощью classlist мы можем на какие-то элементы добавлять штуки рахные. Тут нужно смотреть видео

/*
* Навигация по DOM
*/