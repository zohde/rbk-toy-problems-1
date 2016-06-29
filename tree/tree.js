/* Implement a tree using prototypal instantiation.
Your tree should have methods named "addChild" and "contains".
*/

// EXAMPLE USAGE:
// var tree = treeMaker();
// tree.addChild(1);
// tree.addChild(2);
// tree.contains(2);   // yields 'true'

var treeMaker = function(value){
 var newTree = Object.create(treeMaker.methods);
 newTree.value = value
 return newTree;
};

//treeMaker.brunches = {}

//methods go here!
treeMaker.methods = {};

treeMaker.methods.addChild = function(){
	console.log(this)
	return this.branch = [];
};

treeMaker.methods.contains = function(find){
	for (var key in this){
		if (this.value = find){
			return true;
		}
	}
	return false;
};


