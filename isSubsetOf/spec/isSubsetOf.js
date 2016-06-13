describe('isSubsetOf', function() {
  it('should return the right answer', function() {
    expect([1].isSubsetOf[2,3,1]).to.equal(true);
    expect([5].isSubsetOf[2,3,1]).to.equal(false);
  });
});
