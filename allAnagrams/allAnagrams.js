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
	var anagramsArr = [] ;
	var str = []
	for (var i = 0; i < string.length; i++) {
		for (var j = 1; j < string.length; j++) {
			for (var k = 2; k < string.length; k++) {
				str.push(string[i],string[j],string[k]) ;
				for (var i = 0; i < str.length; i++) {
					
				}
			}
		}
}				
		
		// anagramsArr.push(string[1]) ;
		// allAnagrams(str) ;
		return str ;
	
}