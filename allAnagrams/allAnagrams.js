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

var allAnagrams = function(string) {
// input = "string";
// output = ['','',''];
// check for edge cases like if the input wasn't a string;
// declare an array to store the output;
	var arr = [];
	if (typeof(string) !== 'string'){
		return undefined;
	} else {
		// loop over the whole string length;
		for (var i = 0; i < string.length; i++) {
		// declare a variable that is a function which recurse over the remaining length of the string;
		var str = function('string'){
			// declaring a str2 to store the results of the recursive function.
			var str2= '';
			//idealy this function should take the first letter(i.e. index) of the string, 
			// recurse over the remaining letters until it reaches the end of the length.
			// return str2; 
		}

		}
		// outside the main loop will push str2 into arr
	}
	// finally return arr;
	return arr;
};