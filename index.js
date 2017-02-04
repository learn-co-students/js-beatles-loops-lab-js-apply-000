var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay(musicians, instruments) {
  var x = [];
  for (var i = 0; i < musicians.length; i++) {
    x.push(musicians[i] + " plays " + instruments[i])
  }
  return x;
}
function johnLennonFacts(x) {
  var y = [];
  while (y.length < x.length) {
    y.push(x[y.length] + "!!!")
  }
  return y;
}
function iLoveTheBeatles(n) {
  var x = [];
  do {
    x.push("I love the Beatles!")
    n++
  } while (n < 15);
  return x;
}