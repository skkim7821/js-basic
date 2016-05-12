function Some(name, age, sex) {
	this._name = name;
	this._age = age;
	this._sex = sex;
};

Some.of = function(name, age, sex) {
	return new Some(name, age, sex);
};

Some.prototype = {
	getName: function() {
		return this._name;
	},
	setName: function(name) {
		this._name = name;
	}
};

var skkim = Some.of('skkim', 39, 'M');
console.log('skkim', skkim);
console.log("name's is", skkim.getName());

