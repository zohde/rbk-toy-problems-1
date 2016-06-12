describe('sumArray', function() {
  var example1 = [1, 2, 3],
      answer1 = 6,
      example2 = [1, 2, 3, -4],
      answer2 = 6,
      example3 = [1, 2, 3, -4, 5],
      answer3 = 7,
      example4 = [4, -1, 5],
      answer4 = 8,
      example5 = [10, -11, 11],
      answer5 = 11;

  it('should return the right answer', function() {

    expect(sumArray(example1)).to.equal(answer1);
    expect(sumArray(example2)).to.equal(answer2);
    expect(sumArray(example3)).to.equal(answer3);
    expect(sumArray(example4)).to.equal(answer4);
    expect(sumArray(example5)).to.equal(answer5);

  });
});
