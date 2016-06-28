describe('functionBind', function() {
  var func = bind()
  it('should be a function', function() {
    expect(func).to.be.a('function');
  });
});
describe('functionBind', function() {
   var alice = {
	   name: 'alice',
	   shout: function(){
	     return this.name;
	   }
	 }
 	var boundShout = bind(alice.shout, alice);
 	var result = boundShout()
  	it('should return alice', function() {
    	expect(result).to.equal('alice');
 	});
  	boundShout2 = bind(alice.shout, {name: 'bob'});
 	var result2 = boundShout2();
  	it('should return bob', function() {
  	  expect(result2).to.equal('bob');
  	});
  	 var func = function(a, b){ return a + b };
	 var boundFunc = bind(func, null, 'foo');
	 var result3 = boundFunc('bar');
	it('should return foobar', function() {
  	  expect(result3).to.equal('foobar');
  	});
});

describe('Function.prototype.bind', function() {
   var alice = {
	   name: 'alice',
	   shout: function(){
	     return this.name;
	   }
	 }
 	var boundShout = alice.shout.bind(alice);
 	var result = boundShout()
  	it('should return alice', function() {
    	expect(result).to.equal('alice');
 	});
  	boundShout2 = alice.shout.bind({name: 'bob'});
 	var result2 = boundShout2();
  	it('should return bob', function() {
  	  expect(result2).to.equal('bob');
  	});
  	var func = function(a, b){ return a + b };
  	var boundFunc = func.bind(null, 'foo');
  	var result3 = boundFunc('bar');
  	it('should return foobar', function() {
  	  expect(result3).to.equal('foobar');
  	});
});