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
 	var balance = function (str1){ //strlast as a variable.
 		var str1 = input.split('');
        console.log(str1);
 		// var strlast = input.split('');
   //      console.log(strlast);
        for(i=0; i < str1[i].length; i++){
	 		if(str1[i].length === '(' && str1[i].length -1 === ')'){
	 			return true;
 		}

 		if (str1[i].length === '(' || str1[i].length -1 === ')'){
 			return true;
        	} else {
        		return false;
        	}
 		}
 	} 
 	return balance(input);
 };
