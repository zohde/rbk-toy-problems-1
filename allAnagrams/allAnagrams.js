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
	

// 	var allAnagrams = function(string) {
//  +	var resultArr =[];
//  +
//  +	var recursiveFunc = function(accumStr, count, indexArr){
//  +
//  +		if(count === string.length){
//  +			resultArr.push(accumStr);
//  +		}
//  +
//  +		for(var i=0; i<string.length; i++){
//  +			if(!indexOfFunc(indexArr, i)){
//  +				recursiveFunc(accumStr + string[i], count+1, pushIntoArr(indexArr,i))
//  +			}
//  +		}
//  +	}
//  +
//  +	recursiveFunc('',0, []);
//  +
//  +	return resultArr;
//  +}; 
// }





// var allAnagrams = function(string) {
//  +	var indexOfString=string.split("");
//  +	
//  +	var word=[];
//  +
//  +	if (result.length === factorial(indexOfString.length) ) {
//  +		return result
//  +	}
//  +	
//  +	while(word.length !== indexOfString.length){
//  +		var char=indexOfString[random(indexOfString.length)];
//  +		if (word.indexOf(char) === -1){
//  +			word.push(char);
//  +		}
//  +	}
//  +	if(result.indexOf(word.join("")) === -1){
//  +		result.push( word.join(""))
//  +	}
//  +	return allAnagrams(string);
//  +//creat the arr of words
//  +
//  +}; 








