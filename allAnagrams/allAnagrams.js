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
	if (typeof(string) !== 'string'){
		return undefined;
	} else {
// declare an array to store the output;
	var arr = [];
	//starting with the recrusive function;
	function anagram(strCurrent, strLeft){
		//check the length of strLeft, if it's equal to 0 then push the curren str into the arr;
		if (strLeft.length === 0){
			arr.push(strCurrent);
			return;
		}
		//loop over the strLeft;
		for (var i = 0; i < strLeft.length; i++) {
		var newStrCurrent = strCurrent + strLeft[i];
		var newStrLeft = strLeft.slice(0,i)+strLeft.slice(i+1);
		// recurse over newStrCurrent & newStrLeft;
		anagram(newStrCurrent, newStrLeft);
		};
	}
	anagram('',string)
		
	return arr;
};