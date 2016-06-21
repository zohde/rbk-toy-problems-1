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
   var flag = false;
   if(input.length % 2 !== 0){
   	return flag;
   }
   for(var  i = 0; i< input.length ; i++){
	   	switch(input[i]){
	   	case "(" || ")":
		   if(input.indexOf("(")<input.indexOf(")")){
		   	flag = true;
		   } 

		case "{" || "}":
			if(input.indexOf("{")<input.indexOf("}")){
		   	  flag = true;
		   } 

		case "[" || "]":
			if(input.indexOf("[")<input.indexOf("]")){
		   	flag = true;
		   } 			
		}   
	}
   	return flag;
 };


 // To have a balanced parentheses then we sure have to have an even number
 // so if we ran over each of them  and checked whenever we find one we add it 
 // after we made sure they are even we want to count each of the brackets
 // and then compare them with each other .
 // so if we first counted how many "(" we have , 
 // then counter how many ")" we have . 
 // if they are equal then thats true;
 // if not then that's definetely false;
// The moment we have an index of ) less than index of ( then  that would be false;
// step number one worked , going on with step number two..
// what if we had three if statements 
// that will determine for us what type of bracket we are using 
// that is do DRY but trying to get the logic.
// we only have three types of brackets. () and [] and {}
// so first we will check what type of bracket it is . then we will use the same indexOf tryout 
// I think that in order to make the second step true is to make a recursion of whats inside the 
// brackets so if we have [(] 
// to recurse whats inside that how can we do that :S:S:S
// by that way '[(]{)}' we will have a false result here;