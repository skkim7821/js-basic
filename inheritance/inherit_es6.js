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
	};

	get pos() {
		return {
			x: this.x,
			y: this.y
		}
	};

	set pos(o) {
		this.x = o.x;
		this.y = o.y;
		console.info(`position is modifed. x: ${this.x} y: ${this.y}`);
	};

	get dimensions() {
		return {
			width: this.width,
			height: this.height
		}
	};

	set dimensions(o) {
		this.width = o.width;
		this.height = o.height;
		console.info(`dimensions is modified. width: ${this.width} height: ${this.height} `);
	};

	// Rect.of = (width, height) => new Rect(width, height);
	static of(width, height) {
		return new Rect(width, height);
	};
}

class Cuboid extends Rect {
	constructor(width, height, depth) {
		super(width, height);
		this.z = 0;
		this.depth = depth;
	}

	get pos() {
		let x = super.pos;
		x.z = this.z;
		return x;
	};

	get dimensions() {
		let x = super.dimensions;
		x.depth = this.depth;
		return x;
	};

	set dimensions(o) {
		super.dimensions(o);
		this.depth = o.depth;
		console.info(`dimensions is modified. width: ${this.width} height: ${this.height} depth: ${this.depth}`);	
	};

	get area() {
		console.info('cuboid area is', this.width * this.height * this.depth);
		return this.width * this.height * this.depth;
	};

	// Cuboid.of = (width, height, depth) => new Cuboid(width, height, depth);
	static of(width, height, depth) {
		return new Cuboid(width, height, depth);
	};
}

// class function. class에서만 사용되는 함수


console.log('-Rect---------------------')

const rect = Rect.of(100, 100);
console.info('rect is instance of Shape', rect instanceof Shape);
console.info('rect is instance of Rect', rect instanceof Rect);
rect.move(50, 50);
rect.pos = {x: 30, y: 50};
rect.dimensions = { width: 300, height: 500};

console.log('-Cuboid-------------------')

const cuboid = Cuboid.of(100, 100, 50);
console.info('cuboid is instance of Shape', cuboid instanceof Shape);
console.info('cuboid is instance of Rect', cuboid instanceof Rect);
console.info('cuboid is instance of Rect', cuboid instanceof Cuboid);
cuboid.move(50, 50);
cuboid.pos = {x: 30, y: 50};
console.log(cuboid.dimensions);
cuboid.area;

