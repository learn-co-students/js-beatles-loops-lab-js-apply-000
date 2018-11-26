function theBeatlesPlay(mus, instr) {
  var theBand = [];
  for (let i = 0; i < instr.length; i++) {
    theBand.push(`${mus[i]} plays ${instr[i]}`);
  }
  return theBand;
}

function johnLennonFacts(facts) {
  let i = 0
  while(i < facts.length) {
    facts[i] += '!!!'
    i++
  }
  return facts;
}

function iLoveTheBeatles (n) {
  var arrayThis = [];
  do {
    arrayThis.push('I love the Beatles!')
    n++
  } while (n < 15)
  return arrayThis;
}