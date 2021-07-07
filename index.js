// add solution here
function theBeatlesPlay(arrMusicians, arrInstruments) {
  var newArr = []
  for (var i =0; i<arrMusicians.length; i++) {
    newArr.push(arrMusicians[i] + " plays " + arrInstruments[i])
  }
  return newArr;
}

function johnLennonFacts(arrFacts) {
  for (var j =0; j<arrFacts.length; j++) {
    arrFacts[j] += "!!!";
  }
  return arrFacts;
}

function iLoveTheBeatles (num) {
  var newArr = []
  do {
    newArr.push("I love the Beatles!")
    num++
  }
  while (15>num)
  return newArr
}