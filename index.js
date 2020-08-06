function theBeatlesPlay(musicians, instruments) {
  let finalArr = [];
  
  for (let i = 0; i < musicians.length; i++) {
    let currMember = musicians[i];
    let currInstrument = instruments[i];
    finalArr.push(currMember + ' plays ' + currInstrument);
  }
  return finalArr;
}

function johnLennonFacts(factsArr) {
  let finalArr = [];
  
  let i = 0
  while (i < factsArr.length) {
    let currFact = factsArr[i];
    finalArr.push(currFact + '!!!');
    i++
  }
  return finalArr
}

function iLoveTheBeatles(num) {
  let finalArr = [];
  
  do {
    let addition = 'I love the Beatles!'
    finalArr.push(addition)
    num++
  }
  while (num < 15) {
    return finalArr
  }
}