import ProductData from "./ProductData.mjs";
import productList from "./ProductList.mjs";

const element = document.querySelector(".product-list");

const dataPath = new ProductData("tents");

const proList = new productList("Tents", dataPath, element);

proList.init();
