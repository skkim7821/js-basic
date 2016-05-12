function Shape() {
	this.x = 0;
	this.y = 0;
	this.z = 0;
}

Shape.prototype.move = function(x, y) {
	this.x += x;
	this.y += y;
	console.info('Shape move x: ' + x + ' y: ' + y);
};

function Rect() {
	Shape.call(this);
};

Rect.prototype = new Shape();
Rect.prototype.constructor = Rect;

Rect.prototype.get = function() {
	return {
		x: this.x,
		y: this.y
	}
}; 

var rect = new Rect();

console.log('rect z: ', rect.z);
console.log('rect is instanceof rect', rect instanceof Rect);
console.log('rect is instanceof shape', rect instanceof Shape);
console.log('rect is constructor of', rect.constructor.name);

