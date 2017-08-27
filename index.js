var musicians = ['John Lennon', 'Paul McCartney', 'George Harrisson', "Ringo Starr"]
var instruments = ['guitar', 'bass', 'guitar', 'drums']


function theBeatlesPlay(musicians, instruments){
  var returnArray = []
  for (var i = 0; i < musicians.length; i++){
    returnArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return returnArray
}

function johnLennonFacts(facts) {
  var returnArray2 = []
  var i = 0
  while (i < facts.length) {
    returnArray2.push(`${facts[i]}!!!`)
    i++
  }
  return returnArray2
}

function iLoveTheBeatles(n){
  var outputArray = []
  do {
    outputArray.push('I love the Beatles!')
    n++
  } while (n < 15)
  return outputArray
}
