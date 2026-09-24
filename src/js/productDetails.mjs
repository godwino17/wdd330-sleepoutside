<<<<<<< HEAD
import { getLocalStorage, setLocalStorage } from "./utils.mjs"; 

export default class ProductDetails {
    constructor(productId, dataSource) {
        this.productId = productId;
        this.product = {};
        this.dataSource = dataSource;
    }

    async init() {
        console.log("Current Product ID from URL:", this.productId);
        
        // Fetch product details
        this.product = await this.dataSource.findProductById(this.productId);

        // Render HTML
        this.renderProductDetails();

        // Add event listener to cart button
        document
            .getElementById('addToCart')
            .addEventListener('click', this.addProductToCart.bind(this));
    }

    addProductToCart() {
        const productCart = getLocalStorage("so-cart") || [];
        productCart.push(this.product);
        setLocalStorage("so-cart", productCart);
    }

    renderProductDetails() {
        productDetailsTemplate(this.product);
    }
}

function productDetailsTemplate(product) {
    document.getElementById('productBrand').textContent = product.Brand.Name;
    document.getElementById('productName').textContent = product.NameWithoutBrand;

    const productImage = document.getElementById('productImage');
    productImage.src = product.Image;
    productImage.alt = product.NameWithoutBrand;

    document.getElementById('productFinalPrice').textContent = `$${product.FinalPrice}`;
    document.getElementById('productColorName').textContent = product.Colors[0].ColorName;
    document.getElementById('productDescriptionHtmlSimple').innerHTML = product.DescriptionHtmlSimple;

    document.getElementById('addToCart').dataset.id = product.Id;
}
=======
import { getLocalStorage, setLocalStorage, alertMessage } from "./utils.mjs";


export default class ProductDetails {
    constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
 }

 async init() {
    this.product = await this.dataSource.findProductById(this.productId);
    this.renderProductDetails();

    document.getElementById('addToCart').addEventListener('click', this.addProductToCart.bind(this));
 }

 addProductToCart(){
    let cart = getLocalStorage('so-cart');
    
    if (!Array.isArray(cart)) {
        cart = cart ? [cart]: [];
    }

    cart.push(this.product);
    setLocalStorage('so-cart', cart);
    alertMessage(`${this.product.Name} added to cart!`);
 }

renderProductDetails() {
  document.querySelector('#productBrand').innerText = this.product.Brand.Name;
  document.querySelector('#productName').innerText = this.product.NameWithoutBrand;
  document.querySelector('#productImage').src = this.product.Image;
  document.querySelector('#productImage').alt = this.product.Name;
  document.querySelector('#productFinalPrice').innerText = `$${this.product.FinalPrice}`;
  document.querySelector('#productColorName').innerText = this.product.Colors[0].ColorName;
  document.querySelector('#productDescriptionHtmlSimple').innerHTML = this.product.DescriptionHtmlSimple;
}
}
>>>>>>> d875b05e55d661a36dc2a37b3a756c64cea795ac
