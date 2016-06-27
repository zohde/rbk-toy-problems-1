/**
 * A prime number is an integer number that cannot be divided by any number 
 * except itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
<<<<<<< HEAD
	var counter = 0;
	for(var i = 0; i<=n; i++){
		if(n%i === 0){
			counter++;
		}
	}
	return counter <= 2
=======
  // to do
>>>>>>> 41ca4f541867a5e438506ca07b5cff54d5b8a7f0
};

 /* Extra credit: Write a function that generates a list of all prime numbers
  * in a user-specified range (inclusive). If you're not quite sure where to start,
  * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
  * saucy, check out the Sieve of Atkin.)
  */


<<<<<<< HEAD
var primeSieve = function(start, end) {	
  var arr = []
  if(start > end){
  	return primeSieve(end,start);
  }
  for(var i = start;i <= end; i++){
  	if(primeTester(i)){
  		arr.push(i)
 	}
  };
  return arr;
}


var primeSieve2 = function(start, end) {	
  var arr = []
  if(start > end){
  	return primeSieve(end,start);
  }
  for(var i = start;i <= end; i++){
  	if(i === 2 || i === 3 || i === 5 || i === 7 || i === 11){arr.push(i)}
  	if(i % 2 !== 0){
  	  if(i % 3 !== 0){
  	  	if(i !== 5 && i % 5 !== 0){
  	  		if(i % 7 !== 0 && i % 11 !== 0){
  	  		arr.push(i)
  	  		}
  	  	}
  	  }	
  	}
  };
  return arr;
}


// Starting with prime tester
// 11 17 19 are prime numbers what differentiates them from others
// hmmm if I did for loop that runs with i starting one . and set a counter 
// if that counter is 2 then its prime . if its not then its not prime
// cool toy problem;

// MY PRIME SIEVE 2 IS THE WORST WAY EVER TO IMPLEMENT PRIME NUMBERS
=======
var primeSieve = function(start, end) {
  // to do
};
>>>>>>> 41ca4f541867a5e438506ca07b5cff54d5b8a7f0
