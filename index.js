// add solution here
function theBeatlesPlay(musicians, instruments) {
  const myArray = [];
  for (let i=0; i < musicians.length; i++) {
    myArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return myArray;
}


function johnLennonFacts(facts) {
  const newFacts = [];

  let i = 0;
  while (i < facts.length) {
    newFacts.push(facts[i] + "!!!");
    i++;
  }
  return newFacts;
}


function iLoveTheBeatles(n) {
  const newArray = [];

  do {
    newArray.push('I love the Beatles!');
    n++;
  } while (n < 15);
  return newArray
}
