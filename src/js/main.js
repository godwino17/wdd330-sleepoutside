<<<<<<< HEAD
import ProductData from './ProductData.mjs';
import ProductList from './ProductList.mjs';
import Alert from './Alert.mjs';
import { loadHeaderFooter } from './utils.mjs';
=======
import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import Alert from "./Alert.mjs";
import { loadHeaderFooter } from "./utils.mjs";
>>>>>>> d875b05e55d661a36dc2a37b3a756c64cea795ac

loadHeaderFooter();

const alert = new Alert();
alert.init();

<<<<<<< HEAD

const listElement = document.querySelector('.product-list');
const dataSource = new ProductData('tents');

const productList = new ProductList('tents', dataSource, listElement);
=======
const listElement = document.querySelector(".product-list");
const dataSource = new ProductData("tents");
const productList = new ProductList("tents", dataSource, listElement);

>>>>>>> d875b05e55d661a36dc2a37b3a756c64cea795ac
productList.init();
