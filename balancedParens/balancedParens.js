/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

 var balancedParens = function (input) {
  var arr = input.split("") ;
  // debugger;
  var open ="(" ;
  var closed = ")"; 
  var counterOpen = 0;
  var counterClosed = 0
 if(arr.length%2 ===0){
  for (var i = 0; i < arr.length; i++) {
  		if(arr[i] === open){
			counterOpen++
		}
  		 else if(arr[i] === closed){
  		 	counterClosed++
  		 }
  		
  		
  } 
 	if(counterClosed === counterOpen) {
  		return true ;
  	}
 }
  return false ;
};








