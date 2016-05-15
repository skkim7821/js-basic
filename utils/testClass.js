// 아주 복잡하게 생긴 오브젝트였으면 한다. 

export class Aclass {
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


export class Bclass extends Aclass {
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

export class Cklass extends Bclass {
	constructor() {
		super();
		this.a = 'a';
		this.b = 'b';
		this.c = 'c';
		this.init();
		this.state = {
			attr1: 'attr1',
			attr2: 'attr2',
			html: {
				head: {
					meta: 'this is meta',
					script: 'script',
					style: 'style'
				},
				body: {
					header: 'this is header',
					contents: 'contents',
					footer: 'this is footer'
				}
			}
		}
	}

	init() {
		console.log('func4 is', this.func4());
		console.log('func5 is', this.func5());
		console.log('func6 is', this.func6());
	}

	func7() {
		return 'method7';
	}

	func71() {
		console.log('Cklass func71');
	}

	func8() {
		console.log('Cklass func8');
		return 'method8';
	}

	func9() {
		return 'method9';
	}

	static of() {
		return new Cklass();
	}
}

export class Dclass {
	constructor() {
		this.a = 'a';
		this.b = 'b';
		this.c = 'c';
		this.init();
	}

	init() {
		console.log(this.func7());
		console.log(this.func8());
		console.log(this.func9());
	}

	method1() {
		console.log('Dclass method1');
		return 'method7';
	}

	method2() {
		console.log('Dclass method2');
		return 'method8';
	}

	method3() {
		return 'method9';
	}

	static of() {
		return new Dclass();
	}
}

export class Eclass {
	constructor() {
	}

	method4() {
		console.log('Eclass method4');
		return 'method7';
	}

	method5() {
		return 'method8';
	}

	method6() {
		return 'method9';
	}

	static of() {
		return new Dclass();
	}
}

// var c = Cklass.of();
// console.log('c', c);
// var desc = Object.getOwnPropertyDescriptor(c, 'func9');
// console.log('desc func9: ', desc);


