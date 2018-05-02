function theBeatlesPlay (array, instrument) {
  var musicians = []
  for (let i = 0; i < array.length; i++) {
    musicians.push(array[i] + ' plays ' + instrument[i])
  }
  return musicians;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (facts[i]) {
    facts[i] += '!!!'
    i++;
  }
  return facts
}

function iLoveTheBeatles(num) {
  var result = [];
  do {
    result.push("I love the Beatles!");
    num++
  }
  while(num < 15)

  return result;
}

