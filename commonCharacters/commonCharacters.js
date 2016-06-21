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
	var str1 = string1.split('');
	var str2 = string2.split('');
	var count = 0;
	var str3 = '';
	for(i=0; i<str1[i].length;i++){
		for(j=0; j<str2[j].length;j++){
			if(str1[i] === str2[j]){
				console.log(str1);
				console.log(str2);
				 str3 = str1+str2[j];
				count++;
			} else {
				
				count++;
			}
		}
	}
	console.log(str3);
	return str3;
  
};