var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.setPosition(top, left);
  this.step();
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
  // this.updatePos();
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


/*
identify another dancer and get their setPosition
math out the halfway point
  from 1 to 10
    setTimeout(move element 10% of the way to the halfway point, timeBetweenSteps)
    


call step()
if we reach halfway point
  break
else
*/