// add solution here
function theBeatlesPlay (musicians, instruments) {
  var result = []
  var i 
  for (i = 0; i<musicians.length; i++) {
    var string = `${musicians[i]} plays ${instruments[i]}`
    result.push(string)
  }
  return result
}

function johnLennonFacts(facts) {
  var result = []
  var i = 0
  while(i<facts.length) {
    result.push(facts[i] + "!!!")
    i++
  }
  return result 
}

function iLoveTheBeatles(n) {
  var result = []
  var i = n
  do {
    result.push("I love the Beatles!")
    i++
  }
  while (i<15)
  return result
}