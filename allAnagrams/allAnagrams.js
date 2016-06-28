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

 
 //i didn't finush yet....
var allAnagrams = function(string) {
	var result=[];
	var str2="";
	var array=string.split("");
	  var stringOne=function(a){
		  var str="";
		      str=str+a;
		     if(str.length===string.length)
			  return str;
	          }
	for(var j=0;j<array.length;j++){
		for(var i=j;i<array.length;i++){
			str2=stringOne(array[i]);
		}
		result.push(str2);

		}

 return result;
};
var allAnagrams = function(string) {
	var index=[i,j,k];

	var str2="";
	var array=string.split("");
	  for(var c=0;c<string.length*2;c++){
	  	str=string[index[0]]+string[index[1]]+
	  }
 return result;
};
