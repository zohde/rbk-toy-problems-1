/* Implement a tree using prototypal instantiation.
Your tree should have methods named "addChild" and "contains".
*/

// EXAMPLE USAGE:
// var tree = treeMaker();
// tree.addChild(1);
// tree.addChild(2);
// tree.contains(2);   // yields 'true'

var treeMaker = function(value){
 var node={val:value,
 	child:[]}
//var methods;
var methods={};
};

//methods go here!
//treeMaker.methods = {};

treeMaker.methods.addChild = function(){
	if(node[val]===undefined){
		treeMaker(value);
	}
	else{for(var i=0;i<node.child.length;i++)
		node[child][i][val]=treeMaker(value);

	}
	
};

treeMaker.methods.contains = function(target){
	var valcontain=function(newchild){
		var flag=false;
		if(target===newchild[val]){
			flag=true;
		}
		for(var i=0;i<newchild.length;i++){
			if(newchild[i].child!==undefined){
				for(var j;j<newchild[i][j].length;j++){
					valcontain(newchild[i][j]);
				}
			}
			else {valcontain(newchild[i])}
		}
	return flag;

	}
	valcontain(node); 

};
