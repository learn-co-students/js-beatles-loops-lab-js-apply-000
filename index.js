function theBeatlesPlay(musicians, instruments){
  var total = [];
  var i = 0;
  for (i = 0; i < musicians.length; i++){
    var musician = musicians[i]
    var instrument = instruments[i]
    var combo = `${musician} plays ${instrument}`;
    total.push(combo);
  }
  return total;
}

function johnLennonFacts(facts){
  var total = [];
  var i = 0;
  for (i = 0; i < facts.length; i++){
    var mainFact = facts[i]
    var newFact = `${mainFact}!!!`
    total.push(newFact)
  }
  return total;
}

function iLoveTheBeatles(number){
  var total = [];
  do {
    total.push("I love the Beatles!")
    number++;
  }
  while (number < 15);
  return total;
}
