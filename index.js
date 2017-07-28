'use strict';

var itemsInCart = [];
var quantityOfItemsInCart = [];

var select = document.getElementById('select');
var quantity = document.getElementById('quantity');

var personName = document.getElementById('personName_input');
var street = document.getElementById('street_input');
var city = document.getElementById('city_input');
var state = document.getElementById('state_input');
var zip = document.getElementById('zip_input');
var phone = document.getElementById('phone_input');
var credit = document.getElementById('credit_input');


// load options for purchase
for(var i = 0; i < Image.allNames.length; i++) {
  var opEl = document.createElement('option');
  opEl.textContent = Image.allNames[i];
  select.appendChild(opEl);
  console.log('working');
}

// submit button
var button = document.getElementById('submit');
button.addEventListener('click', eventHandler);

// handle submit func
function eventHandler(e) {
  // stop default funciton
  e.preventDefault();
  // store order info
  itemsInCart.push(select.value);
  quantityOfItemsInCart.push(quantity.value);
  localStorage.item = JSON.stringify(itemsInCart);
  localStorage.quantity = JSON.stringify(quantityOfItemsInCart);

  // store personal data
  localStorage.personName = JSON.stringify(personName.value);
  localStorage.street = JSON.stringify(street.value);
  localStorage.city = JSON.stringify(city.value);
  localStorage.state = JSON.stringify(state.value);
  localStorage.zip = JSON.stringify(zip.value);
  localStorage.phone = JSON.stringify(phone.value);
  localStorage.credit = JSON.stringify(credit.value);
}
