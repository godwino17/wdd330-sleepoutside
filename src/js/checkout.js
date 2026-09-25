import { loadHeaderFooter, getLocalStorage } from './utils.mjs';
import CheckoutProcess from './CheckoutProcess.mjs';

loadHeaderFooter();

const myCheckout = new CheckoutProcess("so-cart", "#order-summary");
myCheckout.init();

// Calculate tax, shipping, and order total when the zip code input loses focus
document.querySelector("#zip").addEventListener("blur", () => {
  myCheckout.calculateOrderTotal();
});