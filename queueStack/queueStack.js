/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
 var Stack = function() {
  Stack.prototype= Object.create(stackMethods);
  this.storage = {};
  this.counter= 0;
 };

 var stackMethods = {};
   // add an item to the top of the stack
  stackMethods.push= function(item){
    this.storage[this.counter] = value;
    this.counter++;

   },

   // remove an item from the top of the stack
   stackMethods.pop = function(){
    var pOp = this.storage[this.counter - 1];
    delete this.storage[this.counter - 1];
    this.counter--;
    return pOp;
   },

   // return the number of items in the stack
   stackMethods.size = function(){
    var size = Object.keys(this.storage).lenght;
    return size;
   }

 /**
   * Queue Class
   */
 var Queue = function() {
   // Use two `stack` instances to implement your `queue` Class
   var inbox = new Stack();
   var outbox = new Stack();

   // called to add an item to the `queue`
   this.enqueue = function(item){
      inbox.push(item);
     // TODO: implement `enqueue`
   };

   // called to remove an item from the `queue`
   this.dequeue = function(){
    // maybe call the enqueue method again to put the items inside the 'outbox';
    // after that use the pop method: outbox.pop();
       };

   // should return the number of items in the queue
   this.size = function(){
      inbox.size();
     // TODO: implement `size`
   };
 };
