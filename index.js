function theBeatlesPlay(musician, instrument) {
  var band = [];
  for (var i = 0; i < musician.length; i++) {
    band[i] = `${musician[i]} plays ${instrument[i]}`;
  }
  return band;
}

function johnLennonFacts(fact) {
  var i = 0;
  while (i < fact.length) {
    fact[i] = `${fact[i]}!!!`;
    i++;
  }
  return fact;
}

function iLoveTheBeatles(num) {
  var output = [];
  do {
    output.push(`I love the Beatles!`);
    num++;
  } while (num < 15);
  return output;
}
