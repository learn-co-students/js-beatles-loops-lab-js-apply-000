function theBeatlesPlay(musArray, insArray) {
  const finalArray = [];
  
  for (let i = 0; i < musArray.length; i++) {
    const currentBeatle = musArray[i];
    const currentInstrument = insArray[i];
    let string = `${currentBeatle} plays ${currentInstrument}`
    finalArray.push(string);
  }
  
  return finalArray;
}


function johnLennonFacts (factArray) {
  const finalArray = [];
  let index = 0;
  while (index < factArray.length) {
    const currentString = factArray[index];
    finalArray.push(`${currentString}!!!`)
    index++;
  }
  
  return finalArray;
}


function iLoveTheBeatles(num) {
  const finalArray = [];
  let counter = num;
  do {
    finalArray.push(`I love the Beatles!`);
    counter++;
  } while (counter < 15)
  return finalArray;
}

