describe("growyDancer", function() {

  var growyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    growyDancer = new GrowyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(growyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node grow", function() {
    sinon.spy(growyDancer.$node, 'animate');
    growyDancer.step();
    expect(growyDancer.$node.animate.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(growyDancer, "step");
      clock.tick(timeBetweenSteps);

      expect(growyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);

      expect(growyDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);

      expect(growyDancer.step.callCount).to.be.equal(2);
    });
  });
});