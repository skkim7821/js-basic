
// // step 1 start
// function Shape() {
// 	this.x = 0;
// 	this.y = 0;
// }

// Shape.prototype.move = function(x, y) {
// 	this.x += x;
// 	this.y += y;
// 	console.info('Shape move x: ' + x + ' y: ' + y);
// };


// function Rect() {
// 	var o = new Shape();
// 	return o;
// }

// var rect = new Rect();
// rect.move(10, 20);

// console.log('rect is instanceof rect', rect instanceof Rect);
// console.log('rect is instanceof shape', rect instanceof Shape);
// console.log('rect is constructor of', rect.constructor.name);

// // // step1 end


// // step 2 start
// var shape = {
// 	x: 0,
// 	y: 0,
// 	move: function(x, y) {
// 		this.x = x;
// 		this.y = y;
// 		console.info('Shape move x: ' + x + ' y: ' + y);
// 	}
// };

// function Rect() {}

// Rect.prototype = shape;
// var rect = new Rect();
// rect.move( 20, 30);
// console.log('rect is instanceof rect', rect instanceof Rect);
// console.log('rect is constructor of', rect.constructor.name);
// // step 2 end


 
// // step3 start

// function Shape() {
// 	this.x = 0;
// 	this.y = 0;
// }

// Shape.prototype.move = function(x, y) {
// 	this.x += x;
// 	this.y += y;
// 	console.info('Shape move x: ' + x + ' y: ' + y);
// };


// function Rect() {}

// Rect.prototype = new Shape();
// var rect = new Rect();
// rect.move( 20, 30);
// console.log('rect is instanceof rect', rect instanceof Rect);
// console.log('rect is instanceof shape', rect instanceof Shape);
// console.log('rect is constructor of', rect.constructor.name);

// // step3 end


// // step4 start

// var createObj = function(prototype) {
// 	function F() {}
// 	F.prototype = prototype;
// 	return new F();
// };


// function Shape() {
// 	this.x = 0;
// 	this.y = 0;
// }

// Shape.prototype.move = function(x, y) {
// 	this.x += x;
// 	this.y += y;
// 	console.info('Shape move x: ' + x + ' y: ' + y);
// };


// function Rect() {}

// Rect.prototype = createObj(Shape.prototype);
// var rect = new Rect();
// rect.move( 20, 30);
// console.log('rect is instanceof rect', rect instanceof Rect);
// console.log('rect is instanceof shape', rect instanceof Shape);
// console.log('rect is constructor of', rect.constructor.name);


// // step4 end

// // step5 start

// var createObj = function(prototype) {
// 	function F() {}
// 	F.prototype = prototype;
// 	return new F();
// };


// function Shape() {
// 	this.x = 0;
// 	this.y = 0;
// 	this.z = 0;
// }

// Shape.prototype.move = function(x, y) {
// 	this.x += x;
// 	this.y += y;
// 	console.info('Shape move x: ' + x + ' y: ' + y);
// };


// function Rect() {}
// Rect.prototype = createObj(Shape.prototype);
// Rect.prototype.constructor = Rect;

// var rect = new Rect();
// rect.move( 20, 30);
// console.log('rect z: ', rect.z);
// console.log('rect is instanceof rect', rect instanceof Rect);
// console.log('rect is instanceof shape', rect instanceof Shape);
// console.log('rect is constructor of', rect.constructor.name);

// // step5 end

// step6 start

var createObj = function(prototype) {
	function F() {}
	F.prototype = prototype;
	return new F();
};


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
	Shape.call(this); // step6에 추가됨
}
Rect.prototype = createObj(Shape.prototype);
Rect.prototype.constructor = Rect;  

var rect = new Rect();
rect.move( 20, 30);
console.log('rect z: ', rect.z);
console.log('rect is instanceof rect', rect instanceof Rect);
console.log('rect is instanceof shape', rect instanceof Shape);
console.log('rect is constructor of', rect.constructor.name);

// step6 end

