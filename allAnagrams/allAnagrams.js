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


var result = [];
var allAnagrams = function(string,oneWord) {
    var oneWord = oneWord || '';
	if(oneWord.length === string.length)
		result.push(oneWord);
	else {
		for (var i = 0; i < string.length; i++) {
			oneWord+= string[i] + allAnagrams(string.slice(1),oneWord);
		}
	}
	return result;
};