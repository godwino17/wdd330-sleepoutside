<<<<<<< HEAD
import ExternalServices from './ExternalServices.mjs';
import ProductList from './ProductList.mjs';
import Alert from './Alert.mjs';
import { loadHeaderFooter } from './utils.mjs';
=======
import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import Alert from "./Alert.mjs";
import { loadHeaderFooter, updateCartCount } from "./utils.mjs";
>>>>>>> 597e0440448b87bdbb58e21926d442993cb75086

async function init() {
  await loadHeaderFooter();

<<<<<<< HEAD
  const alert = new Alert();
  alert.init();

  const listElement = document.querySelector('.product-list');
  const dataSource = new ExternalServices('tents');

  const productList = new ProductList('tents', dataSource, listElement);
  productList.init();
}

init();
=======
const alert = new Alert();
alert.init();
const listElement = document.querySelector(".product-list");
const dataSource = new ProductData("tents");
const productList = new ProductList("tents", dataSource, listElement);
productList.init();

updateCartCount();
>>>>>>> 597e0440448b87bdbb58e21926d442993cb75086
