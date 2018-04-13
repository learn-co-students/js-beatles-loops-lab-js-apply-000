function theBeatlesPlay(musAr, insAr) {
  var musPlay = []
  for(var i = 0; i<=musAr.length-1; i++) {
      musPlay[i] = "" + musAr[i] + " plays " + insAr[i]
    }
  return musPlay
}

function johnLennonFacts(factsAr) {
  var i = 0;
  while (i < factsAr.length) {
    factsAr[i] += "!!!"
    i++
  }
  return factsAr
}

function iLoveTheBeatles(aNum) {
  var howMuchILove = []
  var i = 0
  
  
  do {
   howMuchILove[i] = "I love the Beatles!" 
   i++
  } while (i < aNum+1 && aNum < 15)
  return howMuchILove
  
}