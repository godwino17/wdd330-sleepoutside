// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

// helper to get a parameter from the URL string
export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}

<<<<<<< HEAD
export function renderWithTemplate(template, parentElement, data, callback) {
  parentElement.insertAdjacentHTML("afterbegin", template);
=======
export function renderListWithTemplate(templateFn, parentElement, list, position = "afterbegin", clear = false) {
  const htmlStrings = list.map(templateFn);
  if (clear) {
    parentElement.innerHTML = "";
  }
  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}

export function alertMessage(message, scroll = true) {
  const alert = document.createElement("div");
  alert.classList.add("alert");
  alert.innerHTML = `<p>${message}</p><span>X</span>`;
  alert.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN" || e.target.classList.contains("alert")) {
      main.removeChild(alert);
    }
  });
  const main = document.querySelector("main");
  main.prepend(alert);
  if (scroll) {
    window.scrollTo(0, 0);
  }
  setTimeout(() => {
    if (main.contains(alert)) {
      main.removeChild(alert);
    }
  }, 4000);
}

export function updateCartCount() {
  const cartItems = getLocalStorage("so-cart");
  const count = Array.isArray(cartItems) ? cartItems.length : 0;
  const cartCountElement = qs(".cart-count");
  if (cartCountElement) {
    cartCountElement.textContent = count;
  }
}

export function renderWithTemplate(template, parentElement, data, callback) {
  parentElement.innerHTML = template;
>>>>>>> 597e0440448b87bdbb58e21926d442993cb75086
  if (callback) {
    callback(data);
  }
}

<<<<<<< HEAD
// Custom Alert Banner for errors and notification messages
export function alertMessage(message, scroll = true) {
  const main = document.querySelector("main");
  if (!main) return;

  const alert = document.createElement("div");
  alert.classList.add("alert");

  // Populate inner content with message and dismiss button
  alert.innerHTML = `<p>${message}</p><span>X</span>`;

  // Remove alert when the user clicks 'X'
  alert.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN" || e.target.innerText === "X") {
      alert.remove();
    }
  });

  main.prepend(alert);

  // Scroll to top on mobile so the error is immediately visible
  if (scroll) {
    window.scrollTo(0, 0);
  }

  // Automatically hide after 4 seconds
  setTimeout(() => {
    if (document.body.contains(alert)) {
      alert.remove();
    }
  }, 4000);
}

export async function loadTemplate(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Could not load template at ${path}`);
  return await res.text();
=======
export async function loadTemplate(path) {
  const res = await fetch(path);
  const template = await res.text();
  return template;
>>>>>>> 597e0440448b87bdbb58e21926d442993cb75086
}

export async function loadHeaderFooter() {
  const headerTemplate = await loadTemplate('/partials/header.html');
  const footerTemplate = await loadTemplate('/partials/footer.html');

  const headerElement = document.querySelector('#main-header');
  const footerElement = document.querySelector('#main-footer');

  if (headerElement) {
    renderWithTemplate(headerTemplate, headerElement);
  } else {
    console.error('Could not find #main-header in the DOM');
  }

<<<<<<< HEAD
  if (footerElement) {
    renderWithTemplate(footerTemplate, footerElement);
  } else {
    console.error('Could not find #main-footer in the DOM');
  }
=======
  updateCartCount();
>>>>>>> 597e0440448b87bdbb58e21926d442993cb75086
}