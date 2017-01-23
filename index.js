function theBeatlesPlay(musicians, instruments) {
  var sentences = [];
  for (var i = 0; i < musicians.length; i++) {
    sentences.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return sentences;
}

function johnLennonFacts (facts) {
  var excited = [];
  var i = 0
  while (excited.length < facts.length) {
    excited.push(facts[i] + '!!!');
    i++;
  }
  return excited;
}

function iLoveTheBeatles(num) {
  var strings = [];
  do {
    strings.push('I love the Beatles!');
  }while (num >= strings.length && num < 15);
  return strings;
}
