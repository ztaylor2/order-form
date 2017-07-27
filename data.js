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
