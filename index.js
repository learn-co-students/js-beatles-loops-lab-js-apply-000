// add solution here
function theBeatlesPlay(musiciansArray, instrumentsArray) {
  let statementArray = [];
  let string = "";
  for (let i = 0; i < musiciansArray.length; ++i) {
    let curMusician = musiciansArray[i];
    let curInstrument = instrumentsArray[i];
    string = curMusician + " plays " + curInstrument;
    statementArray.push(string);
  }
  return statementArray;
}

function johnLennonFacts(anArr) {
  let newArr = [];
  let newString = "";
  let i = 0;
  while (i < anArr.length) {
    let curSent = anArr[i];
    newString = curSent + "!!!"
    newArr.push(newString);
    ++i;
  }
  return newArr;
}

function iLoveTheBeatles(num) {
  let newVar = [];
  let i = 0;
  let sillySent = "I love the Beatles!";
  if (num >= 15) {
    newVar.push(sillySent);
  }
  else {
    do {
      newVar.push(sillySent);
      ++i;
    } while (i <= num);
  }
  return newVar;
}