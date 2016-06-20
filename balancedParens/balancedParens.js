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

   var br1_1 = 0; //(
   var br1_2 = 0; //)
   var br2_1 = 0; //[
   var br2_2 = 0; //]
   var br3_1 = 0; //{
   var br3_2 = 0; //}
   var flag = false;

   var inputArray = input.split('');
   var parArray = [];
   for(var i = 0; i < inputArray.length; i++){
   	if(inputArray[i] === '(' || inputArray[i] === '{' || inputArray[i] ===  '[' || inputArray[i] === ']' || inputArray[i] === '}'|| inputArray[i] === ')'){
   		parArray.push(inputArray[i]);
   	}
   }
   if((parArray.length/2)% 1 === 0){

   	for(var i = 0; i < parArray.length; i++){
   		
   		if(parArray[i] === '('){
   			br1_1++;
   		}
   		if(parArray[i] === ')'){
   			br1_2++;
   		}
   		if(parArray[i] === '['){
   			br2_1++;
   		}
   		if(parArray[i] === ']'){
   			br2_2++;
   		}
   		if(parArray[i] === '{'){
   			br3_1++;
   		}
   		if(parArray[i] === '}'){
   			br3_2++;
   		}
   	}
   } else {
   	
   	return false;
   }

   if(br1_1 === br1_2){
   	flag = true;
   } else{
   	flag = false;
   }
   if(br2_1 === br2_2){
   	flag = true;
   } else{
   	flag = false;
   }
   if(br3_1 === br3_2){
   	flag = true;
   } else {
   	flag = false;
   }
   

   
   return flag;
};