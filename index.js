// add solution here
function theBeatlesPlay(musicians,instruments){
  var beatles= [];
  for (var i=0; i <musicians.length; i++){
    beatles.push(musicians[i] + " plays " + instruments[i]);
  }
  return beatles;
}

function johnLennonFacts(facts){
  var JLFacts =[]
  var i = 0;
  while (i < facts.length) {
    JLFacts.push(facts[i] + "!!!")
    i++;
  }
  return JLFacts;
}

function iLoveTheBeatles (x) {
  var scream = []
  do {
    scream.push("I love the Beatles!")
    x++;
  }
  while (x<15)
  return scream
}