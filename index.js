function theBeatlesPlay(musicians, instruments){
  var emptyArray = new Array();
  for (var i=0; i<musicians.length; i++) {
    emptyArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return  emptyArray;
}

function johnLennonFacts(facts){
var newFact = new Array();
var i = 0;
  while (i<facts.length) {
    newFact.push(facts[i] + "!!!");
    i++;
  }
  return newFact;
}

function iLoveTheBeatles(x){
  var emptyArray = new Array();
  do {
    emptyArray.push("I love the Beatles!");
    x++;
  } while (x<15);
  return emptyArray;
}
