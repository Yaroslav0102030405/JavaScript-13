// добавляем в этот фаил массив обьектов чтобы тут с ним работать
import products from './product2.js';
console.log(products);

// Создаем карточку продукта

// const product = {
//   name: 'Сервоприводы',
//   description: 'lorem',
//   price: 2000,
//   avaitable: true,
//   onSale: true,
// };

// повесили верхний элемент и все тоже прицепились

const productsContainerEl = document.querySelector('.js-products');

// Пишем функцию для создания карточки продукта
const makeProductCart = ({ name, description, price }) => {
  const productEl = document.createElement('article');
  productEl.classList.add('product');

  const nameEl = document.createElement('h2');
  nameEl.textContent = name;
  nameEl.classList.add('product-name');

  const descrEl = document.createElement('p');
  descrEl.textContent = description;
  descrEl.classList.add('product-descr');

  const priceEl = document.createElement('p');
  priceEl.textContent = `Цена: ${price} кредитов`;
  priceEl.classList.add('product-price');

  productEl.append(nameEl, descrEl, priceEl);

  return productEl;
};

// console.log(makeProductCart(products[1]))

const elements = products.map(makeProductCart);
console.log(elements);

productsContainerEl.append(...elements);
