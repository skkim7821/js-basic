// 아주 복잡하게 생긴 오브젝트였으면 한다. 

function Aclass() {
	this.x = 'x';
	this.y = 'y';
	this.z = 'z';
	this.width = 100;
	this.height = 300;
}

Aclass.prototype = {
	func1: function() {
		return 'method1';
	},
	func2: function() {
		return 'method2';
	},
	func3: function() {
		return 'method3';
	}
};


function Bclass() {
	Aclass.call(this);	
	this.xs = 'xs';
	this.ys = 'ys';
	this.zs = 'zs';
}

Bclass.prototype = Object.create(Aclass.prototype);
Bclass.prototype.constructor = Bclass;

Bclass.prototype.func4 = function() {
	return 'method4';
};

Bclass.prototype.func5 = function() {
	return 'method5';
};

Bclass.prototype.func6 = function() {
	return 'method6';
};



function Cklass() {
	Bclass.call(this);
	this.a = 'a';
	this.b = 'b';
	this.c = 'c';
	this.init();
}

Cklass.prototype = Object.create(Bclass.prototype);
Cklass.prototype.constructor = Cklass;

Cklass.prototype.init = function() {
	console.log('func4 is', this.func4());
	console.log('func5 is', this.func5());
	console.log('func6 is', this.func6());
};

Cklass.prototype.func7 = function() {
	return 'method7';
};

Cklass.prototype.func8 = function() {
	return 'method8';
};

Cklass.prototype.func9 = function() {
	return 'method9';
};

Cklass.of = function() {
	return new Cklass();
};


function Dclass() {}
Dclass.prototype = {
	method1: function() {
		return 'method1';
	},
	methed2: function() {
		return 'method2';
	},
	method3: function() {
		return 'method3';
	}
};

function Eclass() {}
Eclass.prototype = {
	method3: function() {
		return 'Eclass method3';
	},
	method4: function() {
		return 'method4';
	},
	method5: function() {
		return 'method5';
	},
	method6: function() {
		return 'method6';
	}
};

module.exports = { 
	Aclass: Aclass,
	Bclass: Bclass,
	Cklass: Cklass,
	Dclass: Dclass,
	Eclass: Eclass
};

// var c = Cklass.of();
// console.log('c', c);
// var desc = Object.getOwnPropertyDescriptor(c, 'func9');

// for(var i in c) {
// 	console.log('property: ', i);
// }


