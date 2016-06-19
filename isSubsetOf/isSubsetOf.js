/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/


// In order for our array to work on all type of array of arrays
// Then we need to stringify our object or array .
// By then we will create a new array , and push all elements in it .
// then we will compare our array with using JSON.stringify in the subset of .



Array.prototype.isSubsetOf = function (arr) {
	var newArr = [];
	for(var i = 0; i<arr.length; i++){
		newArr.push(JSON.stringify(arr[i]))
	}
	for(var i = 0; i<this.length; i++){
		if(newArr.indexOf(JSON.stringify(this[i])) === -1){
			return false;
		}
	}
	return true;
}












// Array.prototype.isSubsetOf = function (arr) {
// 	var newArr  =[];
// 	var boolean = true;
// 	for(var i = 0; i < arr.length ; i++){
// 		newArr.push(JSON.stringify(arr[i]));
// 	}
// 	for(var i = 0; i< this.length ; i++){
// 		if(newArr.indexOf(JSON.stringify(this[i])) === -1){
// 			return false;
// 		}		
// 	}
// 	return boolean;
// };



