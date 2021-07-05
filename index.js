// add solution here

function theBeatlesPlay(musicians, instruments) {
  const emptyArray = [];
  for (let i = 0; i < musicians.length; i++) {
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  let filledArray = emptyArray;
  return filledArray;
}

function johnLennonFacts(facts) {
  const theseBeFacts = [];
  const emphasis = '!!!';
  let i = 0;
  while(i < facts.length) {
    theseBeFacts.push(`${facts[i]}${emphasis}`);
    i++
  }
  return theseBeFacts;
}

function iLoveTheBeatles(number) {
  const whatever = [];
  do {
    whatever.push("I love the Beatles!");
    number++;
  } while (number < 15);
  
  return whatever;
}