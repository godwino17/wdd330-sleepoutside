import { getParam, loadHeaderFooter } from './utils.mjs';
import ProductData from './ProductData.mjs';
import productDetails from './productDetails.mjs';

loadHeaderFooter();

loadHeaderFooter();

<<<<<<< HEAD
const product = new productDetails(productId, dataSource);
=======
const dataSource = new ProductData('tents');
const productID = getParam('product');

const product = new ProductDetails(productID, dataSource);
>>>>>>> d875b05e55d661a36dc2a37b3a756c64cea795ac
product.init();
