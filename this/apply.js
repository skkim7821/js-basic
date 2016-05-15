// fun.apply(thisArg, [argsArray]) array(or an array-like object)
// array-like object는 dom object, arguments
// 


Function.prototype.construct = function (aArgs) {
	var oNew = Object.creat(this.prototype);
	this.apply(oNew, aArgs);
	return oNew;
};

Function.prototype.construct = function(aArgs) {
	var fConstructor = this,
			fNewConstr = function() { fConstructor.apply(this, aArgs) };
	fNewContr.prototype = fConstructor.prototype;
	return new fNewContr();
};
