function theBeatlesPlay(musicians, instruments) {
  let arr = [];
  for (let i=0;i<musicians.length;i++) {
    arr[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return arr;
}

function johnLennonFacts(facts) {
  for (let i=0;i<facts.length;i++) {
    facts[i] = facts[i] + "!!!";
  }
  return facts;
}

function iLoveTheBeatles(number) {
  let arr = [];
  do {
    arr.push("I love the Beatles!");
    number++;
  } while (number<15);
  return arr;
}
