$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    //console.log(window)
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      ($("body").height() - 200) * Math.random(),
      ($("body").width() - 200) * Math.random(),
      Math.random() * 1000,
      'carlton'
    );
    $('body').append(dancer.$node);

    $( ".dancer" ).draggable();

    var hrLogo  = $('.hack-logo')

    var tl = new TimelineMax();

        tl.from(hrLogo, 3, {
      ease: Power2.easeInOut,
      rotationY:360,
      repeat: -1,
      repeatDelay: 1,
      transformStyle: "preserve-3d",
      yoyo: true
    })

  });//end click

  // var sound = new Howl({
  //   urls: ['/src/safety_dance.mp3','/src/safety_dance.mp3']
  // });

  var song = $('audio')[0];




$(".songplayer").on('click', function (event) {
    event.preventDefault();
    if (song.paused == false) {
      song.pause();
      $(this).text("Play Song")
      console.log(song.paused)
    } else {
      song.play();
      $(this).text("Pause Song")
    }





})




});

