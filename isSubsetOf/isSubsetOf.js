/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
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


/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/
<<<<<<< HEAD
 
Array.prototype.isSubsetOf = function (arr) {
    uniqueArray=[];
    var result;
    for (var i = 0; i < this.length; i++) {
        if(uniqueArray.indexOf(this[i])<0){
            uniqueArray.push(this[i]);
        }
    }
    for (var i =0; i < uniqueArray.length; i++) {
        if(arr.indexOf(uniqueArray[i])>=0){
            result=true;
        }else{
        result=false;
    }
    }
    return result;
}
// Array.prototype.isSubsetOf = function (arr) {
// 	for(this.i=0 ; this.i< Array.length ; this.i++){
// 		for(var j=0 ; j<arr.length ;j++){
// 			if(Array[this.i] === arr[j]) 
// 				return true ; 
// 		}

// 	} return false; 
// }




 // for(var i=0;i<this.length;i++){
 // if(arr.indexOf(this[i])===-1){
 // return false;
 // }
 // }
 // return true;
=======

Array.prototype.isSubsetOf = function (arr) {
}
>>>>>>> 694e90f1ecd5d5a4143bb5d21c59aadcf8b85a40
