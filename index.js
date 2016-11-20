function theBeatlesPlay(musicians, instruments) {
  var details = [];
  for (var i = 0; i < musicians.length; i++) {
    var musician = musicians[i];
    var instrument = instruments[i];
    var description = musician + " plays " + instrument;
    details.push(description);
  }
  return details;
}

function johnLennonFacts(facts) {
  var factsAmplified = [];
  for (var i = 0; i < facts.length; i++) {
    factsAmplified.push(facts[i] + "!!!");
  }
  return factsAmplified;
}

function iLoveTheBeatles(count) {
  var love = [];
  do{
    love.push("I love the Beatles!");
    count++;
  }while(count < 15);
  return love;
}
