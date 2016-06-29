/* Implement a tree using prototypal instantiation.
Your tree should have methods named "addChild" and "contains".
*/

// EXAMPLE USAGE:
// var tree = treeMaker();
// tree.addChild(1);
// tree.addChild(2);
// tree.contains(2);   // yields 'true'

var treeMaker = function(value){
	var treeInst = Object.create(treeMaker.prototype)
	treeInst._storage = {};
	treeInst._storage.value = value?value:undefined;
	treeInst._storage.children = [];
	return treeInst;
};

treeMaker.prototype.addChild = function(value){
	if(!this.contains(value)){
		this._storage.children.push(value)
	}
};

treeMaker.prototype.contains = function(value){
	if (this._storage.value === value){
		return true;
	} else if (this._storage.children.indexOf(value)!==-1){
		return true;
	};
	return false
};
