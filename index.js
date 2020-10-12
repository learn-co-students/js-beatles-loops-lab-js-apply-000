// add solution here
function theBeatlesPlay(musicians , instruments) {
  var x = [];
  for (var i = 0; i < musicians.length; i++) {
      x.push(musicians[i] + ' plays ' + instruments[i]);
    }
  return x;
}

function johnLennonFacts(a) {
  var i= 0;
  while (i < a.length) {
    a[i] = a[i] + "!!!";
    i++
  }
  return a;
}

function iLoveTheBeatles(n) {
  var s = [];
  do {
    s.push('I love the Beatles!');
    n++;
  } while( n < 15)
  return s;
}
