function Product(name, price) {
	this.name = name;
	this.price = price;

	if (price < 0) {
		throw RangeError('Cannot create product' + name + 'with a negative price');
	}

	return this;
};

function Food(name, price) {
	Product.call(this, name, price);
	this.category = 'food';
}

Food.prototype = new Product();

function Toy(name, price) {
  Product.call(this, name, price); // 이게 핵심임
  this.category = 'toy';
}
Toy.prototype = new Product();

var cheese = new Food('feta', 5);
var fun = new Tody('robot', 40);

// 익명 함수를 호출하기 위한 call 함수 사용 

var animals = [
  {species: 'Lion', name: 'King'},
  {species: 'Whale', name: 'Fail'}
];

for (var i = 0; i < animals.length; i++) {
  (function (i) { 
    this.print = function () { 
      console.log('#' + i  + ' ' + this.species + ': ' + this.name); 
    } 
  }).call(animals[i], i);
}
