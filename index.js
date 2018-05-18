function theBeatlesPlay(musicians, instruments) {
  let array = [];
  for(let i=0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array;
}

function johnLennonFacts(facts) {
  let results = [];
  let count = 0;
  while (count < facts.length) {
    results.push(`${facts[count]}!!!`);
    count++;
  }
  return results;
}
 
function iLoveTheBeatles(num) {
  let loveDeclaration = [];
    do {
      loveDeclaration.push("I love the Beatles!");
      num++;
    } while (num < 15);
    return loveDeclaration;
 }