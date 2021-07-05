function theBeatlesPlay(musicians, instruments) {
  var combined = []
  var i;
  for (i=0;i<musicians.length;i++) {
    combined[i] = musicians[i]+" plays "+instruments[i]
  }
  return combined
}

function johnLennonFacts(factArray) {
  var newarray = []
  var i;
  for (i=0;i<factArray.length;i++) {
    newarray[i]=factArray[i]+"!!!"
  }
  return newarray
}

function iLoveTheBeatles(num) {
  var emptyArray = []
  var arrayPos = 0
  do {
    emptyArray[arrayPos] = "I love the Beatles!"
    num = num + 1
    arrayPos = arrayPos + 1
  } while (num < 15)
  return emptyArray
}