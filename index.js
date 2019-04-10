// add solution here
function theBeatlesPlay(arrayMusicians, arrayInstruments) {
  let arr = [];
 
  for(let i = 0; i < arrayMusicians.length; i++) {
    let str = arrayMusicians[i] + ' plays ' + arrayInstruments[i];
    arr.push(str);
  }
  return arr;
}

function johnLennonFacts(arrayFacts) {
  let arr = [];
  let i = 0;
  while(arr.length !== arrayFacts.length) {
    let str = arrayFacts[i] + '!!!';
    arr.push(str);
    i += 1;
  }
  return arr;
}

function iLoveTheBeatles(aNum) {
  let arr = [];
  if(aNum < 15) {
      do {
  aNum += 1;
  arr.push("I love the Beatles!")
} while (aNum < 15);
  } else{
  arr.push("I love the Beatles!")
  }
  return arr;
}