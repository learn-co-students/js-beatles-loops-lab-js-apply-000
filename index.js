function theBeatlesPlay(musicians,instruments){
  const testArray = [];
  for(let i = 0, l = musicians.length ; i < l; i++){
    testArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return testArray;
}

function johnLennonFacts(facts) {
  const outputFacts = [];
  let i = 0;
  while (i < facts.length) {
    outputFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return outputFacts;
}

function iLoveTheBeatles(n) {
  const testArray = [];

  do {
    testArray.push('I love the Beatles!');
    n++;
  } while (n < 15);
  return testArray;
}