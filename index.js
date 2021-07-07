// add solution here
function theBeatlesPlay(musiciansArr, instrumentsArr) {
  var pairs = [];
  
  for (var i = 0; i < musiciansArr.length; i++) {
    var str = `${musiciansArr[i]} plays ${instrumentsArr[i]}`
    pairs.push(str)
  }
  return pairs
}

function johnLennonFacts(facts) {
  var i = 0;
  var sameFacts = [] 
  while(facts.length-i) {
    sameFacts.push(facts[i]+'!!!')
    i++
  }
  return sameFacts
}

function iLoveTheBeatles(num) {
  var iLoveB = []; 
  
  do {
    iLoveB.push("I love the Beatles!")

  num++;
  } while (num < 15)
  
  return iLoveB;
}