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
 var treeInstance = {} 
  treeInstance = Object.create(treeMaker.methods)
  treeInstance.children = [];
  treeInstance.value = value; 
  return treeInstance;
};



treeMaker.methods = {};

treeMaker.methods.addChild = function(value){
	this.children.push(treeMaker(value));
};


treeMaker.methods.contains = function(value){
	if(this.value === value){
		return true;
	}
	var result = false;
	for(var i = 0; i < this.children.length; i++){
		result = result || this.children[i].contains(value)
	}

	return result;
};




// WHAT is THE DIFFERENCE BETWEEN PSEUDOCLASSICAL AND PROTOTYPAL
// it worked in pseudoclassical
// i think this is prototypal 
// it worked in a different way 


