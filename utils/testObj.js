// 아주 복잡하게 생긴 오브젝트였으면 한다. 

class A {
	constructor() {
		this.x = 'x';
		this.y = 'y';
		this.z = 'z';
		this.width = 100;
		this.height = 300;
	}

	func1() {
		return 'method1';
	}

	func2() {
		return 'method2';
	}

	func3() {
		return 'method3';
	}
};


class B extends A {
	constructor() {
		super();
		this.xs = 'xs';
		this.ys = 'ys';
		this.zs = 'zs';
	}

	func4() {
		return 'method4';
	}

	func5() {
		return 'method5';
	}

	func6() {
		return 'method6';
	}
}

export default class C extends B {
	constructor() {
		super();
		this.a = 'a';
		this.b = 'b';
		this.c = 'c';
		this.init();
	}

	init() {
		console.log('func4 is', this.func4());
		console.log('func5 is', this.func5());
		console.log('func6 is', this.func6());
	}

	func7() {
		return 'method7';
	}

	func8() {
		return 'method8';
	}

	func9() {
		return 'method9';
	}

	static of() {
		return new C();
	}
}

var c = C.of();
console.log('c', c);
var desc = Object.getOwnPropertyDescriptor(c, 'func9');
console.log('desc func9: ', desc);
for (var i of c) {
	console.log('property: ', i);
}

