// add solution here
function theBeatlesPlay(musicians, instruments) {
  var result = [];
  for (let i = 0; i < musicians.length; i++) {
    result.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return result;
}

function johnLennonFacts(facts) {
  var factArray = [];
  let j = 0;
  while (j < facts.length) {
    factArray.push(`${facts[j]}!!!`);
    j++;
  }
  return factArray;
}

function iLoveTheBeatles(number) {
  var newArray = [];
    do {
      newArray.push("I love the Beatles!");
      number++;
    } while (number < 15);
    return newArray;
}
