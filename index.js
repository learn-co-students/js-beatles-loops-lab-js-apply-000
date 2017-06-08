function theBeatlesPlay(musicians, instruments) {
  var arry = []

  for (var i = 0; i < musicians.length; i++) {
    arry.push(musicians[i] + " plays " + instruments[i]);
  }
  return arry;
}

function johnLennonFacts(facts) {
  var arry = [];

  var i = 0;

  while(i < facts.length) {
    arry.push(facts[i] + "!!!");
    i++;
  }
  return arry;
}

function iLoveTheBeatles(num) {
  var newArry = [];

  do {
    newArry.push("I love the Beatles!");
    num++
  }
  while (num < 15);
  return newArry;
}
