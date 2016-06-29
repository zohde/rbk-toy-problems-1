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
 var tree==Object.create(methods);
 tree. newtree={};
 newtree.value=value;
 console.log(newtree);
 newtree.child=[];
return tree;
};

//methods go here!
var methods = {
addChild : function(value){
	var smalltree=treeMaker(value);
	this.smalltree.child.push(value);
},

contains : function(){
	// we will search about element in  the tree 
}
}
