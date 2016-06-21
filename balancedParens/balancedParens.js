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

 var balancedParens = function (input,input2) {
   // write your code hre
   if(input ==="("&&input2===")"){
   	return true;
   }
   return false;
}

var balancedParens = function (input) {
   var result =false
   for (var i=0;i<input.length;i++){
   	var fetch =input[i];
   	if(!result){
   		if(fetch ==="("&& fetch===")"){
   			return true;
   		}
   		return false;
   	}
   
   }
 };
