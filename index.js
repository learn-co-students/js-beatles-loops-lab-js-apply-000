function theBeatlesPlay(musicians, instruments) {
  var ray = [];
  for (var i = 0; i < musicians.length; i++) {
    ray.push(musicians[i] + ' plays ' + instruments[i])
  }
  return ray;
}

function johnLennonFacts(facts) {
  var ray = [];
  var i = 0;

  while (i < facts.length) {
    ray.push(facts[i] + '!!!')
    i++
  }
  return ray;
}

function iLoveTheBeatles(num) {
  var ray = [];
  var i = num;
  var limit = 15;
  do {
    i++;
    ray.push('I love the Beatles!');
  } while (i < limit);
  return ray;
}
