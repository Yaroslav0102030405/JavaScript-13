/*
* Получить ссылку на какой-то определенный элемент в коде можно с помощью следующих двух методов
*
* document.querySelector(selector) и document.quertSelectorAll(selector)
* selector - любой валидный CSS-селектор
*/

const navEl = document.querySelector('.site-nav')
console.log(navEl)
// возвращает первый найденный элемент или если не нашло ничего то значение null

const navLinksEl = document.querySelectorAll('.site-nav_link')
console.log(navLinksEl)
// возвращает все link или если не нашло ничего то пустой массив []

// Второй вариант можно выполнить прямо на элементе document.querySelectorAll

/*
*Ddocument.querySelectorAll и Element.querySelectorAll
*/