'use strict';

//Create a list of items as purchased
function Store(name){
  this.name = name;
  this.itemsPurchased = itemsPurchased;
  this.cartItems = document.getElementById('orderCartList');
}

this.render = function() {
  this.itemsPurchased();
}




//create button to delete items from form

var deleteButton = document.getElementById('deleteButton');
deleteButton.addEventListner(click, "eventHandler");

function eventHandler(e){
  var order = document.getElementById('cartItems')


if (e.addItem) e.addItem()
var itemsPurchased = document.getElementById('cartItems').allNames;


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

// add an item
var order = document.createElement('li');
order.textContent = item + quantity;
var cartItems = document.getElementById('cart_items');
cartItems.appendChild(order);
var image = document.createElement('img');
image.src = 'img/' + item + '.jpg';
order.appendChild(image);
