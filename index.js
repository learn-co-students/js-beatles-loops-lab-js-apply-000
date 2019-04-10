// add solution here


function theBeatlesPlay(musicians, instruments){
  
  let newArr = [];  //create a new array to store our results
  
  for (let i = 0; i < musicians.length; i++){
    let currentMusician = musicians[i];
    let currentInstrument = instruments[i];
    let curString = `${currentMusician} plays ${currentInstrument}`;
    newArr.push(curString);
  }
  return newArr
}

function johnLennonFacts(factsArr){
  let counter = 0;
  let newArr = [];
  while (counter < factsArr.length){
    let curString = factsArr[counter];
    curString += '!!!';
    newArr.push(curString);
    counter++;
  }
  return newArr;
}


function iLoveTheBeatles(num){
  let newArr =[];
  let str = 'I love the Beatles!';
  
  if (num > 15){
    newArr.push(str);
    return newArr;
  }
  let counter = 15 - num;
  do {
    newArr.push(str);
    counter++
  } while (counter <= 15)
  
  return newArr;
}