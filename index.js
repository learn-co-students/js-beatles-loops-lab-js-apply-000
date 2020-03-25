function theBeatlesPlay(arrMusician, arrInstrument) {
  let newArr = [];
  for (let i = 0; i < arrMusician.length; i++) {
    let curMusician = arrMusician[i];
    let curInstrument = arrInstrument[i];
    newArr.push(`${curMusician} plays ${curInstrument}`);
  }
  return newArr;
}

function johnLennonFacts(arr) {
  let newArr = [];
  let i = 0;
  while (i < arr.length) {
    let curFact = arr[i];
    newArr.push(`${curFact}!!!`);
    i++;
  }
  return newArr;
}

function iLoveTheBeatles(num) {
  let newArr = [];
  do {
  newArr.push(`I love the Beatles!`);
  num++;
} while (num < 15);
return newArr;
}
