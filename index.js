function theBeatlesPlay(m, n) {
  var outputArray = [];
  for (var i = 0; i < m.length; i++) {
    outputArray.push(m[i]+' plays '+n[i]);
  }
  return outputArray;
}

function johnLennonFacts(f) {
  var outputArray = [];
  var i = 0;
  while (f[i]) {
    outputArray.push(f[i]+'!!!');
    i++;
  }
  return outputArray;
}

function iLoveTheBeatles(n) {
  var outputArray = [];
  var i = 0;
  do {
    outputArray.push('I love the Beatles!');
    i++;
  }
  while (i < n + 1 && n < 15);
  return outputArray;
}
