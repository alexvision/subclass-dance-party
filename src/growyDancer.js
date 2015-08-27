var GrowyDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  // this.$node = $('<span class="dancer"><img src="../lib/nananana.png"></span>')
  this.$node.addClass("growy-dancer")
}

GrowyDancer.prototype = Object.create(Dancer.prototype);
GrowyDancer.prototype.constructor = GrowyDancer;

GrowyDancer.prototype.oldStep = GrowyDancer.prototype.step;


GrowyDancer.prototype.step = function(){
 this.oldStep();
  this.$node.animate({
    height: "+=200px",
    width: "+=200px",
    top: "-=100px",
    left: "-=100px"
  }, this.timeBetweenSteps/2);
  this.$node.animate({
    height: "-=200px",
    width: "-=200px",
    top: "+=100px",
    left: "+=100px"
  }, this.timeBetweenSteps/2); 
}