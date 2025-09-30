const searchBtn = document.querySelector(".search-btn");
const searcInput = document.querySelector(".search-box input");
const cardWrapper = document.querySelector(".content-main__list");

const cardArray = [
  {
    id: 0,
    title: "Первый товар",
    price: "170 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./image/card-image.png",
  },
  {
    id: 1,
    title: "Второй товар",
    price: "171 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./image/card-image.png",
  },
  {
    id: 2,
    title: "Третий товар",
    price: "172 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./image/card-image.png",
  },
];

const render = (cardList) => {
  cardWrapper.innerHTML = "";
  cardList.forEach((item, index) => {
    cardWrapper.insertAdjacentHTML(
      "beforeend",
      `
        <a href="./product.html" class="content-main__list-item">
            <div class="content-main__list-item-img">
                <img src="${item.img}" alt="${item.title}">
            </div>

            <h5 class="content-main__list-item-title">${item.title}</h5>                 

            <strong class="content-main__list-item-price">${item.price}</strong>
                               
            <div class="content-main__list-item-desc-box">
                <span class="content-main__list-item-desc">${item.address}</span>
                <span class="content-main__list-item-desc">${item.date}</span>
            </div>
        </a>
        `
    );
  });
};

const filteredArray = (array, value) => array.filter((item) => item.title.includes(value) || item.price.includes(value))

cardWrapper.style.justifyContent = 'flex-start';
cardWrapper.style.gap = '30px';

render(cardArray);

searchBtn.addEventListener("click", () => {
  render(filteredArray(cardArray, searcInput.value));
});
