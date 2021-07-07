// add solution here
function theBeatlesPlay (musicians, instruments) {
  let x = [];
  
  for (let i = 0; i < musicians.length; i++) {
    let sentence = `${musicians[i]} plays ${instruments[i]}`;
    x.push(sentence);
  }
  return x
}

function johnLennonFacts(facts) {
  for (let i = 0; i < facts.length; i++) {
    let newString = facts[i] + '!!!';
    facts[i] = newString;
  }
  
  return facts
}

function iLoveTheBeatles(n) {
  let arr = [];
  
  do {
    arr.push("I love the Beatles!");
    n++;
  } while (n < 15)
  
  return arr;
    
}