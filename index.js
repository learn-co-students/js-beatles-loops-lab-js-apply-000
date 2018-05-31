function theBeatlesPlay(musicianArray, instrumentArray) {
  var arr = []
  var i = 0
  for (i = 0; i < musicianArray.length ; i++) {
    arr.push(`${musicianArray[i]} plays ${instrumentArray[i]}`)
  }
  return arr
}

function johnLennonFacts(factsArray) {
  var i = 0
  while (i < factsArray.length) {
    factsArray[i] = factsArray[i] + "!!!"
    i++
  }
  return factsArray
}

function iLoveTheBeatles(num) {
  var arr = []
  do {
    arr.push("I love the Beatles!")
    num++
  }
  while (num < 15);
  return arr
}