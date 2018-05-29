function theBeatlesPlay(musicians, instruments) {
  let theBeatlesArr = [];
  for(let i = 0; i < musicians.length; i++) {
    theBeatlesArr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return theBeatlesArr;
}

function johnLennonFacts(facts) {
  let updatedFacts = [];
  let i = 0;
  while(i < facts.length) {
    updatedFacts.push(`${facts[i]}!!!`);
    i++
  }
  return updatedFacts;
}

function iLoveTheBeatles(n) {
  let resultArr = [];
  do {
    n++;
    resultArr.push("I love the Beatles!");
  } while(n < 15)
  return resultArr;
}
