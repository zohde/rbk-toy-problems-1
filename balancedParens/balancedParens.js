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
 	var counter= 0;
 	var counter1=0;
 	var ARR= input.split("");
 	for (var i=0; i<ARR.length; i++){
 		if (ARR[i]==="(" || ARR[i]==="[" || ARR[i]==="{"){
 			counter++;
 		}
    for (var j=0; j<ARR.length; j++){
        if(ARR[j]===")"|| ARR[j]==="]" || ARR[j]==="}"){
        	counter1++;
        }
      }  
        if (counter=== counter1 || counter%2===0 && counter1%2===0){
        	return true;
        }

 	}
 	return false;
 };
