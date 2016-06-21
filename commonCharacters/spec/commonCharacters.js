describe('commonCharacters', function() {
  var test = commonCharacters("Elephent", "Eiffel")
  it('should return a truthful value', function() {
    // expect(1).to.equal.(1);
  });
   it('should return a string of common characters', function() {
    expect(test).to.equal("el")
  });

});
