function theBeatlesPlay(musicians, instruments) {
  var strings = [];

  for (var i in musicians) {
    var string = musicians[i] + " plays " + instruments[i];

    strings.push(string);
  }

  return strings;
}

function johnLennonFacts(facts) {
  var newFacts = [];

  for (var i in facts) {
    var newFact = facts[i] + "!!!";
    newFacts.push(newFact);
  }

  return newFacts;
}

function iLoveTheBeatles(num) {
  var emptyArr = [], loveNote = "I love the Beatles!";

  if (num < 15) {
    for (var i = 0; i <= num; i++) {
      emptyArr.push(loveNote);
    }
  } else {
    emptyArr.push(loveNote);
  }
  return emptyArr;
}
