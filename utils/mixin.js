import { obj1, obj2, obj3, obj4 } from './testObj';

var objs = mixin(obj1, obj2, obj4);
console.log('objs', objs);
console.log(objs.init());

// hasOwnProperty만 할 수 있도록 해야 하는가? 

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

