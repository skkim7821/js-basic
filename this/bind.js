// fun.bind(thisArg[, arg1[, arg2[,]]])


// Creating a bound function

this.x = 9;
var module = {
	x: 81,
	getX: function() { return this.x }
};

module.getX(); // 81

var retrieveX = module.getX;
retrieveX(); // 9

var boundGetX = retrieveX.bind(module);
boundGetX(); // 81

// 




// Partially applied functions

function list() {
	return Array.prototype.slice.call(arguments);
}

var list1 = list(1,2,3) // [1,2,3]

var leadingThirtysevenList = list.bind(undefined, 37); // 매개변수 하나에 37을 넣어둠. 

var list2 = leadingThirtysevenList(); // [37]
var list3 = leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]

// 



// With setTimeout

function LateBloomer() {
	this.petalCount = Math.ceil(Math.random() * 12) + 1;
}

LateBloomer.prototype.bloom = function() {
	window.setTimeout(this.declare.bind(this), 1000);
	// setTimeout 콜백 펑션 안에서의 this는 window 객체임. 그래서 this를 미리 현재 객체로 만들어줌
};

LateBloomer.prototype.declare = function() {
	console.log('I am a beautiful flower with' + this.petalCount + ' petals!');
};

var flower = new LateBloomer();
flower.bloom();
