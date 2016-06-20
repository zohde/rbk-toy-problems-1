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
 //hello yanfan i try to explane what i do i hope it will be fine..  :)

 var balancedParens = function (input) {
   // write your code hre
   var arr=['(',')'];
   var array=input.split("");
   var flag=true;
   var x=array.length-1;
   if(array.length %2 ===0){ //if the length is even that mean it we can found what we looking for...
    	if(array.length ===2){
    		if((array[0]!==arr[0]&&array[1]!==arr[1])||(array[0]===arr[0]&&array[1]!==arr[1])||(array[0]!==arr[0]&&array[1]===arr[1]))
   			flag=false;//if the length of the array is 2 will chake all above if it's one of them at least is happen it will be false 
    	  }
    	  else{	for(var i=0;i<(array.length/2)-1;i++){
    	  	         if(array[i]===arr[0]&&array[x]===arr[1]){
    	  		         flag=true;
    	  		      	   x--;
    	  		          }
   	                 else flag=false;
   	                 }
    	  }

   }
   else flag=false;//if the length of the string which change to array is not even it will return false always..
   return flag;
 }
 //trying to solve step 2 but no time..sorry
// if((array[i]==='('&&array[i+1]===')')||(array[i]==='{'&&array[i+1]==='}')||(array[i]==='['&&array[i+1]===']'))
// 	flage=true;
// else if(array[i]==='('&&array[x])