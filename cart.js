'use strict';

// push values to cart page
var nameOut = JSON.parse(localStorage.name);
var liEl = document.createElement('li');
liEl.textContent = nameOut;
var ulEl = document.getElementById('cartItems');
ulEl.appendChild(liEl);
