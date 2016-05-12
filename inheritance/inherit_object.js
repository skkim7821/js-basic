var shape = {
	x: 0,
	y: 0,
	move: function(x, y) {
		this.x += x;
		this.y += y;
		console.info('Shape move x: ' + x + ' y: ' + y);
	}
};

function Rect() {}

Rect.prototype = Object.create(shape);
Rect.prototype.constructor = Rect;

var rect = new Rect();

rect.move(30,40);
console.log('rect is instanceof rect', rect instanceof Rect);
// 생성자 함수를 통하지 않고 오브젝트로 상속을 받았기 때문에 rect instanceof shape 같은 걸 쓸 수 없음. 
console.log('rect is constructor of', rect.constructor.name);
