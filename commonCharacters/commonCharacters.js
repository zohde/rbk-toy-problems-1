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
	var arr = [];
	for (var i = 0; i < string1.length; i++) {
		for (var j = 0; j < string2.length; j++) {
			if(string1[i]=== string2[j]){
				if(arr.indexOf(string1[i])===-1)
				arr.push(string1[i])
			}		
		}
			
		
	}
	var str = arr.join();
	return str;

  
};

// .............extra credit.................
var commonCharacters2 = function(){
	var str = "";
	var arr = [];
	str = str.concat(arguments);
	for (var i = 0; i < str.length; i++) {
		for (var j = i+1; j < str.length; j++) {
			if(str[i] === str[j]){
				 if(arr.indexOf(str[i])=== -1){
					arr.push(str[i])
				
				}
			}
		}
	}
	str2=arr.join();
	return str2;

}