<<<<<<< HEAD
import ExternalServices from './ExternalServices.mjs';
import ProductList from './ProductList.mjs';
import Alert from './Alert.mjs';
import { getParam, loadHeaderFooter } from './utils.mjs';

loadHeaderFooter();

const alert = new Alert();
alert.init();

const category = getParam('category');

const listElement = document.querySelector('.product-list');
const dataSource = new ExternalServices();
=======
import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter, getParam } from "./utils.mjs";

loadHeaderFooter();

const category = getParam("category") || "tents";
const listElement = document.querySelector(".product-list");
const dataSource = new ProductData();
>>>>>>> 597e0440448b87bdbb58e21926d442993cb75086

const productList = new ProductList(category, dataSource, listElement);
productList.init();

<<<<<<< HEAD
const titleElement = document.querySelector('.title');
if (titleElement && category) {
  const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ');
  titleElement.textContent = `Top Products: ${formattedCategory}`;
}
=======
document.querySelector("#title-header").textContent =
    `Top Products: ${category.charAt(0).toUpperCase() + category.slice(1)}`;
>>>>>>> 597e0440448b87bdbb58e21926d442993cb75086
