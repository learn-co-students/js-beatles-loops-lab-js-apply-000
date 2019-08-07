function theBeatlesPlay(musicians, instruments) {
  let returnArr = [];
  for (let i = 0; i < musicians.length; i++) {
    returnArr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return returnArr;
}

function johnLennonFacts(facts) {
  let returnArr = [];
  let count = 0;
  while (count < facts.length) {
    returnArr.push(facts[count] + "!!!");
    count++;
  }
  return returnArr;
}

function iLoveTheBeatles(num) {
  let love = [];
  let count = 0;
  
  do {
    love.push("I love the Beatles!");
    count++;
  }
  while (count < 15-num)
  
  return love;
}