var Dancer = function(top, left, timeBetweenSteps, node) {
  this.$node = node || $('<span class="dancer"></span>');
  this.$node.data('id', dancers.length);
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.setPosition(top, left);
  this.step();
  this.crashCount = 0;
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.updatePos = function(){
  this.top = this.$node.position().top;
  this.left = this.$node.position().left;
}

Dancer.prototype.step = function() {
  if (keepDancing) {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }
};

Dancer.prototype.findPartner = function(partner) {
  var moveTop = ((this.top + partner.top)/2-this.top);  
  var moveLeft = ((this.left + partner.left)/2-this.left); 

  this.$node.animate({
    left: "+="+(moveLeft)+"px",
    top: "+="+(moveTop)+"px"
  }, this.timeBetweenSteps * 2);
};


Dancer.prototype.reposition = function(top, left, callback) {
  var moveTop = (top - this.top);  
  var moveLeft = (left - this.left); 

  this.$node.animate({
    left: "+="+(moveLeft)+"px",
    top: "+="+(moveTop)+"px"
  }, this.timeBetweenSteps * 2);
};

Dancer.prototype.collision = function(){
  this.crashCount++;
  console.log("OMG CRASH", this.crashCount);
}