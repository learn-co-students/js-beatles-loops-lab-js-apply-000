function theBeatlesPlay(musicians, instruments) {
  const theyPlay = [];
  for (let i=0; i<musicians.length; i++) {
    theyPlay.push(`${musicians[i]} plays ${instruments[i]}`)
  } return theyPlay
}

function johnLennonFacts(facts) {
  const excitedFacts = [];
  let i=0
  while (i<facts.length) {
    excitedFacts.push(`${facts[i]}!!!`)
    i++
  } return excitedFacts
}

let i = 0
function iLoveTheBeatles(i) {
  const biggestFan =[];
  do {
    biggestFan.push("I love the Beatles!")
    i++ 
  } while (i < 15);
  return biggestFan;
}