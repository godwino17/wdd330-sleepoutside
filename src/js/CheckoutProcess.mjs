import { getLocalStorage } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";

const externalServices = new ExternalServices();

function packageItems(items) {
  return items.map((item) => ({
    id: item.Id,
    name: item.Name,
    price: item.FinalPrice,
    quantity: item.Quantity || 1,
  }));
}

// Helper to turn HTML form input values into a plain JS object
function formDataToJSON(formElement) {
  const formData = new FormData(formElement);
  const convertedJSON = {};

  formData.forEach((value, key) => {
    convertedJSON[key] = value;
  });

  return convertedJSON;
}

export default class CheckoutProcess {
  constructor(key, outputSelector) {
    this.key = key;
    this.outputSelector = outputSelector;
    this.list = [];
    this.itemTotal = 0;
    this.shipping = 0;
    this.tax = 0;
    this.orderTotal = 0;
  }

  init() {
    this.list = getLocalStorage(this.key) || [];
    this.calculateItemSubtotal();
    this.calculateOrderTotal();
  }

  calculateItemSubtotal() {
    // 1. Calculate item subtotal
    this.itemTotal = this.list.reduce(
      (sum, item) => sum + item.FinalPrice * (item.Quantity || 1),
      0
    );

    // 2. Display subtotal in HTML right away
    const subtotal = document.querySelector(`${this.outputSelector} #subtotal`);
    if (subtotal) {
      subtotal.innerText = `$${this.itemTotal.toFixed(2)}`;
    }
  }

  calculateOrderTotal() {
    this.tax = this.itemTotal * 0.06;

    const totalCount = this.list.reduce(
      (sum, item) => sum + (item.Quantity || 1),
      0
    );

    this.shipping = totalCount > 0 ? 10 + (totalCount - 1) * 2 : 0;

    this.orderTotal = this.itemTotal + this.tax + this.shipping;

    this.displayOrderTotals();
  }

  displayOrderTotals() {
    const tax = document.querySelector(`${this.outputSelector} #tax`);
    const shipping = document.querySelector(`${this.outputSelector} #shipping`);
    const orderTotal = document.querySelector(`${this.outputSelector} #orderTotal`);

    if (tax) tax.innerText = `$${this.tax.toFixed(2)}`;
    if (shipping) shipping.innerText = `$${this.shipping.toFixed(2)}`;
    if (orderTotal) orderTotal.innerText = `$${this.orderTotal.toFixed(2)}`;
  }

  async checkout(form) {
    // Convert form fields to JSON object
    const json = formDataToJSON(form);

    // Add extra required fields for backend payload
    json.orderDate = new Date().toISOString();
    json.orderTotal = this.orderTotal.toFixed(2);
    json.tax = this.tax.toFixed(2);
    json.shipping = this.shipping;
    json.items = packageItems(this.list);

    try {
      const res = await externalServices.checkout(json);
      console.log(res);

      localStorage.removeItem(this.key);

      location.href = "success.html";
    } catch (err) {
      console.error(err);
    }
  }
}