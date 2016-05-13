var obj1 = {
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

var obj2 = {
	attr1: 'obj2 attr1',
	func3: function() {
		return 'func3';
	},
	func4: function() {
		return 'func4';
	}
};

var obj3 = function() {
	return {
		func5: function() {
			return 'func5';
		},
		func6: function() {
			return 'func6';
		}
	}
};

var obj4 = {
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

var objs = mixino(obj1, obj2, obj4);
console.log('objs', objs);
console.log(objs.init());


export default function mixino() {
	var xs = Array.prototype.slice.call(arguments);

	if (xs.length < 2) {
		throw Error('at least two object');
	}

	xs.forEach(function(x) {
		if (typeof x !== 'object') {
			throw Error('Must be object');
		}
	});

	var o = {};
	xs.forEach(function(x) {
		for(var p in x) {
			o[p] = x[p];
		}
	});

	return o;
};

