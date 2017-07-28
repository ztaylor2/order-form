'use strict';

// collect personal info
var personalInfo = [];
var personName = JSON.parse(localStorage.personName);
personalInfo.push(personName);

var street = JSON.parse(localStorage.street);
personalInfo.push(street);

var city = JSON.parse(localStorage.city);
personalInfo.push(city);

var state = JSON.parse(localStorage.state);
personalInfo.push(state);

var zip = JSON.parse(localStorage.zip);
personalInfo.push(zip);

var credit = JSON.parse(localStorage.credit);
personalInfo.push(credit);

// collect order info
var item = JSON.parse(localStorage.item);
var quantity = JSON.parse(localStorage.quantity);

console.log(item);
console.log(quantity);

// display personal info
for(var i = 0; i < personalInfo.length; i++) {
  // push values to cart page
  var liEl = document.createElement('li');
  liEl.textContent = personalInfo[i];
  var ulEl = document.getElementById('personal_info');
  ulEl.appendChild(liEl);
}

var order = document.createElement('li');
order.textContent = item + quantity;
var cartItems = document.getElementById('cart_items');
cartItems.appendChild(order);
var image = document.createElement('img');
image.src = 'img/' + item + '.jpg';
order.appendChild(image);

// order.appendChild(<img src = "image.all[i].source">);
