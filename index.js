// add solution here
function theBeatlesPlay(musicians, instruments) {
  let beatles = []
  for (let i=0; i < musicians.length; i++) {
    beatles.push(musicians[i]+ ' plays '+instruments[i])
  }
  return beatles
}
function johnLennonFacts(facts) {
  let n = 0
  let newArray = []
  while(n < facts.length) { 
    console.log(facts[n])
     newArray.push(facts[n] + "!!!")
      n++;
}
  return newArray
}
function iLoveTheBeatles(number) {
  let knownArray = []
  let n = 'I love the Beatles!'
  do { 
    knownArray.push(n)
    console.log(knownArray[number])
    number++;
  } while (7 <= number && number < 15)
  
  return knownArray
} 