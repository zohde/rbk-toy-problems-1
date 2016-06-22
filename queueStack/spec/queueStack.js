describe('queueStack', function() {
  var queue = new Queue()
  it('should return the right answer', function() {
    expect(1).to.equal(1);
  });
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  it('should return the right answer', function() {
    expect(queue.dequeue()).to.equal(1);
  });
    it('should return the right answer', function() {
    expect(queue.size()).to.equal(3);
  });


});
