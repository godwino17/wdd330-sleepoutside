import { getParam, loadHeaderFooter } from './utils.mjs';
import ExternalServices from './ExternalServices.mjs';
import productDetails from './ProductDetails.mjs';

loadHeaderFooter();

loadHeaderFooter();

const product = new productDetails(productId, dataSource);
product.init();
