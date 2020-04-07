// add solution here
let output1 = [];

function theBeatlesPlay(musicians, instruments) {
  for (let i = 0; i < instruments.length; i++) {
    output1.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return output1;
}

let output2 = [];

function johnLennonFacts(facts) {
  let i = 0;
  while (i < facts.length) {
    facts[i] += '!!!';
    i++
  }
  return facts;
}

let output3 = [];

function iLoveTheBeatles(num) {
  
  if (num < 15) {
    do {
      num++;
      output3.push('I love the Beatles!')
    } while (num < 15)
  } else {
    output3 = ['I love the Beatles!'];
  }
  return output3;
}
