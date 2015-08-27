var SlidyDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node.addClass("slidy-dancer")
}


SlidyDancer.prototype = Object.create(Dancer.prototype);

SlidyDancer.prototype.constructor = SlidyDancer;

SlidyDancer.prototype.oldStep = SlidyDancer.prototype.step;


SlidyDancer.prototype.step = function() {
  this.oldStep();
  this.$node.animate({
    left: "+="+(Math.random()*100)+"px",
    top: "+="+(Math.random()*100)+"px"
  }, this.timeBetweenSteps/2)
  this.$node.animate({
    left: "-="+(Math.random()*100)+"px",
    top: "-="+(Math.random()*100)+"px"
  }, this.timeBetweenSteps/2)
};