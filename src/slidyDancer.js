var SlidyDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node.addClass("slidy-dancer")
}


SlidyDancer.prototype = Object.create(Dancer.prototype);

SlidyDancer.prototype.constructor = SlidyDancer;

SlidyDancer.prototype.oldStep = SlidyDancer.prototype.step;


SlidyDancer.prototype.step = function() {
  var leftRand = Math.floor((Math.random() -0.5) * 200);
  var topRand = (leftRand * Math.random() -0.5) * 2;

  this.$node.animate({
    left: "+="+leftRand+"px",
    top: "+="+topRand+"px"
  }, this.timeBetweenSteps/2)
  this.$node.animate({
    left: "-="+leftRand+"px",
    top: "-="+topRand+"px"
  }, this.timeBetweenSteps/2)
  this.oldStep();
};