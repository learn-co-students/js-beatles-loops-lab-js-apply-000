function theBeatlesPlay (musicians, instruments) {
  var powerArray = []
  for (var i =0; i < musicians.length; i++) {
    var performance = musicians[i] + " plays " + instruments[i]
    powerArray.push(performance)

  }
  return powerArray
}

function johnLennonFacts (facts) {
  var newArray = []
  var i = 0
  while (i < facts.length) {
    newArray.push (facts[i] + "!!!")
    i++
  }
  return newArray
}

function iLoveTheBeatles (number) {
  var emptyArray = []
  do {
    emptyArray.push ("I love the Beatles!")
    number++
  }
  while (number < 15)
  return emptyArray
}
