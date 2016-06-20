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
   parentheses=false;
   var arr=input.split("");
   for(var i=0;i<input.length;i++){
   	if(input[i]==="("){
   		for(var j=0;j<input.length;j++){
   			if (input[j]===")"){
   				parentheses===true;
   				input=input.splice(input[i],1);
   				input=input.splice(input[j],1);
   			}
   		}

   	}
   }
   for(var i=0;i<input.length;i++){
   	if(input[i]==="(" || input[i]===")")
   		parentheses===false;
   }

   return parentheses;
 };
