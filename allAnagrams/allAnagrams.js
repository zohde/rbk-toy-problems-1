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

 var result=[];
 //i didn't finush yet....
var allAnagrams = function(string) {
	// var allAnagrams2=function(a){
	// 	str=str+a;
	// }
	// if(str.length===string.length){

	// }

	result.push(string);	
	  var arr=[];
	 
	//arr.push(string);
	var array=string.split("");
	
	for(var j=0;j<array.length;j++){
		for(var i=0;i<array.length;i++)
		
		arr.push(array[i]);

	//str=str+arra
	//allAnagrams()
	// }
	
	
// }
 return arr;
};