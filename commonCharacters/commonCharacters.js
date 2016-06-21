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
// var commonCharacters = function(string1, string2) {
  
//   var result = "";
//   for(var i = 0 ; i<string1.length; i++){
//   	if(string2.indexOf(string1[i])!== -1 && result.indexOf(string1[i]) === -1){
//   		result = result+string1[i];
//   	}
//   }

//   return result;
// };


var commonCharacters = function(string1, string2) {  
  var result = "";
  var args = arguments[0];
  for(var i = 0 ; i<args.length; i++){
  	var flag = true;
  	for(var j = 1; j < arguments.length; j++){
	  if(arguments[j].indexOf(args[i]) === -1){
  		flag = false;	  		
      }
  	}
  	if(flag && result.indexOf(args[i]) === -1){
  	  result = result+string1[i];
  	}
  }
  return result;
};

///////////////////////////////////////
// WORKING ON RECURSIVE //
///////////////////////////////////////

var commonCharacters2 = function(string1,string2){
	var result = "";
	var args = arguments[0];
	var total = []
	for(var i = 1 ; i < arguments.length; i++){
		total.push(arguments[i])
	}
	var flag = true;
	var counter = 0;
	var checkOut = function(first){
		if(total.length === i){
			return;
		}
		for(var i =0; i<args.length; i++){
		  if(first.indexOf(args[i]) > -1){
		  	checkOut(total[counter++])
		  }
		}

	}
	checkout(total[0],0)
	return result;
}


// we have two strings .
// run a for loop on the first string 
// whenever the indexOf any letter is NOT -1 , then added it to my result 
// we still have an edge case of duplicate we'll solve that .
// to handle the edge cases we just added and beside the if statement
// to check if our results already have that index or not 
// and we are done with the first thing
// to handle n strings . we already have our structure , we have our work 
// but instead now we will work with arguments , so what we will do is we will pick 
// the first argument and start comparing with the rest of the arguments
// so lets say our argument that we will compare on is the first one 
// and then we will have a for loop for that argument.
// to run over each letter , what i want to do with each letter is to check 
// whether if its available in the rest of the arguments.
// so two for loops , one for the letter . and the second is to run over all
// the loops . 
// we will have a flag on the first for loop 
// if the flag stays true
// then we will add it
// if we get one of them -1 then we will set it to false and not add it
// i know their might be a recursive way . that would be the third step after i finish this.
// it worked to make it that way .
// how about now if we want to make it recursively , 
// how can i do it recursively . i dont know :S THINK
// apparently we need to have an inner function :S
// what we have in common is the first string . 
// that does not change , what changes is the rest of the arguments.
// so if we define our first string and define result
// and we start our checkOut function from arguments[1];
// our for loop should run on the first strings length ; 
// so inside our function we will run a for loop on the first strings length
// after the for loop i want to repeat the same function again but with the next
// argument , so after the for loop . i will call recurse with the next
// isnt recursion always better why is it am doing a lot of code :S 
// there must be a way to do that . 
// lets pseudoCode it . no much time to apply that 
// define the first that we are comparing with the result and flag
// now lets make our function that we will pass the second argument
// in that function we want to run a loop on all the letters of the first argument
// to check if the indeOf any letter is greater than -1
// if it is greater than -1 then we will recurse with the next argument
// as soon as we find -1 then we will go back and go for the next letter
// if our letter reaches till the ends of the argument
// and still true; then we will add it to our result;
// else its not true; 
