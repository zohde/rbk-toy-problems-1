/**
 * A prime number is an integer number that cannot be divided by any number 
 * except itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

4

var primeTester = function(n) {
// test the n if it is divisable by 2 or 3 or 6 or 5 or 10  
  if (n === 1 || n===2 || n===3 || n===5) {
  	return true}
   	
   	else if (n%10 !==0){
  	if (n%5 !==0){
  		if (n%3 !==0){
  			if (n%2 !==0){
  				return true;
  			}
  		}
  	}
  } else return false;
  


  /*if (n%2 !== 0 || n%3 !==0 || n%5 !==0 || n%10 !==0){
  	return true;
  }else return false;*/
};

 /* Extra credit: Write a function that generates a list of all prime numbers
  * in a user-specified range (inclusive). If you're not quite sure where to start,
  * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
  * saucy, check out the Sieve of Atkin.)
  */


var primeSieve = function(start, end) {
  // to do
};
