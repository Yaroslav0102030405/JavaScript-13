// Создаем и добавляем коллекцию

import colorPickerOptions from '../data/color.json' assert { type: 'json' };
// console.log(colorPickerOptions);

// console.log(colorPickerOptions);

// const colorPickerOptions = [
//   { label: 'red', color: '#f44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

// Пишем функцию для создания колорпикера
// мы создадим для каждого обьекта кнопку

// async function getProducts() {
//   try {
//     const dog = await fetch('../data/color.json');
//     const colorPickerOptions = JSON.parse(dog);
//     console.log(colorPickerOptions);
//   } catch (error) {
//     console.log(error);
//   }
// }

const colorPickerContainerEl = document.querySelector('.js-color-picker');

// создали одну кнопку
const option = colorPickerOptions[0];

// // создали кнопку
// const buttonEl = document.createElement('button');
// // слздали атрибут
// buttonEl.tyoe = 'button';
// // создали название кнопки
// buttonEl.textContent = option.label;
// buttonEl.style.backgroundColor = option.color;

// const elements = colorPickerOptions.map(option => {
//     // создали кнопку
// const buttonEl = document.createElement('button');
// // слздали атрибут
// buttonEl.tyoe = 'button';
// // создали название кнопки
// buttonEl.textContent = option.label;
// buttonEl.style.backgroundColor = option.color;

//     return  buttonEl
// })

// console.log(elements)

// colorPickerContainerEl.append(...elements)

const makeColorPickerOptions = options => {
  return options.map(option => {
    // создали кнопку
    const buttonEl = document.createElement('button');
    // слздали атрибут
    buttonEl.tyoe = 'button';
    // создали название кнопки
    buttonEl.textContent = option.label;
    buttonEl.classList.add('button-colorPicker');
    buttonEl.style.backgroundColor = option.color;

    return buttonEl;
  });
};

const elements = makeColorPickerOptions(colorPickerOptions);
colorPickerContainerEl.append(...elements);

// async function getproducts() {
//   try {
//     const res = (await fetch('../data/products.json')).json();
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// }
