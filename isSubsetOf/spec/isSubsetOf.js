describe('isSubsetOf', function() {
  it('should return the right answer', function() {
    expect(['commit','push'].isSubsetOf(['commit','rebase','push','blame'])).to.equal(true);
   	expect(['merge','reset','reset'].isSubsetOf(['reset','merge','add','commit'])).to.equal(true);
   
  });
  it('should return the right answer', function() {
    
   	expect([{merge: 'merge'},'reset','reset'].isSubsetOf([{merge: 'merge'},'reset','merge','add','commit'])).to.equal(true);
  });
   it('should return the right answer', function() {
    
   	expect([{merge: 'merge'},'reset','reset'].isSubsetOf([{merge: 22222},'reset','merge','add','commit'])).to.equal(false);
  });
});
