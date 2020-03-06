// add solution here
function theBeatlesPlay(arrMusicians, arrInstruments) {
  let result = [];
  for (let i = 0; i < arrMusicians.length; i++) {
    let string = `${arrMusicians[i]} plays ${arrInstruments[i]}`;
    result.push(string);
  }
  return result;
}

function johnLennonFacts(arrFacts) {
  let result = [];
  while(arrFacts.length > 0) {
    result.push(arrFacts.shift() + '!!!');
  }
  return result;
}

function iLoveTheBeatles(num) {
  let result = [];
  do {
    result.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return result;
}