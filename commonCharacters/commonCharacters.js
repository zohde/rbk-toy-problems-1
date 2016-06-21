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
  var newString="";
  for (var i=0; i<string1.length; i++){
  	for(var j=0; j<string2.length; j++){
  		if(string1[i] === string2[j] && newString.indexOf(string1[i])=== -1){
         newString +=(string1[i])+" " ;
  		}//end of If loop
  	}//end of second for loop
  }// end of first for loop
  return newString;
};

var commonCharacters2 = function(){
	var array=[];
	var resutls="";
	for (var i=1; i<arguments.length; i++){
	  for (var j=0; j<arguments[0].length; j++){
	     if(arguments[0].indexOf(arguments[i][j])!== -1 && array.indexOf(arguments[i][j])=== -1){
		  array.push(arguments[i][j]);
		  resutls=resutls+arguments[i][j];
	     }//end of if loop
	  }//end of second for loop
    }//end of first for loop	
	return resutls;
};