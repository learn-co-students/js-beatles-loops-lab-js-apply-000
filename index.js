function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for (var i = 0; i < musicians.length; i++) {
    if (i < instruments.length) {
      newArray.push(musicians[i] + " plays " + instruments[i]);
    } else {
      newArray.push(musicians[i] + " wasn't assigned an instrument");
    }
  }
  return newArray;
}

function johnLennonFacts(facts) {
  var i = 0;
  var newArray = [];
  while (i < facts.length) {
    newArray.push(facts[i] + "!!!");
    i = i + 1;
  }
  return newArray;
}

function iLoveTheBeatles(number) {
  var newArray = [];
  var i = 0;
  do {
    newArray.push("I love the Beatles!");
    i = i + 1;
  } while ((i <= (number)) && (number < 15));
  return newArray;
}
