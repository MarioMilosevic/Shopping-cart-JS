/* klikom na neku kategoriju da se izlista u tom products prostoru
lista objekata te vrste proizvoda,
cijena, velicina, boja, materijal tako nesto */

/* 1.prvo nema nicega kliknem na CLICK TO SEE OUR PRODUCTS i onda se pojave ova tri reda tj PRODUCTS
2. klikom na neki od ta 3 reda, ostala 2 reda nestaju a pojavljuju se na vrhu te slike te kategorije, ispod njih cijena boja velicina
3. pored svakog itema treba neko dugme da bude da dodam u cart
4.kada kliknem na to dugme treba cart da se povecava, i da u njemu pise sta je dodato, neki mali novi div npr
5.*/
const app = document.querySelector(".app");
const productsDiv = document.querySelector(".products");
const productsList = document.querySelector(".productsList");
const productsItems = document.querySelector(".productsItems");
const shirts = document.querySelector(".shirts");
const jackets = document.querySelector(".jackets");
const shoes = document.querySelector(".shoes");
const informationDiv = document.querySelector(".information");
const summaryDiv = document.querySelector(".summary");
const cartList = document.querySelector(".cartList");

const showProductsBtn = document.querySelector(".showProducts");
const showPoductsBtn = document.querySelector(".showProducts");
const cartButton = document.querySelector(".cart-button");
