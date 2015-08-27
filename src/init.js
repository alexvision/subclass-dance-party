$(document).ready(function(){
  window.dancers = [];
  window.keepDancing = true;
  window.danceTime = 1000;

  $(".lineupButton").on("click", function() {
    keepDancing = false;
    setTimeout(function() {
      var mid = $("body").width()/2;
      dancers.forEach(function(dancer){
        dancer.reposition(dancer.top, mid);
      });
    } ,danceTime*2);
    setTimeout(function() {
      keepDancing = true;
      dancers.forEach(function(dancer){
        dancer.step();
      });
    } ,danceTime*2);
  });

  $(".findPartner").on("click", function() {
    var midway = Math.floor(dancers.length/2);
    var firstPartners = dancers.slice(0, midway);
    var secondPartners = dancers.slice(midway);
    
    for (var i = 0; i < firstPartners.length; i++){
      firstPartners[i].findPartner(secondPartners[i]);
      secondPartners[i].findPartner(firstPartners[i]);
    }
    
  });


  $("body").on("mouseover", ".dancer", function(){
    $(this).remove();
  });

  $(".addDancerButton").on("click", function(event){
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
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      danceTime
    );
    $('body').append(dancer.$node);
    dancers.push(dancer);
  });
});

