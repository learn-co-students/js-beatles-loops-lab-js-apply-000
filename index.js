function theBeatlesPlay(musicians, instruments) {
  var newArr = [];
  for (var i = 0; i < musicians.length; i++) {
    newArr.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return newArr;
};


function johnLennonFacts(facts) {
  var newArr = [];
  for (var i = 0; i < facts.length; i++) {
    newArr.push(facts[i] + "!!!");
  }
  return newArr;
};



function iLoveTheBeatles(number) {
  var newArr = [];
  do {
    newArr.push('I love the Beatles!');
    number++;
  }

  while (number < 15);
  return newArr;
}
