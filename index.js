function theBeatlesPlay(musicians, instruments) {
  var merged = [];

  for (let i = 0; i < musicians.length && i < instruments.length; i++) {
    merged[i] = musicians[i] + " plays " + instruments[i];
  }

  return merged;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length){
    facts[i] = facts[i] + "!!!";
    i++
  }

  return facts;
}

function iLoveTheBeatles(num) {
  var love = [];
  var i = 0;

  do {
    love[i] = "I love the Beatles!";
    num++;
    i++;
  } while (num < 15)

  return love;
}
