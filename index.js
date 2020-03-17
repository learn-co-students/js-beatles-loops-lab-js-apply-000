function theBeatlesPlay(musicians, instruments) {
  const emptyArray = [];
  
  for (let i = 0; i < musicians.length; i++) {
 emptyArray.push(`${musicians[i]} plays ${instruments[i]}`);
}
  return emptyArray;
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
  const emptyArray = [];
 
  do {
    emptyArray.push('I love the Beatles!');
    number++;
  } while (number < 15);
  
 return emptyArray;
}
