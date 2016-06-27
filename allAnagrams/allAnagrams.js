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
 // 1- put string in an array
 // 2- take first item and push it in possibility array
 // 3- remove the item from the array
 // 4- call the function with remaining items
 // 5- go to next item and reiterate. 

var allAnagrams = function(string) { //string = abc
	var strArr = string.split(""); // strArr = [a,b,c]
	var solCount=0;
	var solutionFunc = function(arr, c){ //[b,c], 1
		var solutions = []; // []
		solCount++;
		if (c === strArr.length){
			solutionCount = 0;
			return
		}
		for (var i=0; i<arr.length; i++){ // i = 0
			var combination = [];	// []
			combination.push(arr[i]); // [a]
			combination.concat(solutionFunc(arr.map(function(e){return e}).splice(i,1)), solCount); 
			solutions.push(combination.map(function(e){return e;}).join(""));
		}
		return solutions
	}
	return solutionFunc(strArr.map(function(e){return e}), solCount);
};