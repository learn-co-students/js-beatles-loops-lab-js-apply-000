// theBeatlesPlay accepts two parameters, loops over an array of musicans.
var theBeatlesPlay = function(musicians, instruments) {
    const theBeatles = []

    for (var i = 0; i < 4; i++) {
      theBeatles.push(`${musicians[i]} plays ${instruments[i]}`)
    }
    return theBeatles
}
// johnLennonFacts accepts an array of facts, and adds '!!!' to the end of each fact.
var johnLennonFacts = function(factsArray) {
  const facts = []
  var i = 0

  while (i < factsArray.length) {
    facts.push(`${factsArray[i]}!!!`)
    i++
  }
  return facts
}
// iLoveTheBeatles accepts a number and adds a string to an array while the number is less than 15.
var iLoveTheBeatles = function(n) {
  var beatlesArray = []

  do {
    beatlesArray.push(`I love the Beatles!`)
    n++
  } while (n < 15)
  return beatlesArray
}
