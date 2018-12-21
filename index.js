// add solution here

//loop 1
const theBeatlesPlay = (arrayM, arrayI) => {
  var empty = []
  let emptyString = ''
  for (let i = 0; i < arrayM.length; i++) {
    emptyString = (arrayM[i] + " plays " + arrayI[i])
    empty.push(emptyString)
  }
  return empty
}

//loop 2 
const johnLennonFacts = (facts) => {
  let counter = 0
  var facts2 = facts
  while (counter < facts.length) {
    facts2[counter] += "!!!"
    counter++
  }
  return facts2
}

//loop 3 
const iLoveTheBeatles = (num) => {
  var arr = []
  do {
    arr.push("I love the Beatles!")
    num++
  } while (num < 15)
  return arr
}