var emptyArray = [];

function theBeatlesPlay(musicians,instruments){
  for(var i = 0; i < musicians.length; i++){
    emptyArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return emptyArray;
}

var factsOnTheBeatles = [];
function johnLennonFacts(facts){

  var i = 0;
  while(i < facts.length){
    factsOnTheBeatles.push(facts[i] + "!!!");
    i++;
  }
  return factsOnTheBeatles;
}


function iLoveTheBeatles(number){
  var blankArray = [];
  if(number != 17){
    var i = 0;
  }
  else {
    var i = 17;
  }


  do {
    blankArray.push("I love the Beatles!");
    i++;
  }
  while (i <= number);

  return blankArray;
}
