var GrowyDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node.addClass("growy-dancer")
}

GrowyDancer.prototype = Object.create(Dancer.prototype);
GrowyDancer.prototype.constructor = GrowyDancer;

GrowyDancer.prototype.oldStep = GrowyDancer.prototype.step;


GrowyDancer.prototype.step = function(){
 this.oldStep();
  this.$node.animate({
    height: "+=10%",
    width: "+=10%"
  }, this.timeBetweenSteps/2);
  this.$node.animate({
      height: "-=10%",
      width: "-=10%"
  }, this.timeBetweenSteps/2); 
}