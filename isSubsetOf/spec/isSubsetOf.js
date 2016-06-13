describe('isSubsetOf', function() {
  it('should return the right answer', function() {
  	var a = ['commit','push'];
  	var b = ['merge','reset','reset'];
    expect(1).to.equal(1);
    expect(a.isSubsetOf(['commit','rebase','push','blame'])).to.equal(true);
    expect(b.isSubsetOf(['reset','merge','add','commit'])).to.equal(true);
  });
  it('should work on array containing sub-Arrays', function() {
  	var a = [[1,2,3],[4,5],6]
    expect(a.isSubsetOf([[1],[6],1,2,3,[1,2,3],4,5,[4,5]])).to.equal(false);
    expect(a.isSubsetOf([[1],[6],1,2,3,[1,2,3],4,5,[4,5],6])).to.equal(true);
  });
  it('should work on array containing objects', function() {
  	var a = [{'a': 2, 'b': [1,2,3]},{'c':{d:2}}];
  	expect(a.isSubsetOf([[1,2,3],[{'a': 2, 'b': [1,2,3]},{'c':{d:2}}]])).to.equal(false);
    expect(a.isSubsetOf([[1,2,3],{'a': 2, 'b': [1,2,3]},{'c':{d:2}}])).to.equal(true);
  });
});
