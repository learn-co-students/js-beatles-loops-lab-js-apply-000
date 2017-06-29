function theBeatlesPlay(musicians, instruments) {
  var whoPlaysArray = [];
  for (var i=0; i < musicians.length; i++) {
    whoPlaysArray.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return whoPlaysArray;
}

function johnLennonFacts(facts) {
  var factsArray = [];
  var i = 0;
  while (i < facts.length) {
    factsArray.push(facts[i] + '!!!')
    i++;
  }
  return factsArray;
}

function iLoveTheBeatles(number) {
  var iLoveArray = [];
  var i = 0;
  do {
    iLoveArray.push("I love the Beatles!");
    i++;
  }
  while (i <= number);
  if (i < 15) {
    return iLoveArray;
  } else {
    return "I love the Beatles!";
  }
}
