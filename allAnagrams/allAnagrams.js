/**
 * Given a single input string, write a function that outputs an array of strings with every possible
 * combination of letters.
 *
 * At first, don't worry about repeated (duplicate) strings.
 *
 * What time complexity is your solution?
 *
 * Extra credit: De-duplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */
var factorial = function(string){
	var result = 1;
	for (var i = 1; i < string.length; i++) {
		result=result*i;
	}
	return result;
}


var allAnagrams = function(string) {
	var arr = [];
	if(arr.length = factorial(string)){
		return arr;
	}
	var str =""
	//1st element has string.length options and 
	//2nd element has string.length-1 options and .... etc

};