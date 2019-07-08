// add solution here
function theBeatlesPlay(musicians, instruments) {
  let base = [];
  for(let i = 0; i < musicians.length; i++) {
    base.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return base;
}

function johnLennonFacts(facts) {
  let length = facts.length
  let count = 0;
  let base = []
  while (count < length) {
    base.push(facts[count] + '!!!');
    count ++;
  }
  return base;
}

function iLoveTheBeatles(num) {
  let phrase = "I love the Beatles!"
  let i = 0;
  let base = [];
  num = num % 17;
  do {
    base.push(phrase);
    i++;
  } while (i <= num)
  return base
}
