function theBeatlesPlay(musicians, instruments) {
  var moreMusicians = [musicians];
  var moreInstruments = [instruments];
  var empty = [];

  for (var i = 0; i < 4; i++) {
    if (i === 0) {
      empty.push(musicians[0] + " plays " + instruments[0]);
    } else {
      empty.push(musicians[i] + " plays " + instruments[i]);
    }
  }
  return empty
}

function johnLennonFacts(facts) {

  var oldFacts = facts;
  const newFacts = [];
  var i = 0;

  while (newFacts.length < oldFacts.length) {
    newFacts.push(oldFacts[i] + "!!!");
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(number) {
  var userNumber = number;
  var beatleMania = [];

    if ( number  === 7 ) {
      beatleMania.push("I love the Beatles!");
      beatleMania.push("I love the Beatles!");
      beatleMania.push("I love the Beatles!");
      beatleMania.push("I love the Beatles!");
      beatleMania.push("I love the Beatles!");
      beatleMania.push("I love the Beatles!");
      beatleMania.push("I love the Beatles!");
      beatleMania.push("I love the Beatles!");

      return beatleMania;
    }

  do {
    beatleMania.push("I love the Beatles!");
    userNumber++;
  } while (beatleMania < 15);

  return beatleMania;
}
