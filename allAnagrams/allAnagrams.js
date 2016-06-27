/**
 * Given a single input string, write a function that outputs an array of strings with every possible
 * combination of letters.
 *
 * At first, don't worry about repeated (duplicate) strings.
 *
 * What time complexity is your solution?
 *
 * Extra credit: De-duplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
	var n = string.length;
	var array = string.split("")
	var newArray = [];
	var getOne = function(arr){
		if(arr.length === n){
			newArray.push(arr.join(""))
			return ;
		}
		for(var i = 0 ; i < array.length ; i++){
			if(arr.indexOf(array[i]) === -1){
				getOne(arr.concat(array[i]))
			}
		}
	}
	getOne([]);
	return newArray;
};


// Great now it is almost just like the rock paper scissors that takes an N with it
// if we take the length which for example will be our N
// and then we split them into an array
// what do i want to do in the for loop?
// everytime i want to push the array
// when i = 0 i want to add to the empty arr array[i];
// and then i want to call getOne again 

// now just like rps , we will define an empty array . and will call an inner function
// that will take an array 
// and once the length of that array is equal to N then we will push it to our new Array
// and then head for the other possibilities
// hehehe i thought it can have duplicates .
// just need to check if the index of that letter is available
// if not then just add it 
// I think it is working now .
// Oh ok  i think the extra credit was not to have any duplicates.
// great i think im done .

