if (typeof Object.create != 'function') {
	Object.create = (function() {
		var Temp = function() {}; // IIFE를 쓴 이유는 순전히 Temp을 내부 변수로 만들기 위함. 클로저로 쓰기 위함
		return function (prototype) {
			if (arguments.length > 1) { // arguments가 하나 이상 되면 에러
				throw Error('Second argument not supported');
			}
			if (prototype !== Object(prototype) && prototype !== null) { // 프로토타입이 프로토타입이여야 하고 널이 아니어야 함
				throw TypeError('Argument must be an object or null');
			}
			if (prototype == null) { // 프토로타입이 널이면 
				throw Error('null [[prototype]] not supported'); // 지원하지 않는다고 던짐
			}
			Temp.prototype = prototype;  // 프로토타입에 넣고 
			var result = new Temp(); // 생성자로 새로 만들고
			Temp.prototype = null; // 프로토타입을 널로 만들어 줌
			return result;
		};
	})(); // IIFE (Immediately-invoked function expresssion)
}
