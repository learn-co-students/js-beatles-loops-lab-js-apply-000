function theBeatlesPlay(musicians, instruments) {
  var sentence = []
  for (var i = 0, l = musicians.length; i < l; i++) {
    sentence.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return sentence
}

function johnLennonFacts(facts) {
  var array = []
  var i = 0;
  while(facts.length > i) {
    array.push(`${facts[i++]}!!!`)
  }
  return array
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push('I love the Beatles!')
    number++
  } while (number < 15)
  return array
}
