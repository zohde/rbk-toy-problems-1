/* Implement a tree using prototypal instantiation.
Your tree should have methods named "addChild" and "contains".
*/

// EXAMPLE USAGE:
// var tree = treeMaker();
// tree.addChild(1);
// tree.addChild(2);
// tree.contains(2);   // yields 'true'

var treeMaker = function(value){
 //tree code goes here!
 var tree = Object.create(treeMaker.methods);
  this.parent = null;
 return tree;
};

// trees are a collection of nodes starts at the parent node which then separates into chlidren nodes,
//each node has a value,
//none of the childern points to the parent node,
// declare a node variable:
var makeNode =  function(value){
	//this functions job is to make a node that stores the value
	return {
		value:value,
	//it should also point to children which are arrays,
		children: []
	}
};

//methods go here!
treeMaker.methods = {};

treeMaker.methods.addChild = function(value){
	var node = new makeNode(value);
	this.parent.children.push(node);

};

treeMaker.methods.contains = function(node, value){
	//check if the parent node has any value in it
	if (this.parent.value!==value){
		return false;
	}
	var doesContain; 
	//create a node & check if it's the parent if not, then set it to be it.
	if(node === null){
		node = this.parent;
	}
	// now if the node does have value, return true;
	if (node.value === value){
		return true,
	} 

	else {
	// if it does then loop over all of its children to check them all and then find the specific child.
	 for (var i = 0; i < node.children.length; i++) {
	 	if(this.node === value && this.node === node.children[i]){
	 		//set the var doesContain's value to true if the node has any children
	 		doesContain = true;
	 	}
	 }
	}
	// return the final boolean ;
	return doesContain;
};
