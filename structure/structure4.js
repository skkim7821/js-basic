function Monad(container) {
	this.container = container;
	return this;
};

Monad.of = function(container) {
	return new Monad(container);
};

Monad.prototype.sayHello = function() {
	this.container += ' Hello Monad. I am a Fucking Crazy. Come on. I Will Destroy All';
	return this;
};

Monad.prototype.sayGoodBye = function(msg) {
	this.container += ' Good Bye. my friends';
	return this;
};

Monad.prototype.fork = function() {
	console.log(this.container);
	return this.container;
};

var monad = Monad.of('hello world.');
monad.sayHello().sayGoodBye().fork();
