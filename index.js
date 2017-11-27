
function theBeatlesPlay(musicians, instruments) {
  let newArray = [];
  for (let i = 0; i < musicians.length; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArray;
}

theBeatlesPlay(musicians,instruments);

function johnLennonFacts(facts) {
  let excitedFacts = [];
  let i = 0
  while(i < facts.length) {
    excitedFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return excitedFacts;
}

function iLoveTheBeatles(x) {
  let obsessedArray = [];
  do {
    obsessedArray.push("I love the Beatles!");
    x++;
  } while (x < 15); {
  }
  return obsessedArray;
}
