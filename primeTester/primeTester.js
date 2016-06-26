/**
 * A prime number is an integer number that cannot be divided by any number 
 * except itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */
//  var primeTester = function(n) {
// 	var flag=false;
// 	for(var i=2;i<n*n;i++){
// 		if(i%n===0)
// 			flag=true
// 	}

//   return flag;
// };

var primeTester = function(n) {
	var flag=false;
	if(n===2 || n=5 || ){ flag=true;}
     else if(n%n===0 && n%1===0 && n%2!==0 && n%5!==0 && n%7!==0){
  	      flag=true;
          }

  return flag;
};

 /* Extra credit: Write a function that generates a list of all prime numbers
  * in a user-specified range (inclusive). If you're not quite sure where to start,
  * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
  * saucy, check out the Sieve of Atkin.)
  */


var primeSieve = function(start, end) {
	
	var array=[];
	if(start<end){
 for(var i=start;i<=end;i++){
 	 if(i===2){ array.push();}
     else if(i%i===0 && i%1===0 && i%2!==0){
  	      array.push(i)
          }
  
 		}
	 return array;
	}
	else{primeSieve(end,start);
	}

};
