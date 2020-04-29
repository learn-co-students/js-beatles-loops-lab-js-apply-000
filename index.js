function theBeatlesPlay (musiciansArray, instrumentsArray) {
  let result = [];
  
  for (let i = 0; i < musiciansArray.length; i++) {
    let string = String(musiciansArray[i]) + " plays " + String(instrumentsArray[i])
    result.push(string)
  }
  return result;
}

function johnLennonFacts (array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let string = array[i] + "!!!";
    result.push(string);
  }
  return result;
}

function iLoveTheBeatles (number) {
  let result = [];
  do {
    let string = "I love the Beatles!";
    result.push(string);
    number++;
  }
  while (number < 15)
  return result;
}