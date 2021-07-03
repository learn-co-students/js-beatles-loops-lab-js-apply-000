function theBeatlesPlay(musicians, instruments) {
    var allMusicians = [];
    for (var i = 0; i < musicians.length; i++) {
        allMusicians.push(musicians[i] + " plays " + instruments[i]);
    }
    return allMusicians;
}

function johnLennonFacts(facts) {
    var allFacts = [];
    var i = 0;
    while (i < facts.length) {
      allFacts.push(facts[i] + "!!!");
      i++;
    }
    return allFacts;
}

function iLoveTheBeatles(number) {
  var allNumbers = [];
  do {
    allNumbers.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return allNumbers;
}
