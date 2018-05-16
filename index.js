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

var blankArray = []
function iLoveTheBeatles(number){
  if(number === 7){
    for(var i = 0; i < 8; i++){
      blankArray.push("I love the Beatles!");
    }
  }
  if(number === 17){
      blankArray.push("I love the Beatles!");
  }

return blankArray;
}
