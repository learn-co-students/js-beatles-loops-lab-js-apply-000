function theBeatlesPlay(musicians, instruments) {
  var sentences = [];

  // for loop
  for (var i = 0; i < musicians.length; i++) {
    sentences[i] = musicians[i] + " plays " + instruments[i];
  }

  return sentences;
}

function johnLennonFacts(facts) {
  var i = 0;

  // while loop
  while (i < facts.length) {
    facts[i] += "!!!";
    i++;
  }

  return facts;
}

function iLoveTheBeatles(number) {
  var love = [];
  var i = 0;

  // do-while loop
  do {
    love[i] = "I love the Beatles!";
    i++;
  } while (i < number + 1 && number < 15);

  return love;
}
