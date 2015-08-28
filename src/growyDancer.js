var GrowyDancer = function(top, left, timeBetweenSteps) {
  $node = $('<span class="dancer"><img src="lib/nananana.png"></span>')
  Dancer.call(this, top, left, timeBetweenSteps, $node);
  this.$node.addClass("growy-dancer");
}

GrowyDancer.prototype = Object.create(Dancer.prototype);
GrowyDancer.prototype.constructor = GrowyDancer;

GrowyDancer.prototype.oldStep = GrowyDancer.prototype.step;


GrowyDancer.prototype.step = function(){
 this.oldStep();
  this.$node.find('img').animate({
    height: "auto",
    width: "-=200px",
    top: "+=100px",
    left: "+=100px"
  }, this.timeBetweenSteps/2);
  this.$node.find('img').animate({
    height: "auto",
    width: "+=200px",
    top: "-=100px",
    left: "-=100px"
  }, this.timeBetweenSteps/2); 
}