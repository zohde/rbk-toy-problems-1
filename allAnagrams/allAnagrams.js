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


// split the string to array [a,b,c]
// take the each letter and add to as a member of the array [a,b,c]
// add other letters to each letter [abc, bac, cab]
// make the for loop to uderstand the logic
// convert the for loop to recursion to work for bigger number of strings.

var allAnagrams = function(string) {
	function contains (str){
		var counter = 0;
		for (var i = 0; i < str.length; i++) {
			for (var j = 0; j < str.length; j++) {
				if (str[i]===str[j]){
					counter++
				}
			}
		}
	if (counter>1){return true} else return false;
	}

	var solution = [];
	temp = string.split("");
	for (var i = 0; i < temp.length; i++) {
		for (var j = 0; j < temp.length; j++) {
			for (var k = 0; k < temp.length; k++) {
				solution.push(temp[i]+temp[j]+ temp[k])
			}
		}

	}

	for (var i = 0; i < solution.length; i++) {
		if (contains(solution[i])){

		}
	}

	return solution;
};