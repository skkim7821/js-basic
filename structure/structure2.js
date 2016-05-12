function Some(name, age, sex) {
	// private
	var name = name,
			age = age,
			sex = sex;

	var privateMethod1 = function() {
		console.log('private method1 is executed');
	};

	var privateMethod2 = function() {
		console.log('private method2 is executed');
	};

	// public
	return {
		getName: function() {
			return name;
		},
		setName: function(name) {
			name = name;
		},
		sayHello: function() {
			privateMethod1();
			privateMethod2();
		}
	};
}

Some.of = function(name, age, sex) {
	return new Some(name, age, sex);
};

var skkim = Some.of('skkim', 20, 'F');
var skkim2 = Some('skkim2', 28, 'M');

console.log('skkim', skkim);
skkim.setName('What the Fuck');
console.log('skkim name is ', skkim.getName());
console.log('skkim2', skkim2);
console.log('name is ', skkim2.getName());


