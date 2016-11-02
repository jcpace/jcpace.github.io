var makeDean = function(top, left, timeBetweenSteps, dancerName) {
  // console.log("makeDean this", this)
  this.dancerName = "dean";
  Dancer.call(this, top, left, timeBetweenSteps, 'dean.gif')
};

makeDean.prototype = Object.create(Dancer.prototype);

makeDean.prototype.constructor = makeDean;

makeDean.prototype.step = function() {

    Dancer.prototype.step.call(this);

};

