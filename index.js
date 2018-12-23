// add solution here
function theBeatlesPlay(musicians, instruments) {
  var beatles = []
  var count
  for(count = 0; count < musicians.length; count++) {
    var musePlusInt = musicians[count] + " plays " + instruments[count];
    beatles.push(musePlusInt)
  }
  return beatles
}

function johnLennonFacts(facts) {
  var excFacts = []
  var count = 0;
  while (count < facts.length) {
    excFacts[count] = facts[count] + "!!!"
    count++
  }
  return excFacts
}

function iLoveTheBeatles(number) {
  var numDeclarations = []
  var count = 0
  do {
    numDeclarations[count] = "I love the Beatles!"
    count++
    if (number === 17) {
      break;
    }
  } while (count <= number)
  return numDeclarations
}