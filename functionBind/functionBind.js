var bind = function(func, context, ...args) {
	return function (){
		arg = args.concat([].slice.call(arguments));
		return func.apply(context, arg);
	}	
};

Function.prototype.bind = function(a, args1, args2) {
	var that = this;
	var args = [];
	args.push(args1);
	args.push(args2);
	return function (){
		arg = [].slice.call(arguments)
		for (var i=0; i<args.length; i++){
			if (args[i]){
				arg.unshift(args[i])
			}
		}
		return that.apply(a,arg);
	}	
};
