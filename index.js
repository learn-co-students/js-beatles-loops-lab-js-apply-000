function theBeatlesPlay(musicians, instruments) {
  var mtArray = [];
  for (var i = 0; i < musicians.length; i++) {
    mtArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return mtArray;
}

function johnLennonFacts(array) {
  var facts = [];
  while (facts.length < array.length) {
    facts.push(array[facts.length] + '!!!');
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var mtArray = [];
  do {
    mtArray.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return mtArray;
}