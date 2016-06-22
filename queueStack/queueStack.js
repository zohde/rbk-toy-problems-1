/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
 var Stack = function() {
   this.storage = [];
   // add an item to the top of the stack
   this.push = function(item){
    this.storage.push(item);
   };

   // remove an item from the top of the stack
   this.pop = function(){
    this.storage.pop();
   };

   // return the number of items in the stack
   this.size = function(){
    return this.storage.length;
   };
 };


// Stack last in first out (LIFO)
// Queue first in last out (FIFO)
 

 /**
   * Queue Class
   */
 var Queue = function() {
   // Use two `stack` instances to implement your `queue` Class
   var inbox = new Stack();
   var outbox = new Stack();



   // called to add an item to the `queue`
   this.enqueue = function(item){
     // TODO: implement `enqueue`
     outbox.push(item);
     inbox.push(outbox[0]);
   };

   // called to remove an item from the `queue`
   this.dequeue = function(){
     // TODO: implement `dequeue`
     var out = outbox.push()
     inbox.push(outbox[0]);
   };

   // should return the number of items in the queue
   this.size = function(){
     // TODO: implement `size`
     return inbox.size();
   };
 };
