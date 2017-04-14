function theBeatlesPlay(musicians, instruments) {
  var info = [];
  var count = 0;
  for (count = 0; count < 4; count ++) {
    info[count] = musicians[count] + " plays " + instruments[count]
  }
  return info
}

function johnLennonFacts(facts) {
  var count = 0;
  var exclaimedFacts = [];
  while (facts[count]) {
    exclaimedFacts[count] = facts[count] + "!!!";
    count ++;
  }
  return exclaimedFacts
}


function iLoveTheBeatles(input) {
  var rant = [];
  var count = 0;
  do {
    rant[count] = "I love the Beatles!";
    count++;
    input++;
  } while (input < 15);
  return rant
}