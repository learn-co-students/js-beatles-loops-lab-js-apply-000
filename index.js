function theBeatlesPlay(musicians,instruments) {
  var p = [];
  for (var i = 0; i < musicians.length; i++) {
    p.push(musicians[i] + ' plays ' + instruments[i])
  }
  return p;
}

function johnLennonFacts(arrays) {
  var i = 0
  while (i < arrays.length) {
    arrays[i] += '!!!';
    i++;
  }
  return arrays;
}

function iLoveTheBeatles(incr) {
  var p = [];
  var i = 0;
  do {
    p.push('I love the Beatles!');
    i++;
  } while (i <= incr && incr < 15);
  return p;
}