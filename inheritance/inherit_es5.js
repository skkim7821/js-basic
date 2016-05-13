function Shape() {
	this.x = 0;
	this.y = 0;
}

// 이 패턴은 인스턴스 형태에서는 호출되지 않는다. 단지 constructor에서만 쓰이게 된다. 
Shape.make = function() {
	console.info('what is this?');
};

// 그래서 이렇게 쓰게 되면 자바스크립트에서 꼴보기 싫은 new 키워드를 없앨 수 있다. es6로 올라가면서 Array.of 처럼 새로운 인스턴스를 만들 때 쓰이게 됐다.  
Shape.of = function() {
	return new Shape();
};

Shape.prototype.move = function(x, y) {
	this.x += x;
	this.y += y;
	console.info('Shape move x: ' + x + ' y: ' + y);
};

function Rect(width, height) {
	Shape.call(this); // call superclass
	this.width = width;
	this.height = height;
}

Rect.prototype = Object.create(Shape.prototype); // 여기에서 Object.create의 역할은 무엇인가? 
Rect.prototype.constructor = Rect;
Object.defineProperty(Rect.prototype, 'constructor', { 
	enumerable: false
});

function Cuboid(width, height, depth) {
	Rect.call(this, width, height);
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


var rect = new Rect(200, 300);
console.log('Is rect an instance of Rectangle?', rect instanceof Rect);
console.log('Is rect an instance of Shape?', rect instanceof Shape);

console.log(rect);
rect.move(10, 10);

for (var i in rect) {
	console.log('property: ', i);
}
