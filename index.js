// add solution here
function theBeatlesPlay (musicians, instruments) {
  var newArray = []
  let i = 0
  for (i = 0; i < musicians.length; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray
}

function johnLennonFacts(facts) {
  var factsArray = []
  let i = 0;
  while (i < facts.length) {
    factsArray.push(`${facts[i]}!!!`)
    i++;
  }
  return factsArray
}

function iLoveTheBeatles(num) {
  var beatlesArray = []
  do {
    beatlesArray.push(`I love the Beatles!`)
    num++;
  } while (num < 15)
  return beatlesArray
}
