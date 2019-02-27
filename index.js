// add solution here
function theBeatlesPlay(musicians,instruments) {
  var newArray = [];
  for (let i = 0; i < musicians.length; i++) {
    var curMus = musicians[i];
    var curIns = instruments[i];
    newArray.push(curMus + " plays " + curIns)
  }
  return newArray;
}


function johnLennonFacts(facts) {
  var factCounter = 0;
  while (factCounter < facts.length) {
    facts[factCounter] = facts[factCounter] + '!!!';
    factCounter++;
  }
  return facts;
}

function iLoveTheBeatles(aNum) {
  var emtArray = [];
  do {
    emtArray.push('I love the Beatles!')
    aNum++;
  } while (aNum < 15);
  
  return emtArray;
}