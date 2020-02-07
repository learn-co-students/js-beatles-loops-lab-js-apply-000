// add solution here

function theBeatlesPlay(musicians, instruments){
  const imagine = []
 
 for (let i = 0, l = musicians.length; i < l; i++) {
    imagine.push(`${musicians[i]} plays ${instruments[i]}`)
  }
 return imagine;
}
 

function johnLennonFacts(facts){
  const shoutedFacts =[]
  
  let i = 0;
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++
}
return shoutedFacts;
}

function iLoveTheBeatles(i) {
  const empty = []
  
  do {
    empty.push('I love the Beatles!')
    i++
  } while (i < 15);
  return empty;
  }
  

