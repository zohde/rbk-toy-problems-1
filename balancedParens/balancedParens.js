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
 /*	inputs: string that contains parenthesis
 	output: true or false
 	edge cases:
 	1- not a string
 	2- parenthesis that are not a string
 	expected inputs:
		- (()), (,), )(
	logic, search string for first wrong input and return false
	1- take string
	2- start iterating over the charachters from begining,
		- if character is '(', then;
			- check in an array of brakets if length is even, and last item was ')'
				- if length is 0, go to next step
			- store it in the array
			- split the string from after this characters position
				call function with remaining of string
		- 
		- if character is ')'
 */

 var balancedParens = function (input) {
   var arrBrackets = [];
   var counterL = 0;
   var counterR = 0;
   if(typeof input !== 'string'){
   	return false
   }
   var input = input.split('')
   var ls = input.length
   		
   		if (ls === 2){
   			if(input[0]==='(' && input[ls-1]===')'){
   				return true;
   			}else {
   				return false;
   			}
   		} 
   		else{
			for (var i=0; i<input.length; i++){
	   			var l = arrBrackets.length;
	   			if (input[i]==='('){
	   				if (l%2===0){
	   					arrBrackets.push(input[i]);
	   				}
	   				counterL++
	   			}
	   			else if(input[i]===')'){
	   				if(l%2>0){
	   					arrBrackets.push(input[i]);
	   				};
	   				counterR++;	
	   			}	
	   		}
   			if(l%2===0&&(counterL===counterR)){
   				return true;
   			} else{
   				return false
   			}
   		}
   }

