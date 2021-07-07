// add solution here
function theBeatlesPlay(musicians,instruments) {
  var X = [];
  for (let i = 0; i < musicians.length; i++) {
    X.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return X;
}

function johnLennonFacts(facts) {
 var Y = [];
 let i = 0;
 while (i < facts.length) {
   Y.push(facts[i] + "!!!");
   i++;
 }
 return Y
}

function iLoveTheBeatles(n) {
  var Z = [];
  do {Z.push("I love the Beatles!");
  n++;
  } while (n < 15);
return Z;
}