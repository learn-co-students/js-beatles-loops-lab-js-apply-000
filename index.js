function theBeatlesPlay (mus, inst) {
  var emptyArr = [];
    for (var i = 0; i < mus.length; i++) {
      emptyArr.push(mus[i] + " plays " + inst[i])
    }
  return emptyArr;
}

function johnLennonFacts (facts) {
  var emptyArr = [];
  for (var i = 0; i < facts.length; i++) {
    emptyArr.push(facts[i] + "!!!")
  }
  return emptyArr;
}

function iLoveTheBeatles(num) {
  var emptyArr = [];
  do {
   emptyArr.push("I love the Beatles!")
  } while (num < 15; num++);
  return emptyArr;
}
