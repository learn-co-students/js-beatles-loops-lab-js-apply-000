// add solution here


function theBeatlesPlay(musicians, instruments){
  var musinstrum = [];
  var text;
  for (let i = 0; i < musicians.length; i++) {
  text = musicians[i] + " plays " + instruments[i];
  musinstrum[i] = text;
  }
  return musinstrum;
}

 function johnLennonFacts(facts){
  var newFacts = [];
  var i = 0
  while (i < facts.length) {
    newFacts.push(facts[i] + "!!!")
    i++;
  }
  return newFacts;
}

 function iLoveTheBeatles(num) {
  var phrases = [];
  do {
    phrases.push("I love the Beatles!");
    num++
  } while (num < 15);
  return phrases;
}
