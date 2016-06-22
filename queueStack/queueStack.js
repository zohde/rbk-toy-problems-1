/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
 var Stack = function() {
  
  var storage =[];
  var pionter = 0;
   // add an item to the top of the stack
   this.push = function(value){
    storage.push(value) ;
    pionter++;
   };

   // remove an item from the top of the stack
   this.pop = function(){
    storage.pop();
    
   };

   // return the number of items in the stack
   this.size = function(){
    return storage.length;
   };
 
};
 /**
   * Queue Class
   */
 var Queue = function() {
  var storage2 = [];
   // Use two `stack` instances to implement your `queue` Class
   var inbox = new Stack();
   var outbox = new Stack();

   // called to add an item to the `queue`
   inbox.enqueue = function(value){
    inbox.push(value);
     
   };

   // called to remove an item from the `queue`
   inbox.dequeue = function(){

    for (var i = 0; i < this.storage.length-1; i++) {
      this.outbox.push(this.inbox.pop());
    }
    for (var i = this.storage.length; i < 0; i--) {
      this.inbox.push(this.storage[i])
    }
    
    // for loop to pop all the elements except the first element and then push all the elements again and reverse the arr
  
   };

   // should return the number of items in the queue
   this.size = function(){
    return inbox.length;
     // TODO: implement `size`
   };
 };
