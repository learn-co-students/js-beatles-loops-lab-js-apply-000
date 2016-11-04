function theBeatlesPlay(mus, inst) {
  var res = [];
  for (var i = 0; i < mus.length; i++) {
    res.push(mus[i] + " plays " + inst[i]);
  }
  return res;
}

function johnLennonFacts(facts){
  var counter = facts.length;
  while (counter > 0) {
    facts[counter - 1] = facts[counter - 1] + "!!!";
    counter--;
  }
  return facts;
}

function iLoveTheBeatles(num){
  var res = [];
  do {
    res.push("I love the Beatles!")
    num++;
  } while(num < 15);
  return res;
}
