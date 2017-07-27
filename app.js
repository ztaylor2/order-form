'use strict';

function Image(name) {
  this.name = name;
  this.source = 'img/' + this.name + '.jpg';
  this.timesShown = 0;
  this.timesClicked = 0;
  Image.all.push(this);
}

Image.all = [];
Image.allNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

for(var i = 0; i < Image.allNames.length; i++) {
  new Image(Image.allNames[i]);
}

// submit button
// var button = document.getElementById('submit');
// button.addEventListener('click', eventHandler);

// handle submit func
function eventHandler(e) {
  // store data in local storage
  var name = document.getElementById('name_input');
  localStorage.name = JSON.stringify(name);
}

// push values to cart page
var nameOut = JSON.parse(localStorage.name);
var liEl = document.createElement('li');
liEl.textContent = nameOut;
var ulEl = document.getElementById('cartItems');
ulEl.appendChild(liEl);
