var snoop = function(top, left, timeBetweenSteps, dancerName) {
  // console.log("snoop this", this)
  this.dancerName = "snoop";
  Dancer.call(this, top, left, timeBetweenSteps, 'snoop.gif')




  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //this.oldStep = Dancer.prototype.step;
//console.log("dancer",Dancer.prototype)


};

snoop.prototype = Object.create(Dancer.prototype);
//console.log("snoop prototype", snoop.prototype)

snoop.prototype.constructor = snoop;


snoop.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    //console.log("snoop STEP", this)
    Dancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    //this.$node.toggle();
    //this.$node.append('gsdfgsdfgdfsg')
};
