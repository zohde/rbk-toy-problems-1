/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
 var Stack = function(storage) {
  
    this.storage = storage;

   // add an item to the top of the stack
    this.push = function(n){
    
      this.storage.push(n);
      

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

 /**
   * Queue Class
   */
 var Queue = function(qStroage) {
   // Use two `stack` instances to implement your `queue` Class
   var inbox = new Stack();
   var outbox = new Stack();
   this.qStroage = qStroage;

   // called to add an item to the `queue`
   this.enqueue = function(n){
     // TODO: implement `enqueue`
     inbox.storage = this.qStroage;
     inbox.push(n);
     this.qStroage = inbox.storage;
     console.log(this.qStroage);
   };

   // called to remove an item from the `queue`
   this.dequeue = function(){
    //
    outbox.storage = this.qStroage;
    var temp = [];
    for(var i = 0; i < outbox.size(); i++){
      temp[i] = outbox.pop();
    }
    outbox.storage = temp;
    outbox.pop();
    this.qStroage = [];
    for(var j = 0; j < outbox.size(); j++){
      this.qStroage[j] = outbox.pop();
    }
    return this.qStroage;

   };

   // should return the number of items in the queue
   this.size = function(){
    //
    outbox.storage = this.qStroage;
    return outbox.size();
   };
 };
