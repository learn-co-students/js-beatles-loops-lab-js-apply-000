function theBeatlesPlay(musicians,instruments) {
  var arrayOne = [];
  for (var i = 0; i < musicians.length; i++) {
    arrayOne.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return arrayOne;
}

function johnLennonFacts(facts) {
  var i = 0;   
  var arrayFacts = [];
  while (i < facts.length) {
    arrayFacts.push(facts[i] + '!!!');
    i++;
  }
  return arrayFacts;
}

function iLoveTheBeatles(n) {
  var loveArray = [];
  do {
    loveArray.push('I love the Beatles!');
    n++;
  }
  while (n < 15);
  return loveArray;
}
