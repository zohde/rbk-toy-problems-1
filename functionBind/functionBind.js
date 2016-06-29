
 // function bind():
 //  example 1:
 //  var alice = {
 //   name: 'alice',
 //   shout: function(){
 //     alert(this.name);
 //   }
 // }
 // var boundShout = bind(alice.shout, alice);
 // boundShout(); // alerts 'alice'
 // boundShout = bind(alice.shout, {name: 'bob'});
 // boundShout(); // alerts 'bob'
 //  example 2:
 //  var func = function(a, b){ return a + b };
 // var boundFunc = bind(func, null, 'foo');
 // var result = boundFunc('bar');
 // result === 'foobar'; // true

var bind = function(func, context) {
	//according to MDN; because we have arguments provided to the function bind, which is an Array-like object -
	// we can use Array.prototype to convert the Array-like object into a new array to bind the function to. 
	//https://msdn.microsoft.com/en-us/library/ff841995(v=vs.94).aspx
	//https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
	//thus, start slicing from the second argument,
 var args = Array.prototype.slice.call(arguments, 2);
 // the call, calls a method of an object to replace the current object.
 // https://msdn.microsoft.com/en-us/library/h2ak8h2y(v=vs.94).aspx
 //we will then retrun the function;
 	return function(){
 		//in here we well make a copy of the other arguments also using Array.prototype;
	 	var args2 = Array.prototype.slice.call(arguments);
	 	// we will join the two sets of arguments, now in an array, together using the method concat(),
	 	// which returns an array made of the two arrays that was called to join them.
	 	//https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
	 	var allArgs = args.concat(args2);
	 	//now use apply to apply the ananymous function we declared to the context;
	 	 return func.apply(allArgs,context);
 		
 	}
};

 // * Function.prototype.bind:
 // *
 // * example 1:
 // *
 // * var alice = {
 // *   name: 'alice',
 // *   shout: function(){
 // *     alert(this.name);
 // *   }
 // * }
 // * var boundShout = alice.shout.bind(alice);
 // * boundShout(); // alerts 'alice'
 // * boundShout = alice.shout.bind({name: 'bob'});
 // * boundShout(); // alerts 'bob'
 // *
 // * example 2:
 // *
 // * var func = function(a, b){ return a + b };
 // * var boundFunc = func.bind(null, 'foo');
 // * var result = boundFunc('bar');
 // * result === 'foobar'; // true
 // *


Function.prototype.bind = function(a, args1, args2) {
};
