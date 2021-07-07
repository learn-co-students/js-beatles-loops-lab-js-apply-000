function theBeatlesPlay(musician, instrument) {
  let band = [];
  for (let i = 0; i < musician.length; i++) {
    band.push(`${musician[i]} plays ${instrument[i]}`);
  }
  return band;
}

function johnLennonFacts (facts) {
  let count = 0;
  while (count < facts.length) {
    facts[count] += "!!!";
    count++;
  }
  return facts;
}

function iLoveTheBeatles (number) {
  let ilb = [];
  do {
    ilb.push("I love the Beatles!");
    number++;
  }
  while (number < 15);
  return ilb;
}
