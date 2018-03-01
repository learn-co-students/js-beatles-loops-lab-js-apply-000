function theBeatlesPlay(musicians, instruments) {
  let array = []
  for (var i = 0; i < musicians.length; i++) { //adds the musician & instrument to empty array
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length) { //add exclamation points to facts array as long as there is a fact
    facts[i] = facts[i] + "!!!"
    i++ //break the loop only when there are no more facts
  }
  return facts
}

function iLoveTheBeatles(number) {
  let array = [] // create empty array
  do { //say aka push I love the Beatles! while number parameter is less than 15
    array.push("I love the Beatles!")
    number++ //increment number
  } while (number < 15)
  return array
}
