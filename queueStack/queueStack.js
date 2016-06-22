/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
 var Stack = function() {
    this.storage=[];

   // add an item to the top of the stack
   this.push = function(value){
    this.storage.unshift(value);
   };

   // remove an item from the top of the stack
   this.pop = function(){
    this.storage.shift();
   };

   // return the number of items in the stack
   this.size = function(){
    return this.storage.length;
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
   this.enqueue = function(value){
    inbox.push(value);
     // TODO: implement `enqueue`
   };

   // called to remove an item from the `queue`
   this.dequeue = function(){
      
     // TODO: implement `dequeue`
   };

   // should return the number of items in the queue
   this.size = function(){
    return inbok.size() + outbox.size();

     // TODO: implement `size`
   };
 };
