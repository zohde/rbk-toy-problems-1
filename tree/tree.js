/* Implement a tree using prototypal instantiation.
Your tree should have methods named "addChild" and "contains".
*/

// EXAMPLE USAGE:
// var tree = treeMaker();
// tree.addChild(1);
// tree.addChild(2);
// tree.contains(2);   // yields 'true'

var treeMaker = function(value){
	var tree =Object.create(tree.method)
	var children=[];
	return tree;
 //tree code goes here!
};

//methods go here!
treeMaker.methods = {
addChild: function(child,leaf){
	var collect=[];
	if(this.children[leaf]){
		collect.push(child)
	}
},

contains: function(){
	}
};