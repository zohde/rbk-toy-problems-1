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
 var treeArr=[];
 treeArr.value=value
	treeArr.child=[]
	console.log(treeArr)
};

//methods go here!
treeMaker.methods = {};

treeMaker.methods.addChild = function(value){
	treeArr.child.push(value)
	console.log(treeArr)
};

treeMaker.methods.contains = function(val){
	var resTree=true;
   if(treeArr.value !== val) {
   	resTree= false;
   	for (var i =0; i< treeArr.child.length; i++) {
   		if (treeArr.child[i].contains(val)){
   			resTree = true;
   		}
   	}
}
	else{
			return  true;
		}

 	  	return resTree;
   


};
