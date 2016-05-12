var obj = {
	attr: 'hhhhhh',
	func1: function() {
		console.log('this is a method1');
	},
	func2: function() {
		console.log('this is a method2');
	},
	func3: function() {
		console.log('attr is ', this.attr);
	},
};

obj.func3();
