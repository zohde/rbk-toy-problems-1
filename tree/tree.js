/* Implement a tree using prototypal instantiation.
Your tree should have methods named "addChild" and "contains".
*/

// EXAMPLE USAGE:
// var tree = treeMaker();
// tree.addChild(1);
// tree.addChild(2);
// tree.contains(2);   // yields 'true'

var treeMaker = function(value){
var newTree=Object.create(treemakerMethods)
newTree.value=value ;
newTree.child=[] ;

return newTree ;
};

//methods go here!
var treemakerMethods = {
	addChild : function(value){
		 this.child.push(treeMaker(value)) ;

	},

	contains : function(target){
		debugger;
		if(this.value===target){
			return true ;
		}else{
			for (var i = 0; i < this.child.length; i++) {
				if(this.child[i].value===target){
					return true ;
				}
			}
}
				return false ;
	}
};
