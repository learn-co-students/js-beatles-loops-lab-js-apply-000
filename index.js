function theBeatlesPlay (musicians, instruments) {
 let band = [];
 for (let i = 0; i < musicians.length; i++) {
  band[i] = `${musicians[i]} plays ${instruments[i]}`;
 }
 return band;
}

function johnLennonFacts(array) {
  let facts = [];
  for (let element of array) {
    facts.push(`${element}!!!`);
  }
  return facts;
}

function iLoveTheBeatles(n) {
  let love = [];
  do {
    love.push("I love the Beatles!");
    n++;
  } while (n < 15)
  return love;
}