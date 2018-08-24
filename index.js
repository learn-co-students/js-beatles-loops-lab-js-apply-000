// add solution here

function theBeatlesPlay(musiciansArr, instrumentsArr) {
  let listOfInstruments = [];
  
  for (var i = 0; i < musiciansArr.length; i++) {
    listOfInstruments.push(musiciansArr[i] + ' plays ' + instrumentsArr[i]);
  }
  
  return listOfInstruments;
}

function johnLennonFacts(facts) {
  let i = 0;
  
  while (i < facts.length) {
    facts[i] += '!!!';
    i++;
  }
  
  return facts;
}

function iLoveTheBeatles(num) {
  let anArr = [];
  
  do {
    anArr.push('I love the Beatles!');
    num++;
  }
  while (num < 15);
  
  return anArr;
}
