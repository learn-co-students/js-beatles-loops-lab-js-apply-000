function theBeatlesPlay(musicians, instruments) {
  var musicianInfo = [];
  for(var i = 0; i < musicians.length; i++) {
    musicianInfo.push(musicians[i] + " plays " + instruments[i]);
  }
  return musicianInfo;
}

function johnLennonFacts(facts) {
  var index = 0;
  while(index < facts.length) {
    facts[index] += "!!!";
    index++;
  }
  return facts;
}

function iLoveTheBeatles(num) {
  var love = [];
  do {
    love.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return love;
}
