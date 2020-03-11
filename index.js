// add solution here

function theBeatlesPlay(musicians, instruments) {
  let arr = [];
  for (let i = 0; i < musicians.length; i++) {
    arr.push(musicians[i] + " plays " + instruments[i]);
  }
  return arr;
}

function johnLennonFacts(facts) {
  for(let i = 0; i < facts.length; i++) {
    facts[i] += "!!!"
  }
  return facts;
}
function iLoveTheBeatles(num) {
  let arr = [];
  do {
    arr.push("I love the Beatles!");
  } while(arr.length < 15-num);
  return arr;
}