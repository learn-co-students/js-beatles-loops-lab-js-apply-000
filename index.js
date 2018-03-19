function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (var i = 0; i < musicians.length; i++) {
    arr.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return arr;
}

function johnLennonFacts(facts) {
  var i = 0;
  var output = [];
  while (i < facts.length) {
    output.push(facts[i] + '!!!');
    i++;
  }
  return output;
}

function iLoveTheBeatles(num) {
  var output = [];
    do {
      output.push('I love the Beatles!');
      num++;
    } while (num < 15);

  return output;
}