function theBeatlesPlay (musicians, instruments) {
  var result = [];
  for (var i = 0; i < musicians.length; i++) {
    var str = musicians[i] + ' plays ' + instruments[i];
    result.push(str);
  }
  return result;
};

function johnLennonFacts (facts) {
  var newFacts = [];
  for (var i = 0; i < facts.length; i++) {
    var str = facts[i] + '!!!';
    newFacts.push(str);
  }
  return newFacts;
};

function iLoveTheBeatles (num) {
  var result = [];

  result.push('I love the Beatles!');
  num += 1;

  while (num < 15) {
    result.push('I love the Beatles!');
    num += 1;
  }
  return result;
};
