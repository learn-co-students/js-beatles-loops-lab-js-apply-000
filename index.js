var n = [];
 
function theBeatlesPlay(musicians, instruments) {
  for (let i = 0; i < musicians.length; i++) {
    n.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return n;
}

function johnLennonFacts(facts) {
  let x = 0;
    while (x < facts.length) {
      facts[x] = (`${facts[x]}!!!`);
      x++;
    }
  return facts;
}

function iLoveTheBeatles(y) {
  var z = [];
    do {
      z.unshift("I love the Beatles!");
      y++;
    } while (y < 15) {
   return z;
  }
}