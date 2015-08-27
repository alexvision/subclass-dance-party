var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node.addClass("blinky-dancer")
}

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.oldStep = BlinkyDancer.prototype.step;

BlinkyDancer.prototype.step = function() {
  var colours = ["red", "blue", "yellow", "green"];
  var colour = colours[Math.floor(Math.random()*colours.length)];

  var shapes = ["circle", "square", "triangle"];
  var shape = shapes[Math.floor(Math.random()*shapes.length)];

  this.oldStep();
  this.$node.toggle();

  if (this.$node.is(':visible')) {
    colours.forEach(function(colour) {
      this.$node.removeClass("blinky-"+colour);
    }, this);
    this.$node.addClass("blinky-"+colour);

    shapes.forEach(function(shape){
      this.$node.removeClass("blinky-"+shape);
    },this);
    this.$node.addClass("blinky-"+shape);
  }
};