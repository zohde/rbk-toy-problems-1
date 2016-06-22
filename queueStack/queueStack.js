/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   The idea here is to build the stack class using an array, which is straight forward and supports all the functions we need.
   */
 var Stack = function() {
    
    this._stack = [];
   // add an item to the top of the _stack
   this.push = function(value){
    return this._stack.push(value);
   };

   // remove an item from the top of the _stack
   this.pop = function(){
    return this._stack.pop()
   };

   // return the number of items in the _stack
   this.size = function(){
    return this._stack.length;
   };
 };

 /**
   * Queue Class
   The idea behind queue is we have an inbox and outbox, which kind of solves the problem for us.
   We use a stack for enqueueing and storing the queue, and if we want to dequeue, we use the other stack.
   At time of enqueue, push items to the stack, so the last item is the first to go out.
   At time of dequeue, empty all the stack items into the other stack outbox, then pop, this will give us the FIFO functionality
   */
 var Queue = function() {
   // Use two `stack` instances to implement your `queue` Class
   var inbox = new Stack();
   var outbox = new Stack();
   this._l = 0;
   // called to add an item to the `queue`
   this.enqueue = function(){
     // TODO: implement `enqueue`
     if (inbox.size()===0 && outbox.size()>0){
      this._l=outbox.size();
      for(var i=0; i<this._l; i++){
        inbox.push(outbox.pop())
      }    
     };
      
      this._l++;
      return inbox.push(arguments[i]);
   };

   // called to remove an item from the `queue`
   this.dequeue = function(){
     // TODO: implement `dequeue`
     if (inbox.size()>0 && outbox.size()===0){
       this._l=inbox.size();
       for(var i=0; i<this._l; i++){
        outbox.push(inbox.pop());
       };
     }
     this._l--;
     return outbox.pop();
   };

   // should return the number of items in the queue
   this.size = function(){
     // TODO: implement `size
     return this._l
   };
 };
