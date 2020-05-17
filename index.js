function theBeatlesPlay(musicians, instruments) {
const instrumentsPlayed = []; 

for ( let i = 0;  i < musicians.length; i++) {
  instrumentsPlayed.push(`${musicians[i]} plays ${instruments[i]}`)
}

return instrumentsPlayed;
}

function johnLennonFacts(johnFacts) {
  const facts = [];
  let i = 0;
  while (i < johnFacts.length) {
    facts.push(`${johnFacts[i]}!!!`)
    
    i++;
  }

return facts;
  }

function iLoveTheBeatles(copies) {
  const love = [];
  let n = copies;
  do {
   n = n + 1;
  love.push('I love the Beatles!')
  
  } while (n < 15);
  return love;

  
}