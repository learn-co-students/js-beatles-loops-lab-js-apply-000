function theBeatlesPlay(arrMus, arrIns) {
 var arrFin = []

 var arrMusLength = arrMus.length;
 for (var i = 0; i < arrMusLength; i++) {
    arrFin.push(arrMus[i] + " plays " + arrIns[i])
 }
 return arrFin
}

function johnLennonFacts(arrFacts) {
  var arrFactsNew = []

  var arrFactsLength = arrFacts.length;
  for (var i = 0; i < arrFactsLength; i++) {
     arrFactsNew.push(arrFacts[i] + "!!!")
  }
  return arrFactsNew
}

function iLoveTheBeatles(inc) {
  var arrFin = []
  do {
    arrFin.push("I love the Beatles!")
    inc++
  } while (inc < 15)

  return arrFin
}
