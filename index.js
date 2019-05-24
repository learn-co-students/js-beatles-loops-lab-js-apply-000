function theBeatlesPlay(musicians, instruments) {
  var myArr = []
  for (var i = 0; i < musicians.length; i++) {
    myArr.push(musicians[i]+ ' plays '+instruments[i])
  }
  return myArr
}

function johnLennonFacts(jlFacts) {
  var i = 0
  var myArr = []
  while (i < jlFacts.length) {
    myArr.push(jlFacts[i]+'!!!')
    i++
  }
  return myArr
}

function iLoveTheBeatles(num) {
  var myArr = []
  var i = 0
  do {
    myArr.push('I love the Beatles!')
    i++
  } while (i < 15-num)
  return myArr
}