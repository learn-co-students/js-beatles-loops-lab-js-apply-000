function theBeatlesPlay(musicians, instruments) {
  var beatlesBand = []
  for (let i = 0; i < musicians.length; i++) {
    beatlesBand.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatlesBand
}

function johnLennonFacts(factArray) {
  var i = 0
  while (i < factArray.length) {
  factArray[i] += "!!!"
  i++
}
return factArray
}

function iLoveTheBeatles(number) {
  var arr = []
  do {
    arr.push("I love the Beatles!")
    number++
  } while (number < 15)
 return arr
}
