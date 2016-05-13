import { Cklass, Dclass, Eclass } from './testClass';

class Target {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	sayMyName() {
		console.log(this.name);
	}
}

mixin(Target, Cklass, Dclass, Eclass);

function mixin(target, ...sources) {
	target = target.prototype;

	sources.forEach((source) => {
		source = source.prototype;
		var names = Object.getOwnPropertyNames(source);
		names.forEach((name) => {
			if (name !== 'constructor') {
				Object.defineProperty(
					target, 
					name, 
					Object.getOwnPropertyDescriptor(source, name)
				);
			};
		});
	});
}


var target = new Target('skkim', 28);
target.sayMyName();
target.func71();
target.method1();
target.method4();

