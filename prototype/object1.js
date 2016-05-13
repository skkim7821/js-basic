// Shape --> Object --> null : instance of Shape
function Shape() {
	this.x = 0;
	this.y = 0;
}

Shape.prototype.move = function(x, y) {
	this.x += x;
	this.y += y;
	console.info('Shape move x: ' + x + ' y: ' + y);
};


// Rect --> Shape --> Object --> null : instance of Rect
function Rect(width, height) {
	Shape.call(this);
	this.width = width;
	this.height = height;
}

Rect.prototype = Object.create(Shape.prototype);
Rect.prototype.constructor = Rect;
Object.defineProperty(Rect.prototype, 'constructor', { 
	enumerable: false
});

Rect.prototype.getArea = function() {
	return this.width * this.height;
};


// Cuboid --> Rect --> Shape --> Object --> null : instance of Cuboid
function Cuboid(width, height, depth) {
	Rect.call(this);
	this.width = width;
	this.height = height;
	this.depth = depth;
}

Cuboid.prototype = Object.create(Rect.prototype);
Cuboid.prototype.constructor = Cuboid;
Object.defineProperty(Cuboid.prototype, 'constructor', { 
	enumerable: false
});

Cuboid.prototype.getVolume = function() {
	return this.width * this.height * this.depth;
};

Cuboid.prototype.showMsg = function() {
	console.log('what the hell');
};

var shape = new Shape();
var rect = new Rect(100, 200);
var cuboid = new Cuboid(100, 200, 800);

console.log('------- rect ---------');

console.log('rect is object? ', typeof rect === 'object');
console.log('rect is instanceof? ', rect instanceof Rect);
console.log('rect area is', rect.getArea());

var keys = Object.keys(rect);
var names = Object.getOwnPropertyNames(rect);
console.log('keys: ', keys);
console.log('names: ', names);
// shape.hasOwnProperty('move')

console.log('rect', rect);
for (var i in rect) {
	console.log('properties: ', i);
	var isOwnProperty = rect.hasOwnProperty(i);
	console.log('isOwnProperty: ', isOwnProperty);
}

console.log('------- cuboid ---------');

console.log('cuboid is object? ', typeof cuboid === 'object');
console.log('cuboid is instanceof? ', cuboid instanceof Cuboid);
console.log('cuboid volume is', cuboid.getVolume());

var keys = Object.keys(cuboid);
var names = Object.getOwnPropertyNames(cuboid);
console.log('keys: ', keys);
console.log('names: ', names);
// shape.hasOwnProperty('move')

console.log('cuboid', cuboid);
for (var i in cuboid) {
	console.log('properties: ', i);
	var isOwnProperty = cuboid.hasOwnProperty(i);
	console.log('isOwnProperty: ', isOwnProperty);
}
