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


var commonCharacters = function(string1, string2) {
  var arr1 = string1.split("");
  var arr2 = string2.split("");
  var result = "";
  for (var i = 0; i < arr1.length; i++) {
  	for (var j = 0; j < arr2.length; j++) {
  		if (arr1[i] === arr2[j]) {
  			if (result.indexOf(arr1[i])===-1){
  				result+=arr1[i];	
  			}
  		}
  	}
  }
  return result;
};





/*
// create array of arguments.
// make a for loop inside the arguments array
// use a recursion for the first element in the arguments array for the following elements



var commonCharacters = function() {
  // console.log(arguments.length);
  // console.log(arguments[0]);
  var argumentsArray = [];
  for (var i = 0; i < arguments.length; i++) {
  	argumentsArray.push(arguments[i]);
  }
  //console.log(argumentsArray);
  var arr1 = string1.split("");
  var arr2 = string2.split("");
  var result = "";
  for (var i = 0; i < argumentsArray.length; i++) {
  	argumentsArray[i]
  
  }
  for (var i = 0; i < arr1.length; i++) {
  	for (var j = 0; j < arr2.length; j++) {
  		if (arr1[i] === arr2[j]) {
  			if (result.indexOf(arr1[i])===-1){
  				result+=arr1[i];	
  			}
  		}
  	}
  }
  return result;
};

*/