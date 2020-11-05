// add solution here

function theBeatlesPlay(musicians, instruments) {
  const arr = []
  var l = musicians.length
  
  for (let i = 0; i < l; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr 
}

function johnLennonFacts(facts) {
  const factsWithExclamationPoints = []
  var i = 0
  
  while (facts[i]) {
    factsWithExclamationPoints.push(`${facts[i]}!!!`);
    i++;
  }
  return factsWithExclamationPoints
}

function iLoveTheBeatles(i) {
  const arr = []
  
  do {
    arr.push(`I love the Beatles!`);
    i++;
  }
  while (i < 15);
  return arr
}