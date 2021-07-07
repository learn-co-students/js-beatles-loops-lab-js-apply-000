function theBeatlesPlay(musicians, instruments) {
  var play = [];
  for (var i = 0; i < musicians.length; i++) {
    play.push(`${musicians[i]} plays ${instruments[i]}`);
}
return play;
}

function johnLennonFacts(facts) {
  const exclamation = [];
  let i = 0;
  while (i < facts.length) {
    exclamation.push(`${facts[i]}!!!`);
    i++;
  }
  return exclamation;
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    n++;
  } while (n < 15);
  
  return array;
}
