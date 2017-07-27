'use strict';

// submit button
var button = document.getElementById('submit');
button.addEventListener('click', eventHandler);

// handle submit func
function eventHandler(e) {
  // store data in local storage
  var name = document.getElementById('name_input');
  localStorage.name = JSON.stringify(name.value);
}
