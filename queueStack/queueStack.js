/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
 var Stack = function() {

   this.storage = {};
   this.counter = 0;
   // add an item to the top of the stack
   this.push = function(value){
    this.storage[this.counter] = value;
    this.counter++;
   };

   // remove an item from the top of the stack
   this.pop = function(){
    
    return this.storage[--this.counter];
   };

   // return the number of items in the stack
   this.size = function(){
    return this.counter;
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
   };

   // called to remove an item from the `queue`
   this.dequeue = function(){
     // TODO: implement `dequeue`
     var temp = inbox.storage[outbox.counter];
     outbox.push(inbox.storage[outbox.counter]);
     return temp; ;
      
   };

   // should return the number of items in the queue
   this.size = function(){
     // TODO: implement `size`
     return inbox.counter - outbox.counter;
   };
 };

// two stack instances then that means , we have to counters 
// inbox.counter and outbox.counter 
// just like start and end .
// our size would be return start - end ;
// when we want to enqueue .
// our inbox counter will increase with that value in it ;
// our dequeue should add to the outbox.
// well wheen we want to enqueue . then that means we will add to our inbox.
// which will add a value to key 0 and start will become 1;
// our outbox is still at 0;
// when we want to dequeue ; 
// we want to reach the inbox storage from using our outbox counter and pushing it there
// COOOOL . so we would just push(inbox.storage[outbox.counter])
// so this worked for the first one only .
// what happens is when we enqueued. we added to the inbox the value 
// so now the inbox has  start 1 and storage of that value ;
// when we want to dequeue // we added to the outbox
// the first element in the inbox which is in the storage of inbox starting 
// with the outbox of counter ;.
// how about the next time we enqueue 
// now the counter 
// PERFECT .. ALL DONE 