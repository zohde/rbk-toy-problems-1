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

var allAnagrams = function(string) { 
	if(typeof string !== 'string'){
		return;
	};
	if(string.length > 10){
		alert('large input');
		return;
	}
	var strArr = string.split("");
	var combArr = [];
	var n;
	var solutions = [];
	var solutionFunc = function(arr,ind){
		if (ind === strArr.length){
			solutions.push(combArr.map(function(e){return e}).join(""))
			return;
		}
		for (var i=0; i<arr.length; i++){
			var callbackArr = arr.map(function(e){return e;})
			combArr[ind] = arr[i];
			n = ind+1;
			callbackArr.splice(i,1)
			solutionFunc(callbackArr,n);
		}
		return;
	}
	solutionFunc(strArr, 0);
	return solutions
};