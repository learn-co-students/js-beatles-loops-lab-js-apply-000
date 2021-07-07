function theBeatlesPlay (musicians,insruments) {
  var counter = 0
  var arr = []
  for (;musicians[counter];) {
    arr.push(musicians[counter] + ' plays ' + insruments[counter])
    counter++
  }
  return arr
}

function johnLennonFacts (facts) {
  var arr = []
  var i = 0
  while (i < facts.length) {
    arr.push(facts[i] + '!!!')
    i++
  }
  return arr
}

function iLoveTheBeatles (num) {
  var arr = []
  do {
    arr.push('I love the Beatles!')
    num++
  }
  while (num < 15)
  return arr
}
