function theBeatlesPlay (mus, inst) {
  var emptyArr = [];
    for (var i = 0; i < mus.length; i++) {
      emptyArr.push(mus[i] + " plays " + inst[i])
    }
  return emptyArr;
}

function johnLennonFacts (facts) {
  var emptyArr = [];
  var i = 0
  while (i < facts.length) {
    emptyArr.push(facts[i] + "!!!")
    i++
  }
  return emptyArr;
}

function iLoveTheBeatles(num) {
  var emptyArr = [];
  var i = 0
  if (num < 15) {
    do {
      emptyArr.push("I love the Beatles!")
      i++;
    } while (i <= num)
  } else {
    return ["I love the Beatles!"]
  }
  return emptyArr;
}
