// add solution here

function theBeatlesPlay (musicians, instruments) {
  let res = [];
  for (var i = 0; i < musicians.length; i++) {
    let str = musicians[i] + " plays " + instruments[i];
    res.push(str);
  }
  return res;
}

function johnLennonFacts (facts) {
  let i = 0;
  let res = [];
  while (i < facts.length) {
    let fact = facts[i];
    res.push(fact.concat("!!!"));
    i++;
  }
  return res;
}

function iLoveTheBeatles (number) {
  let res = [];
  do {
    number++;
    res.push("I love the Beatles!");
  } while (number < 15);
  return res;
}
