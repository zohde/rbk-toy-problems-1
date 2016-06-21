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
   // write your code hre
   
   var paraOpen = "(";
   var paraClose = ")";
   var squareOpen = "[";
   var squareClose = "]";
   var curlyOpen = "{";
   var curlyClose = "}";
   var opening = 0;
   var closing = 0;
   if (input[0] === paraClose || input[0] === squareClose || input[0] === curlyClose) {return false;}
   for (var i = 0; i < input.length; i++) {
   	 if (input[i] === paraOpen || input[i] === squareOpen || input[i] === curlyOpen){
   	 	opening ++;
   	 } else if (input[i] === paraClose || input[i] === squareClose || input[i] === curlyClose){
   	 	closing++
   	 }
   }
 if (opening === closing) {
 	return true;
 } else {
 	return false;
 }
 };

