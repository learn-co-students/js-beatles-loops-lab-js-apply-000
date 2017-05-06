function theBeatlesPlay(array1,array2) {
  var arr = []
  for (var i = 0; i < array1.length; i++) {
    arr.push(array1[i] + ' plays ' + array2[i])
  }
  return arr;
}

function johnLennonFacts(arrayfacts) {
  var arrayOfFacts = []
  var i = 0;
  while (i < arrayfacts.length) {
    arrayOfFacts.push(arrayfacts[i] + '!!!')
    i++
  }
  return arrayOfFacts
}

function iLoveTheBeatles(num) {
  var empty = []
  do {
    empty.push('I love the Beatles!')
    num++
  }
  while (num < 15)
  return empty
}
