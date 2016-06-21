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
var commonCharacters = function(string1, ...args) {
  var retString = ""
  var compChar;
  var flag = true;
  var string2;
  var strings = args.map(function(e){return e});
  
  for (var i=0; i<string1.length; i++){
	compChar = string1[i]
	for (var j=0; j<strings.length; j++)
		if(strings[j].indexOf(compChar)===-1 || strings[j].indexOf(compChar.toLowerCase()) === -1){
			flag = false;
		}
  	if(flag && (retString.indexOf(compChar)===-1||retString.indexOf(compChar.toLowerCase())===-1)){
  		retString = retString+compChar.toLowerCase();
  	}
  }
  return retString;
};