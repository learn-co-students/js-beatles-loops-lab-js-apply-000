// add solution here
function theBeatlesPlay (musicians, instruments) {
  var arr = [];
  for (let i = 0; i < musicians.length; i++) {
    arr.push(musicians[i] + " plays " + instruments[i]);
  }

  return arr;
}

function johnLennonFacts (facts) {
  let i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!";
    i++;
  }

  return facts;
}

function iLoveTheBeatles (num) {
  var arr = [];

  while (num < 15) {
    arr.push ("I love the Beatles!")
    num++
  }

  if (num == 17) {
    arr.push("I love the Beatles!")
  }

  return arr;
}
