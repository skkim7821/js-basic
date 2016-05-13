export const obj1 = {
	name: 'obj1',	
	x: 1,
	y: 2,
	attr: 'what?',
	attr1: 'attr2',
	func1: function() {
		return 'what is func1?'
	},
	func2: function() {
		return 'what is func2?'
	}
};

export const obj2 = {
	attr1: 'obj2 attr1',
	func3: function() {
		return 'func3';
	},
	func4: function() {
		return 'func4';
	}
};

export const obj3 = function() {
	return {
		func5: function() {
			return 'func5';
		},
		func6: function() {
			return 'func6';
		}
	}
};

export const obj4 = {
	attr3: 'what attr3',
	attr4: 'what attr4',
	func5: function() {
		return this.name;
	},
	func6: function() {
		this.attr3 = 'hello world';
		return this.attr3;
	},
	func7: function() {
		return 'func7';
	},
	init: function() {
		return this.func5() + '  ' + this.func6() + '   ' + this.func7();
	}
};
