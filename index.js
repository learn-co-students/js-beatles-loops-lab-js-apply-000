function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (var i = 0; i < musicians.length; i++) {
    arr.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return arr;
}

function johnLennonFacts(facts) {
  var count = 0;
  var i = 0;
  var arr = [];
  while (count < facts.length) {
    arr.push(facts[i] + '!!!');
    count++;
    i++;
  }
  return arr;
}

function iLoveTheBeatles(num) {
  if (num > 15) {
    return ['I love the Beatles!'];
  }
  var arr = ['I love the Beatles!'];
  var i = 0;
  do {
    arr.push('I love the Beatles!');
    i++;
  } while (i < num);
  return arr;
}