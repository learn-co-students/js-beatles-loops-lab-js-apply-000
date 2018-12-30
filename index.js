// add solution here
function theBeatlesPlay(musicians, instruments) {
  let strings = []
  
  for (let i = 0; i < musicians.length; i++) {
    strings.push(musicians[i] + ' plays ' + instruments[i])
  }
  
  return strings
}

function johnLennonFacts(facts) {
  let factsArray = []
  
  for (let i = 0; i < facts.length; i++) {
    let fact = facts[i] + '!!!'
    console.log(fact)
    factsArray.push(fact)
  }
  
  return factsArray
}

let iLoveTheBeatles = (num) => {
  let array1 = []
  while (num < 15) {
    array1.push('I love the Beatles!')
    num++
  }
  
  if (num > 15) return ['I love the Beatles!']
  return array1
}