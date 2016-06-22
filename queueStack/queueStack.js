/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
 var Stack = function() {
 var counter=0;
 var storage={};
   // add an item to the top of the stack
   this.push = function(value){
   	storage[counter]=value;
  	counter++;
  	return storage;
   };

   // remove an item from the top of the stack
   this.pop = function(){
   	var storge2 = storage[counter-1];
    delete storage[--counter];
  	return storge2;
   };

   // return the number of items in the stack
   this.size = function(){
   	return counter;
   };
 };

 /**
   * Queue Class
   */
 var Queue = function() {
   // Use two `stack` instances to implement your `queue` Class
   var inbox = new Stack();
   var outbox = new Stack();
   var counter=0;
   // called to add an item to the `queue`
   this.enqueue = function(value){
   inbox[counter]=value;
   counter++;
   };

   // called to remove an item from the `queue`
   this.dequeue = function(){
    if (inbox.length === null && outbox.length === null){
     return "the Queue is Empty";
    }else{
    	while(outbox === null && inbox !== null){
    		outbox.push(inbox[counter]);
    		outbox.pop();
    	}
    }
   };
   // should return the number of items in the queue
   this.size = function(){
    return inbox.length+outbox.length;
   };
 };
