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
	var s1 = string1.split("") 
	var s2 = string2.split("")
	var common = [] ;
	for (var i = 0; i < s1.length; i++) {
		for (var j = 0; j < s2.length; j++) {
			if(s2[j] === s1[i]){
				common.push(s1[i])
			}
		}
	}
  return common.join("")
};
// 