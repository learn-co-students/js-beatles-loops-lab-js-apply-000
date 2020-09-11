// add solution here
function theBeatlesPlay(arrMusicians, arrInstruments) {
  let sentArr = [];
  for (let i = 0; i < arrMusicians.length; i++) {
    sentArr.push(arrMusicians[i] + ' plays ' + arrInstruments[i]);
  }
  return sentArr;
}

function johnLennonFacts(arrFacts) {
  let i = 0;
  while (i< arrFacts.length) {
    arrFacts[i] += '!!!';
    i++;
  }
  return arrFacts;
}

function iLoveTheBeatles(num) {
  let arr = [];
  do {
    arr.push('I love the Beatles!');
    num++;
  }
  while (num < 15)
  return  arr;
}