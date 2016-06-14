/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *ff
 *
  var a = ['commit','push']
  a.isSubsetOf(['commit','rebase','push','blame']) // true
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

//Very basic solution:
Array.prototype.isSubsetOf = function (arr) {
  for (var i = 0; i < this.length; i++) {
    if(arr.indexOf(this[i])<0){
      return false;
    }
  };
  return true;
};

//Basic solution (using higher order function):
Array.prototype.isSubsetOf = function (arr) {
  return this.every(function(v){return arr.indexOf(v)>=0});
}

//Extra credit solution:
Array.prototype.isSubsetOf = function (arr) {
  var thisStr = this.map(function(v){return JSON.stringify(v)});
  var arrStr = arr.map(function(v){return JSON.stringify(v)});
  return thisStr.every(function(v){return arrStr.indexOf(v)>=0});
}
