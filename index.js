// add solution here

function theBeatlesPlay(musicians, instruments) {
  const statements = [];
  for (let i = 0; i < musicians.length; i++) {
    statements.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return statements;
}

function johnLennonFacts(factsArr) {
  let counter = 0;
  while (counter < factsArr.length) {
    factsArr[counter] += "!!!";
    counter++;
  }
  return factsArr;
}

function iLoveTheBeatles(number) {
  const love = [];
  do {
    love.push('I love the Beatles!');
    number++;
  } while (number < 15);
  return love;
}