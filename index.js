function theBeatlesPlay(musicians, instruments) {
  var strings = [];
  for (var i = 0; i < musicians.length; i++) {
    strings.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return strings
}

function johnLennonFacts(facts) {
  var fac = [];
  var i = 0;
  while(i < facts.length) {
    fac.push(facts[i] + '!!!');
    i++;
  }
  return fac
}

function iLoveTheBeatles(number) {
  var arr = [];
  do {
    arr.push('I love the Beatles!');
    number++
  } while (number < 15);
  return arr;
}
