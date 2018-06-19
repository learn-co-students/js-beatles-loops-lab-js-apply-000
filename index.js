function theBeatlesPlay(musicians, instruments) {
  let output = [];

  for (let i = 0; i < musicians.length; i++) {
    output[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return output;
}

function johnLennonFacts(facts) {
  for (let i = 0; i < facts.length; i++) {
    facts[i] += "!!!";
  }
  return facts;
}

function iLoveTheBeatles(n) {
  let output = [];

  do {
    output.push("I love the Beatles!");
    n++;
  }
  while (n < 15)
  return output;
}
