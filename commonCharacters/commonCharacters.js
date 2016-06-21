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
 
  var str1Array = string1.split('');
  var str2Array = string2.split('');
  var commonCharObj = {};
  var commonCharArr = [];
  var output = '';

  for(var i = 0; i < str1Array.length; i++){
  	for(var j = 0; j < str2Array.length; j++){
  		if(str1Array[i] === str2Array[j]){
  			commonCharObj[str1Array[i]] = str1Array[i];
  		}
  	}
  }

  commonCharArr = Object.keys(commonCharObj);
  output = commonCharArr.join('')

  return output;
};

