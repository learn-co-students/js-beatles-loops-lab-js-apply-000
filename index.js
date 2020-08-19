// add solution here
function theBeatlesPlay(musicians, instruments) {
  var firstArr = [];
  for (let i = 0; i < musicians.length; i++) {
    firstArr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return firstArr
}

function johnLennonFacts(facts) {
  let i = 0;
  while (i < facts.length) {
   facts[i] = facts[i] + "!!!"
   i++;
  }
  return facts;
}

function iLoveTheBeatles(num) {
  var arr = [];
  let i = 0;
  do {
    arr.push("I love the Beatles!")
    i++;
  } while (i <= num && num < 15) {
    return arr;
  }
}