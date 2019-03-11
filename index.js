// add solution here
function theBeatlesPlay(mus, ins) {
  var f = [];

  for (var i = 0; i < mus.length; ++i) {
    f.push(mus[i] + ' plays ' + ins[i])
  }

  return f;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i<facts.length) {
    facts[i] += "!!!";
    ++i;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var x = [];
  do {
    x.push("I love the Beatles!");
    ++n;
  } while (n < 15)
  return x;
}
