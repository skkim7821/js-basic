// import { Aclass, Bclass, Cklass, Dclass, Eclass } from './testProto';
import { Cklass, Dclass, Eclass } from './testClass';


// var newObject = mixinp(Dclass.prototype, Eclass.prototype, Target.prototype);

var cklass = Cklass.of();

for (let i in cklass) {
	console.log('i', i);
}


function Target(name,age) {
	this.name = name;
	this.age = age;
}

Target.of = function(name, age) {
	return new Target(name, age);
};

Target.prototype = {
	attr3: 'this is attr3',
	method6: function() {
		return 'target method6';
	}
};

Target.prototype = mixin(Cklass.prototype, Dclass.prototype, Eclass.prototype, Target.prototype);
Target.prototype.constructor = Target;

var target = Target.of('skkim', 30);

for(var i in target) {
	console.log(i, target[i]);
}


// 여러 프로토타입 체인으로 되어 있는 경우에는 성능 정하기 있기에 프로토타입 하나에 때려 박는다.
// 이렇게 했을 때 어떤 문제가 있을 수 있을까? 
// mixin 하는 과정에서 override가 된다. 
// 이렇게 하게 되면 타겟 프로토타입에 override가 될 수 있다. 
// 일반 오브젝트 믹스인과 프로토타입 믹스인은 결론적으로 똑같다
// 어떻게 해도 prototype

export default function mixin() {
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

