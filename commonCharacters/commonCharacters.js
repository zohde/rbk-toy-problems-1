/**
 * Write a function `commonCharacters(str1, str2)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `str1`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'

 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

//Works for any number of input strings:
//for may string...
var commonCharacters = function(string1, string2){
	var array=[];
	var result=[];
	var lastresult="";
	for(var i=0;i<arguments.length;i++){
		var arr=arguments[i];
		array.push(arr);
	}
	for(var j=0;j<array.length-1;j++){
		for(var k=0;k<array[j].length;k++){
				if(array[j].indexOf(array[j+1][k])!==-1){
					result.push(array[j+1][k]);
			}
		}
	}
	lastresult=result.join("");
	return lastresult;
} ;
//for just 2 string...
var commonCharacters = function(string1, string2) {
	var array1=string1.split("");
	var array2=string2.split("");
	var arr=[];
	var str="";
	for(var i=0;i<array1.length;i++){
		if(array2.indexOf(array1[i])!==-1){
			arr.push(array1[i])
		}

	}
	str=arr.join("");
	return str;
};