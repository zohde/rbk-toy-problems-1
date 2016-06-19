/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/


/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

// Refactor (rewrite) `makePhone` and `makeSmartPhone` to use pseudo classical inheritance
// They should have exactly the same methods as the objects returned from the
// original maker functions except in pseudo classical style. ie., you should be
// able to use your new functions like so to create new phone instances.
//
//   var myPhone = new Phone();
//   var mySmartPhone = new SmartPhone();
//


// DO NOT MODIFY FUNCTIONS 'makePhone' AND 'makeSmartPhone'
// USE THE CONSTRUCTOR FUNCTIONS LOCATED AT THE END OF THIS FILE

var MakePhone = function(phoneNumber) {
  this.phoneNumber : phoneNumber;
};
MakePhone.prototype.send = function(recipientPhoneNumber, message) {
  return 'sending the message "'+ message +'" to the phone number ' + recipientPhoneNumber;
  }

var MakeSmartPhone = function(phoneNumber, email) {
   MakeSmartPhone = new MakePhone(phoneNumber);
  this.email = email;
};
MakeSmartPhone.prototype.send = function(recipientPhoneNumberOrEmail, message) {
    if (typeof recipientPhoneNumberOrEmail === 'number'){
      return oldSend(recipientPhoneNumberOrEmail, message);
    } 
    else {
    	return 'sending the message "' + message + '" to email ' + recipientPhoneNumberOrEmail;
	}
}

// Start writing your functions below in pseudo classical inheritance

var Phone = function(phoneNumber) {
 Phone=new MakePhone(phoneNumber);
};



var SmartPhone = function(phoneNumber, email) {
  SmartPhone= new SmartPhone(phoneNumber, email)
};
