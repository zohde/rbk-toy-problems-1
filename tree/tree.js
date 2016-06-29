/* Implement a tree using prototypal instantiation.
Your tree should have methods named "addChild" and "contains".
*/

// EXAMPLE USAGE:
// var tree = treeMaker();
// tree.addChild(1);
// tree.addChild(2);
// tree.contains(2);   // yields 'true'

var treeMaker = function(value){
 	var tree = Object.create(treeMaker.methods);
 	tree.value=value;
 	tree.Child=[];
	console.log(tree);
	return tree;
};

//methods go here!
treeMaker.methods = {};

treeMaker.methods.addChild = function(value){
	this.Child.push(new treeMaker(value))
};

treeMaker.methods.contains = function(value){
	 function find(value) {
		for (var i = 0; i < this.Child.length; i++) {
			if(this.Child[i].value === value){
				return true;
			}
			return this.Child[i].contains(value);
		}
	}
	if(find(value)){
		return true;
	}else{
		return false;
	}
};


