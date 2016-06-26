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
<<<<<<< HEAD
	var ARR= string1.split("");
	var ARR2= string2.split("");
	var result= [];
	for (var i=0; i<ARR.length; i++){
		for (var j=0; j<ARR2.length; j++){
			if (ARR[i]===ARR2[j]){
				result.push(ARR[i]);
				
			}

		}
		
	}
	return result.join("");
};

=======
  
};
>>>>>>> a506cfa3efd820b5f01a905a4fc47b7f98a2d111
