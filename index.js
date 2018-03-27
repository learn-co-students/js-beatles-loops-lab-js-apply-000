function theBeatlesPlay(musicians, instruments){
  var sentences = [];
  var i = 0;
  for (i = 0; i < musicians.length; i++) {
    var newSentence = musicians[i] + " plays " + instruments[i];
    sentences[i] = newSentence;
  }
  return sentences;
}

function johnLennonFacts(facts){
  var exclamation = []; 
  var i = 0;
  while (i < facts.length){
    var exclaimed = facts[i] + "!!!";
    exclamation[i] = exclaimed;
    i++;
  }
  return exclamation;
}

function iLoveTheBeatles(i){
  var love = [];
  do {
    love.push("I love the Beatles!");
    i++;
  } while (i < 15);
  return love;
}