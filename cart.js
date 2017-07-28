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

var cartItems = document.getElementById('cart_items');

// add an item
function load() {
  for(var i = 0; i < item.length; i++) {

    // display item and quantity
    var order = document.createElement('li');
    order.textContent = item[i] + quantity[i];
    cartItems = document.getElementById('cart_items');
    cartItems.appendChild(order);
    var image = document.createElement('img');
    image.src = 'img/' + item[i] + '.jpg';
    order.appendChild(image);

    // add delete button
    var deleteButton = document.createElement('button');
    deleteButton.id = i;
    deleteButton.className = 'delete';
    order.appendChild(deleteButton);

    deleteButton.addEventListener('click', eventHandler);
  }
}

load();

function eventHandler(e){
  console.log('event');
  item.splice(e.target.id, 1);
  quantity.splice(e.target.id, 1);
  cartItems.innerHTML = '';
  load();
};
