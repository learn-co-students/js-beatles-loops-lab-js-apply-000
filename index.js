// add solution here
function theBeatlesPlay (muscians, instruments) {
const length = muscians.length-1;
let band = [];
  for(let i = 0; i <= length; i++) {
  band.push(`${muscians[i]} plays ${instruments[i]}`);
  }
return band;
}

function johnLennonFacts (facts) {
let n = 0;
let exclamationAddedFacts = [];
  while(n<facts.length) {
  exclamationAddedFacts.push(`${facts[n]}!!!`)
  n++;
  }
  return exclamationAddedFacts;
}

function iLoveTheBeatles (n) {
let arr = [];
  do {
    arr.push(`I love the Beatles!`);
    n ++;
  } while (n < 15);
return arr;
}
