var miley = function(top, left, timeBetweenSteps, dancerName) {
  // console.log("miley this", this)
  this.dancerName = "miley";
  Dancer.call(this, top, left, timeBetweenSteps, 'miley.gif')
};

miley.prototype = Object.create(Dancer.prototype);

miley.prototype.constructor = miley;


miley.prototype.step = function() {

    Dancer.prototype.step.call(this);

};

