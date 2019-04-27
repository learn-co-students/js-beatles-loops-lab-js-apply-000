// add solution here
function theBeatlesPlay(musicians, instruments) {
  const array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + ' plays ' + instruments[i])
  }
  return array
}

function johnLennonFacts(facts) {
  const array = [];
  var i = 0;
  while (i < facts.length) {
    array.push(facts[i] + '!!!')
    i++
  }
  return array;
}

function iLoveTheBeatles(n) {
  const array = [];
  do {
    array.push('I love the Beatles!')
    n++
  } while (n < 15);
  return array;
}
