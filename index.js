// add solution here

var theBeatlesPlay = function(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    var str = musicians[i] + " plays " + instruments[i]
    array.push(str)
  }
  return array
}

var johnLennonFacts = function(facts) {
  var n = 0
  var arrLength = facts.length
  while (n < arrLength) {
    facts[n] = facts[n] + "!!!"
    n++
  }
  return facts
}

var iLoveTheBeatles = function(n) {
  var arr = []
  do {
    arr.push("I love the Beatles!")
    n++
  } while (n < 15)
  return arr
}
