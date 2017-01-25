function theBeatlesPlay(musicians, instruments){
  var a = [];
  for (var i = 0; i < musicians.length; i++){
    a.push(musicians[i] + " plays " + instruments[i])
  }
  return a
}

function johnLennonFacts(facts){
  var a = [];
  var i = 0;
  while (i < facts.length){
    a.push(facts[i] + "!!!");
    i++;
  }
  return a
}

function iLoveTheBeatles(number){
  var a = [];
  do {
    a.push("I love the Beatles!");
    number++;
  } while (number < 15)
  return a
}
