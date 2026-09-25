// checkout.js
import { loadHeaderFooter } from './utils.mjs';
import CheckoutProcess from './CheckoutProcess.mjs';

loadHeaderFooter();

const myCheckout = new CheckoutProcess("so-cart", "#order-summary");
myCheckout.init();

// Recalculate when zip loses focus
document.querySelector("#zip").addEventListener("blur", () => {
  myCheckout.calculateOrderTotal();
});

// Intercept form submission
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  
  // Make sure totals are calculated before sending payload!
  myCheckout.calculateOrderTotal(); 
  
  myCheckout.checkout(e.target);
});