function theBeatlesPlay(musicians, instruments) {
  var array = [];

  for (let i = 0, l = musicians.length; i < l; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return array;
}

function johnLennonFacts(facts) {
  var exclaimFacts = [];

  let i = 0;
  while (i < facts.length) {
    exclaimFacts.push(`${facts[i]}!!!`);
    i++;
  }

  return exclaimFacts;
}

function iLoveTheBeatles(n) {
  var array = [];

  do {
    array.push('I love the Beatles!');
    n++;
  } while (n < 15);

  return array;
}