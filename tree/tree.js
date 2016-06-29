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

 var newTree=object.create(treeMaker.methods)
 // this new tree has an access to the object methods 

 newTree.value=value

 return newTree;
};

//methods go here!
treeMaker.methods = {};


treeMaker.methods.addChild = function(){
	treeMaker.methods.addChild=function(child)
	if(child===)

};

treeMaker.methods.contains = function(){
};
