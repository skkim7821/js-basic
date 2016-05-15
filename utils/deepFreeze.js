import { obj1, obj2, obj3, obj4 } from './testObj';
import { Cklass } from './testClass';
import mixin from './mixin';

var objs = mixin(obj1, obj2, obj4);
// console.log('objs', objs);

var cklass = Cklass.of();

function deepFreeze(obj) {
	if (typeof obj !== 'object') {
		throw TypeError('must be object');
	}

	var names = Object.getOwnPropertyNames(obj);

	names.forEach(function(name) {
		var prop = obj[name];

		if (typeof prop == 'object' && prop !== null) {
			deepFreeze(prop)
		}
	});

	return Object.freeze(obj);

};

deepFreeze(objs);
deepFreeze(cklass);
console.log(objs.nested.nested.nested);
console.log(objs.nested_obj.nested_obj2.attr1);
cklass.state.attr1 = 'hello?';


// Object.defineProperty(myObject, 'FAVORITE_NUMBER' {
// 	value: 2,
// 	writable: false,
// 	configurable: false
// });
