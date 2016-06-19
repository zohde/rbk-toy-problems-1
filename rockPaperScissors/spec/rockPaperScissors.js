describe('rockPaperScissors', function() {
  it('should return the right answer', function() {
    expect(1).to.equal(1);
  });

    it('Length should be 27', function() {
    	var bigArray = rockPaperScissors();
    expect(bigArray.length).to.equal(27);
  });

     it('every array would consist of three games', function() {
    	var bigArray = rockPaperScissors();
    expect(bigArray[0].length).to.equal(3);
  });

     it('every array would consist of three games', function() {
    	var bigArray = rockPaperScissors();
    expect(bigArray[0].length).to.equal(3);
  });

     

});
