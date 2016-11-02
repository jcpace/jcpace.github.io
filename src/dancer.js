// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps, dancerName) {

  this.dancerName = dancerName;
  this.$node = $('<div class="dancer animated ui-draggable  bounceInUp"></div>')
  this.$gif = $('<img src="images/' + this.dancerName + '"" />')
  this.$test = this.$gif.appendTo(this.$node)
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function() {
 var self = this

  setTimeout(function(){self.step();}, self.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {

    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);

};


