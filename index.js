function theBeatlesPlay(arrMusicians, arrInstruments) {
  var combinedArr = [];
  for (var i = 0; i < arrMusicians.length; i++) {
    var str = arrMusicians[i] + ' plays ' + arrInstruments[i]
    combinedArr.push(str)
  }
  return combinedArr;
}

function johnLennonFacts(arrFacts) {
  var excitedFacts = [];

  var i = 0;
  while (i < arrFacts.length) {
    var newStr = arrFacts[i] + '!!!'
    excitedFacts.push(newStr)
    i++
  }
  return excitedFacts
}

function iLoveTheBeatles(num) {
  var arr = [];
  var i = 0;
  if (num > 15) {
    num = 0
  }

  do {
    var statement = 'I love the Beatles!'
    arr.push(statement)
    i++
  } while (i <= num)

  return arr
}
