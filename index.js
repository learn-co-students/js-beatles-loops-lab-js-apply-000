function theBeatlesPlay (musicians, instruments) {
  let theBeatles = []
  for (let i=0; i < musicians.length; i++) {
    theBeatles.push(musicians[i] + ' plays ' + instruments[i])
  }
  return theBeatles;
}

function johnLennonFacts(facts) {
  let updatedFacts = [];
  let i = 0;
  while (i < facts.length) {
    updatedFacts.push(facts[i] + '!!!');
    i++;
  }
  return updatedFacts;
}

function iLoveTheBeatles(i) {
  let result = [];
  do {
    i+=1;
    result.push("I love the Beatles!")
  } while (i < 15)
  return result;
}