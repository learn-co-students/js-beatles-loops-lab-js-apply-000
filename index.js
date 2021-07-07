// add solution here
function theBeatlesPlay(musicians, instruments) {
  let newArray = [];
  
  for (let i = 0; i < musicians.length; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArray;
}

// -----------

function johnLennonFacts(factsOfLennon) {
  let stringArray = [];
  let i = 0;
  
  while (i < factsOfLennon.length) {
    stringArray.push(factsOfLennon[i]+'!!!');
    i++;
  }
  return stringArray;
}

// -----------

function iLoveTheBeatles(number) {
  if (number > 15) {
    return 'I love the Beatles!';
  }
  let anArray = [];
  let i = 0;
  
  do {
    i++;
    anArray.push('I love the Beatles!');
  } while (i < (15 - number));
  
  return anArray;
}