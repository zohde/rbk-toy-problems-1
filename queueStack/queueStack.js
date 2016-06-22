/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
 var Stack = function() {
 	this.storage = [] ;
   // add an item to the top of the stack
   this.push = function(item){
   	this.storage.unshift(item) ;
   };

   // remove an item from the top of the stack
   this.pop = function(){
   	this.storage.shift() ;
   };

   // return the number of items in the stack
   this.size = function(){
   	return this.storage.length ;
   };
 };

 /**
   * Queue Class
   */
 var Queue = function() {
   // Use two `stack` instances to implement your `queue` Class
   var inbox = new Stack(); 
   var outbox = new Stack(); 

   // called to add an item to the `queue`
   this.enqueue = function(item){
    inbox.push(item); // TODO: implement `enqueue`
   };

   // called to remove an item from the `queue`
   this.dequeue = function(){ // if inbox stack is not empty , we want to remove all these values to the outbox stack 
            while (inbox.size()!== 0) {
               outbox.push(inbox.pop());
            }
       
        outbox.pop(); // then we remove from the outbox stack 
    }
    
   

   // should return the number of items in the queue
   this.size = function(){// suppose to be the sum of the two stacks 
     return inbox.size() + outbox.size() // TODO: implement `size`
   };
 };
