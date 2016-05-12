class Shape {
	constructor() {
		this.x = 0;
		this.y = 0;
	}

	move(x, y) {
		this.x += x;
		this.y += y;
		console.info('Shape move x: ' + x + ' y: ' + y);
	}
}

class Rect extends Shape {
	constructor(width, height) {
		super();
		this.width = width;
		this.height = height;
	}

	get pos() {
		return {
			x: this.x,
			y: this.y
		}
	}

	set pos(o) {
		this.x = o.x;
		this.y = o.y;
		console.info(`position is modifed. x: ${this.x} y: ${this.y}`);
	}

	get dimensions() {
		return {
			width: this.width,
			height: this.height
		}
	}

	set dimensions(o) {
		this.width = o.width;
		this.height = o.height;
		console.info(`dimensions is modified. width: ${this.width} height: ${this.height} `);
	}
}

// class function. class에서만 사용되는 함수
Rect.of = (width, height) => new Rect(width, height);

const rect = Rect.of(100, 100);
console.info('rect is instance of Shape', rect instanceof Shape);
console.info('rect is instance of Rect', rect instanceof Rect);
rect.move(50, 50);
rect.pos = {x: 30, y: 50};
rect.dimensions = { width: 300, height: 500};

