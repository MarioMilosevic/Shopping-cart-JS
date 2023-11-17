"use strict";
/* klikom na neku kategoriju da se izlista u tom products prostoru
lista objekata te vrste proizvoda,
cijena, velicina, boja, materijal tako nesto */

/* 1.prvo nema nicega kliknem na CLICK TO SEE OUR PRODUCTS i onda se pojave ova tri reda tj PRODUCTS
2. klikom na neki od ta 3 reda, ostala 2 reda nestaju a pojavljuju se na vrhu te slike te kategorije, ispod njih cijena boja velicina
3. pored svakog itema treba neko dugme da bude da dodam u cart
4.kada kliknem na to dugme treba cart da se povecava, i da u njemu pise sta je dodato, neki mali novi div npr
5.*/
const app = document.querySelector(".app");
const productsItems = document.querySelector(".productsItems");
const productsItemsShirts = document.querySelector("#productsItemsShirts");
const productsItemsJackets = document.querySelector("#productsItemsJackets");
const productsItemsShoes = document.querySelector("#productsItemsShoes");

const productsDiv = document.querySelector(".products");
const informationDiv = document.querySelector(".information");
const summaryDiv = document.querySelector(".summary");

const cartList = document.querySelector(".cartList");
const productsList = document.querySelector(".productsList");

const showProductsBtn = document.querySelector(".showProducts");
const cartButton = document.querySelector(".cart-button");
const total = document.querySelector(".total");

// Shirt objects
const shirt1 = {
  color: "blue",
  material: "cotton",
  price: 9.99,
};

const shirt2 = {
  color: "orange",
  material: "cotton/polyester",
  price: 6.99,
};
const shirt3 = {
  color: "orange",
  material: "silk",
  price: 19.99,
};
const shirt4 = {
  color: "red",
  material: "cotton",
  price: 18.99,
};

const shirts = [shirt1, shirt2, shirt3, shirt4];

// Jacket objects

const jacket1 = {
  color: "black",
  material: "wool",
  price: 79.99,
};
const jacket2 = {
  color: "red",
  material: "polyiester",
  price: 39.99,
};
const jacket3 = {
  color: "blue",
  material: "cashmir",
  price: 89.99,
};
const jacket4 = {
  color: "brown",
  material: "leather",
  price: 49.99,
};
const jackets = [jacket1, jacket2, jacket3, jacket4];

// Shoes objects

const shoe1 = {
  color: "black/white",
  material: "leather",
  price: 89.99,
};
const shoe2 = {
  color: "white",
  material: "textiles",
  price: 59.99,
};
const shoe3 = {
  color: "black",
  material: "plastic",
  price: 29.99,
};
const shoe4 = {
  color: "blue",
  material: "rubber",
  price: 19.99,
};
const shoes = [shoe1, shoe2, shoe3, shoe4];

// Total products
const allProducts = [shirts, jackets, shoes];

/////////////////////////////////////////////////////////////
showProductsBtn.addEventListener("click", function () {
  app.style.opacity = 100;
});

// 2. klikom na neki od ta 3 reda, ostala 2 reda nestaju a pojavljuju se na vrhu te slike te kategorije, ispod njih cijena boja velicina

const showProductsCategory = function (category) {
  productsItemsJackets.style.display = "none";
  productsItemsShoes.style.display = "none";
  informationDiv.style.display = "none";
  // Sakrio sam nepotrebne divove
  const shirtsContainer = document.createElement("div");
  shirtsContainer.classList.add('organize')
  console.log(shirtsContainer);
  productsList.appendChild(shirtsContainer);
  //   const shirts = [shirt1, shirt2, shirt3, shirt4];
  category.forEach((product) => {
    const html = `
    <div class="productsInfo">
        <div>
        <div>Material: ${product.material}</div>
        <div>Color: ${product.color}</div>
        <div>Price: ${product.price}€</div>
        </div>
    </div>`;
    shirtsContainer.insertAdjacentHTML("afterbegin", html);
  });
};

showProductsCategory(shirts);
