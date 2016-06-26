describe('primeTester', function() {
  it('should return the right answer', function() {
    expect(1).to.equal(1);
  });
});

describe('primeTester', function() {
  var prime = primeTester(17)&&primeTester(23);
  it('should return true', function() {
    expect(prime).to.equal(true);
  });
});
describe('primeTester', function() {
  var prime = primeTester(100)
  it('should return false', function() {
    expect(prime).to.equal(false);
  });
});
describe('primeSieve', function() {
  var primeList = primeSieve(2,23)
  var primeList2 = primeSieve(13,23)

  it('should return 2', function() {
    expect(primeList[0]).to.equal(2);
  });
   it('should return 20', function() {
     expect(primeList[1]+primeList[6]).to.equal(20);
  });
     it('should return [13,17,19,23]', function() {
     expect(primeList2).to.eql([13,17,19,23]);
  });

});


