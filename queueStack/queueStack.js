/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
 var Stack = function() {
  var str=[];
   // add an item to the top of the stack
   this.push = function(){
  str.push.apply(str,arguments);
   };

   // remove an item from the top of the stack
   this.pop = function(){
    return str.pop.apply(str, arguments);
   };

   // return the number of items in the stack
   this.size = function(){
    return str.length;
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
   this.enqueue = function(){
     // TODO: implement `enqueue`
     inbox.push.apply(inbox, arguments);
   };

   // called to remove an item from the `queue`
   this.dequeue = function(){


    if (outbox.size()===0){

      }else if(outbox.push()!==inbox.pop()){

}

return outbox.pop();
     // TODO: implement `dequeue`
   };

   // should return the number of items in the queue
   this.size = function(){
     // TODO: implement `size`
     return inbox.size()
   };
 };
