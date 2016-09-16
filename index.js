function theBeatlesPlay(musicians, instruments) {
  var beatlesSentence = [];

  for(var i = 0; i < musicians.length; i++) {
    beatlesSentence.push(musicians[i] + " plays " + instruments[i]);
  }
  return beatlesSentence;
}

function johnLennonFacts(facts) {
  var lennonFacts = [];
  var i = 0;

  while (lennonFacts.length < facts.length) {
    lennonFacts.push(facts[i] + "!!!")
    i++;
  }
  return lennonFacts;
}

function iLoveTheBeatles(num) {
  var howMuchDoILoveThem = [];

  do {
    howMuchDoILoveThem.push("I love the Beatles!");
    num++
  } while (num < 15)
  
  return howMuchDoILoveThem;
}
