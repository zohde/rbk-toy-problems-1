/* Implement a tree using prototypal instantiation.
Your tree should have methods named "addChild" and "contains".
*/

// EXAMPLE USAGE:
// var tree = treeMaker();
// tree.addChild(1);
// tree.addChild(2);
// tree.contains(2);   // yields 'true'
 
var treeMaker = function(value){
	// root value
	//whenever I make a tree it suppose to has a root before adding any child
	this.tree = value;
	
 	
};

//methods go here!
treeMaker.methods = {};

treeMaker.methods.addChild = function(value){
	this.appendChild(value);

};

treeMaker.methods.contains = function(value){
//searching in root
	if(this.tree === value){
			return true;
		}
// searching in children
var parentNode = this.children;
	var findNode = function(value,parentNode){
		if(parentNode.children[length-1] === undefiend){
			return false
		}
		
		for (var i = 0; i < parentNode.children.length; i++) {
			if(parentNode.children[i] === value){
				return true;
			}

			findNode(value,parentNode.children[i]);
		}
	}

};
