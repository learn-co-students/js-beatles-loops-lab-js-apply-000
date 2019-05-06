function theBeatlesPlay(musicians, instruments) {
  const array = [];
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`); 
  }
  return array;
}

function johnLennonFacts(facts) {
  const factsArray = [];
  let i = 0;
  while (i < facts.length) {
    factsArray.push(`${facts[i]}!!!`);
    i++;
  }
  return factsArray;
}

function iLoveTheBeatles(number) {
  const iLove = [];
  do {
    iLove.push(`I love the Beatles!`);
    number++;
  }
  while (number < 15);
  return iLove;
}