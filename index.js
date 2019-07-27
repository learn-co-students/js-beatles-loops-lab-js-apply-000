// add solution here
function theBeatlesPlay(musicians, instruments) {
  let list = [];
  
  for (let i = 0; i < musicians.length; i++) {
    list[i] = musicians[i] + ' plays ' + instruments[i];
  }
  return list;
}

function johnLennonFacts(facts) {
  let i = 0;
  while (i < facts.length) {
    facts[i] += '!!!';
    i++;
  }
  return facts;
}

function iLoveTheBeatles(num) {
  let list = [];
  let i = num;
  do {
    i++;
    list.push("I love the Beatles!");
  } while (i < 15);
  
  return list;
}