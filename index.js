function theBeatlesPlay(musicians, instruments) {
   const arr =  [];
   for(let i = 0; i< musicians.length; i++) {
     arr.push(`${musicians[i]} plays ${instruments[i]}`)
     
   }
   return arr;
}

function johnLennonFacts(facts) {
  let i = 0 
  const arr = [];
  while(i < facts.length) {
  arr.push(`${facts[i]}!!!`)
  i++
  }
  return arr;
}

function iLoveTheBeatles(number) {
  let i = 0
  const arr = [];
  if (number > 15) {
  arr.push(`I love the Beatles!`)
  }
  else {
  while(i <= number) {
  arr.push(`I love the Beatles!`)
  i++
  } 
  }
  return arr;
}

// add solution here
//theBeatlesPlay(["Bono", "Cher"], ["Guitar", "Piano"])
//["Bono plays Guitar", "Cher plays Piano"]