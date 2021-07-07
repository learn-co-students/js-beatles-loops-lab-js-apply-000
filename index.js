function theBeatlesPlay(musicians, instruments) {
  var a = [];
  for (var i = 0; i < musicians.length; i++){
  var b = musicians[i] + " plays " + instruments[i];
    a.push(b);
  }
  return a;
}

var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function johnLennonFacts(){
  var c = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var i = 0;
  var d = [];
  while (i < c.length){
    d.push(c[i] + "!!!");
    i++;
  }
  return d;
}

function iLoveTheBeatles(num){
  var e = []
  do {
    e.push("I love the Beatles!")
    num++;
  }
  while (num <15);
  return e;
}
