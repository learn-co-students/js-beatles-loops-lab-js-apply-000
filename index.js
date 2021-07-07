function theBeatlesPlay(musicians, instruments) {
  const lineup = []
  var foo = ""
  for(var i=0; i<musicians.length; i++) {
    lineup.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return lineup
}
function johnLennonFacts(facts) {
  var i = 0
  var newFacts = []
  while (i < facts.length) {
    newFacts.push(`${facts[i]}!!!`)
    i++
  }
  return newFacts
}
function iLoveTheBeatles(num) {
  var loveBeatles = []
  do {
    loveBeatles.push("I love the Beatles!")
    num += 1;
  } while (num < 15);
  return loveBeatles
}