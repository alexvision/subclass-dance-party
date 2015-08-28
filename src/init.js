$(document).ready(function(){
  window.dancers = [];
  window.keepDancing = true;
  window.danceTime = 1000;

  $(".lineupButton").on("click", function() {
    keepDancing = false;
    var spacing = $('body').height()/dancers.length;
    setTimeout(function() {
      var mid = $("body").width()/2;
      dancers.forEach(function(dancer, i){
        dancer.reposition(i * spacing, mid);
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

  $(".moshpit").on("click", function() {
    var height = $("body").height();
    var width = $("body").width();

    dancers.forEach(function(dancer) {
      dancer.reposition(Math.random() * height, Math.random() * width);
      dancer.timeBetweenSteps /= 2;
    });
    
  });

  $("body").on("mouseover", ".dancer", function(){
    var id = $(this).data()['id'];
    $(this).remove();
    dancers.splice(id, 1);
  });

  $(".addDancerButton").on("click", function(event){

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      danceTime
    );
    $('body').append(dancer.$node);
    dancers.push(dancer);
  });
});

