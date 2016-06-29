/* Implement a tree using prototypal instantiation.
Your tree should have methods named "addChild" and "contains".
*/

// EXAMPLE USAGE:
// var tree = treeMaker();
// tree.addChild(1);
// tree.addChild(2);
// tree.contains(2);   // yields 'true'

var treeMaker = function(value){
	
	treeMaker._storage = {};
	treeMaker._storage.value = value?value:undefined;
	treeMaker._storage.children = [];
	return treeMaker.prototype;
};

treeMaker.prototype.addChild = function(value){
	if(!this.contains(value)){
		treeMaker._storage.children.push(value)
	}
};

treeMaker.prototype.contains = function(value){
	if (treeMaker._storage.value === value){
		return true;
	} else if (treeMaker._storage.children.indexOf(value)!==-1){
		return true;
	};
	return false
};
