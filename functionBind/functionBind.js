
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

 

var bind = function(func,context,arg1){

	var args = Array.prototype.slice.call(arguments,2);

	return function(arg2){
		var innerArgs = Array.prototype.slice.call(arguments);			
		var allArguments = args.concat(innerArgs);
		return func.apply(context,allArguments)
	}
}



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


// this is the perfect problem because i do not understand it much 
// lets try to work on it 
// my bind function takes the first parameter which is a function 
// what am doing makes no sense 
// am surprised my first example worked , having no clue whats going on :D
// can i get enough with running the first example
// have to read a