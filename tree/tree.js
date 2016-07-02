/* Implement a tree using prototypal instantiation.
Your tree should have methods named "addChild" and "contains".
*/

// EXAMPLE USAGE:
// var tree = treeMaker();
// tree.addChild(1);
// tree.addChild(2);
// tree.contains(2);   // yields 'true'

var Tree = function(value){
	this._storage = {};
	this._storage.value = value?value:undefined;
	this._storage.children = [];
};

Tree.prototype.addChild = function(value){
	if(!this.contains(value)){
		this._storage.children.push(value)
	}
};

Tree.prototype.contains = function(value){
	if (this._storage.value === value){
		return true;
	} else if (this._storage.children.indexOf(value)!==-1){
		return true;
	};
	return false
};
