var hackDancer = function(top, left, timeBetweenSteps, dancerName) {
  // console.log("hackDancer this", this)
  Dancer.call(this, top, left, timeBetweenSteps, "hack.png")

  this.dancerName = "hack.png";
};

hackDancer.prototype = Object.create(Dancer.prototype);

hackDancer.prototype.constructor = hackDancer;


hackDancer.prototype.step = function() {

    Dancer.prototype.step.call(this);
    this.$node.removeClass('bounceInUp');
    this.$node.addClass('  hack-logo');
};

