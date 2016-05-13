const _name = Symbol(); // private 

export default class Something {
	constructor(name) {
		this[_name] = name;
	};

	get name() {
		return this[_name];
	}

	set name(name) {
		this[_name] = name;
	}

	static of(name) { // only Something Object not instance
		return new Something(name);
	};
}

var instance = Something.of('skkim');
instance.name = 'hello kim';
console.log(instance.name);
