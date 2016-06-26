/**
 * A prime number is an integer number that cannot be divided by any number 
 * except itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
  // to do
  var array = [];
  for(var i=1; i<=n;i++){
 array.push(i)
  }
  var array2= [];
  for(var i=0;i<array.length;i++){
  	var pass=array[i];
  	if(n%pass===0){
  		array2.push(pass);
  	}
  }
  if(array2.length===2){
  	return true;
  }
  return false;
};

 /* Extra credit: Write a function that generates a list of all prime numbers
  * in a user-specified range (inclusive). If you're not quite sure where to start,
  * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
  * saucy, check out the Sieve of Atkin.)
  */

var primeSieve = function(start, end) {
  // to do
  var array=[];
for(var i=start; i<end;i++){
	array.push(primeTester())

}

};
