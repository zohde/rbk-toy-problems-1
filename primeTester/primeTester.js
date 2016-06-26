/**
 * A prime number is an integer number that cannot be divided by any number 
 * except itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
  
  // the prime number is that number that factors it self or one one 
  // am trying to make a conditon like that but all the numbers 
  // Are factors it self or on a one 
  //i make a for loop to itriete the 
  for (var i = 2; i < n; i++) {
  	if(n%i === 0){
  		return false ;
  	}

  };
  return true ;



};




 /* Extra credit: Write a function that generates a list of all prime numbers
  * in a user-specified range (inclusive). If you're not quite sure where to start,
  * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
  * saucy, check out the Sieve of Atkin.)
  */

