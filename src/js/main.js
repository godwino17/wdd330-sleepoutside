import ExternalServices from './ExternalServices.mjs';
import ProductList from './ProductList.mjs';
import Alert from './Alert.mjs';
import { loadHeaderFooter } from './utils.mjs';

async function init() {
  await loadHeaderFooter();

  const alert = new Alert();
  alert.init();

  const listElement = document.querySelector('.product-list');
  const dataSource = new ExternalServices('tents');

  const productList = new ProductList('tents', dataSource, listElement);
  productList.init();
}

init();