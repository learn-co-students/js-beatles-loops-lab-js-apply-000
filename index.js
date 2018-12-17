// add solution here
function theBeatlesPlay(musicians, instruments) {
  var roles = [];
  for (var i = 0; i < musicians.length; i++) {
    roles.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return roles;
}

function johnLennonFacts(facts) {
  var exclamations = [];
  var j = 0;
  while (j < facts.length) {
    exclamations.push(facts[j] + '!!!');
    j++;
  }
  return exclamations;
}

function iLoveTheBeatles(n) {
  var loveArray = [];
  do {
    loveArray.push('I love the Beatles!');
    n++;
  } while (n < 15);
  return loveArray;
}