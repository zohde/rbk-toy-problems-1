/**
 * A prime number is an integer number that cannot be divided by any number 
 * except itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
	// check to see if n is less than 1, or if the remaning of it being divided by 1 !== 0
	// then return false;
	if (n < 1 || n % 1 !== 0){
		return false;
		// also, if it was equal to 1 it should return false;
	} else if ( n === 1){
		return false;
	} else {
		//the prime number should be larger than 1 and less than n's square root. 
		m = Math.floor(Math.sqrt(n))
		// decrement i to get to the base after using Math.floor
		for (var i = 2; i < m; i--){
			// see if i, which is the starting point of division, % n equals 0 so retrun false;
			if (i%n === 0){
				return false;
			}
			// after checking all cases return true when it's a prime.
		}
		return true; 
	}
	
};

 /* Extra credit: Write a function that generates a list of all prime numbers
  * in a user-specified range (inclusive). If you're not quite sure where to start,
  * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
  * saucy, check out the Sieve of Atkin.)
  */


var primeSieve = function(start, end) {
  // to do
};
