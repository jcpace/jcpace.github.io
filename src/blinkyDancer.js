var makeBlinkyDancer = function(top, left, timeBetweenSteps, dancerName) {
  Dancer.call(this, top, left, timeBetweenSteps, "carlton.gif")
  this.dancerName = "carlton.gif";
};

makeBlinkyDancer.prototype = Object.create(Dancer.prototype);

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {

    Dancer.prototype.step.call(this);

};
