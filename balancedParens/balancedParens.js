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

var balancedParens = function (string) {
   
  var leftSide=[];
   var rightSide=[];
   for (var i=0; i<string.length; i++) {

    	if(string[i]==='(' || string[i]==='{' || string[i]==='['){
   		 leftSide.push(string[i]);  	
     	}else if (string[i]===')' || string[i]==='}' || string[i]===']'){
   	              rightSide.push(string[i])
        }
   }
   for (var i=0; i<leftSide.length; i++) {
   	 for (var j=rightSide.length-1; j>=0; j--) {
   		if(leftSide.length !== rightSide.length){
   			return false;
   		}
   		else if((rightSide[j]==='}' && leftSide[i]==='{') ||
   			    (rightSide[j]===')' && leftSide[i]==='(') || 
   			    (rightSide[j]===']' && leftSide[i]==='['))
   			return true;
   		return false;
     }
   }
};
