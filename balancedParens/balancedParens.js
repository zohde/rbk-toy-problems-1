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

 	var counterLeftP = 0;
 	var counterRightP =0;
 
 	
 	for (var i = 0; i < input.length; i++) {
 		for (var j = i+1; j < input.length; j++) {
 			for (var z = j+1; z < input.length; z++) {
 			
 				if(input[i]=== "(" ){
 					counterLeftP++;	
 				}
 				if(input[j]==="'" && input[z]!=="'" && input[z]===")"){
 					counterLeftP--;
 				}
 			
 				if(input[i] === ")"){
 					counterRightP++
 				}

 	    	}
 		}
 	}
 	if(counterRightP === counterLeftP){
 		return true;
 	}
 	return false;
}

 // var balancedParens = function (input) {
 // 	var counterLeftP = 0;
 // 	var counterRightP =0;
 // 	var counterLeftS = 0;
 // 	var counterRightS =0;
 // 	var counterLeftC =0;
 // 	var counterRightC=0;
 // 	for (var i = 0; i < input.length; i++) {
 // 		for (var j = i; i < input.length; i++) {
 			
 		
 // 		if(input[i]=== "(") 
 // 			if(input[j]!== "]" || (input[j]!=="}" && input[j])){
 // 			counterLeftP++;
 // 		}
 // 		if(input[i] === ")"){
 // 			counterRightP++
 // 		}
 // 		if(input[i]=== "["){
 // 			counterLeftS++;
 // 		}
 // 		if(input[i]=== "]"){
 // 			counterRightS++;
 // 		}
 // 		if(input[i]=== "{"){
 // 			counterLeftC++;
 // 		}
 // 		if(input[i]=== "}"){
 // 			counterRightC++;
 // 		}
 // 	}
 // }
 // 	//I didn't fix the third case... balancedParens(')(');  // false
 // 	if(counterRightP === counterLeftP &&
 // 	 counterLeftS === counterRightS &&
 // 	  counterLeftC === counterRightC){
 // 		return true;
 // 	}
 // 	return false;
 // };
