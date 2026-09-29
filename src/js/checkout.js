// checkout.js
import { loadHeaderFooter } from './utils.mjs';
import CheckoutProcess from './CheckoutProcess.mjs';

loadHeaderFooter();

const myCheckout = new CheckoutProcess("so-cart", "#order-summary");
myCheckout.init();

// Recalculate totals when zip loses focus
document.querySelector("#zip").addEventListener("blur", () => {
  myCheckout.calculateOrderTotal();
});

// Intercept form submission
document.querySelector("#checkout-form").addEventListener("submit", (e) => {
  e.preventDefault();
  
  const myForm = e.target;
  const chk_status = myForm.checkValidity();
  
  // Trigger browser error tooltips if inputs are missing/invalid
  myForm.reportValidity();
  
  // Only proceed if form is valid
  if (chk_status) {
    myCheckout.calculateOrderTotal(); 
    myCheckout.checkout(myForm);
  }
});