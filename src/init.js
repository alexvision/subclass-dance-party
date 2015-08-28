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

  setInterval(function(){
    var height = $('body').height();
    var width = $('body').width();
    var spacing = 25;
    var heightCount = Math.floor(height/spacing);
    var widthCount = Math.floor(width/spacing);
    var map = [];

    for(var i = 0; i < heightCount; i++){
      map.push(new Array(widthCount));
    }
    dancers.forEach(function(dancer){
      var roundedTop = Math.floor(dancer.top/spacing);
      var roundedLeft = Math.floor(dancer.left/spacing);
        
      if(!map[roundedTop][roundedLeft]){
        map[roundedTop][roundedLeft] = dancer;
      } else { 
        dancer.collision()
        map[roundedTop][roundedLeft].collision();
      }

    });
    delete map;
  }, 100)

});

/* 

First, determine the height and width of the body of the window

divide the body size by 25. Then create an array of body/25 elements

[[[],[],[],[],[]],[],[],[]]

for each dancer push it to the spot in the map that it occupies on in the DOM

iterate through the map. and if there are two dancers in a specific spot. call the collision logic 

*/

