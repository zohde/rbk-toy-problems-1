/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
 var Stack = function() {
    this.index = 0
  this.storage = {};
  
   // add an item to the top of the stack
   this.push = function(item){
   storage[this.index] = item;
  this.index++;
   };

   // remove an item from the top of the stack
   this.pop = function(){
      if(this.storage[this.index-1]!==undefined){
      var tempVal = this.storage[this.index-1];
      delete this.storage[this.index-1];
      this.index--;
      return tempVal;
    }

   };

   // return the number of items in the stack
   this.size = function(){
    return (Object.keys(this.storage).length);
   };
 };

 /**
   * Queue Class
   */
 var Queue = function() {
   // Use two `stack` instances to implement your `queue` Class
   var inbox = new Stack();
   var outbox = new Stack();
   this.index1=0;
   // this.index2=this.size();

   // called to add an item to the `queue`
   this.enqueue = function(){
     this.storage[this.index1] =this.inbox.pop();
    this.index1++;
     // TODO: implement `enqueue`
   };

   // called to remove an item from the `queue`
   this.dequeue = function(){
     if(this.storage[this.index1-1]!== undefined){
      this.outbox.push()= this.storage[this.index1-1];//to push to the stack the last item
      delete this.storage[this.index1-1];
      this.index1=this.index1-2;
      return this.outbox.pop();//stack will pop the first item
    }
     // TODO: implement `dequeue`
   };

   // should return the number of items in the queue
   this.size = function(){
     // TODO: implement `size`
      return Object.keys(this.storage).length;
   };
 };
